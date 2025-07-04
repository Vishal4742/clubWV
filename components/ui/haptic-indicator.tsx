"use client"

import { useState, useEffect } from "react"
import { useHaptic } from "@/hooks/use-haptic"
import { Badge } from "@/components/ui/badge"
import { Vibrate } from "lucide-react"

export function HapticIndicator() {
  const { isSupported, triggerImpact } = useHaptic()
  const [showIndicator, setShowIndicator] = useState(false)

  useEffect(() => {
    // Show indicator for 3 seconds on page load if haptic is supported
    if (isSupported) {
      setShowIndicator(true)
      const timer = setTimeout(() => setShowIndicator(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [isSupported])

  const handleTestHaptic = () => {
    triggerImpact("medium")
    setShowIndicator(false)
  }

  if (!isSupported || !showIndicator) return null

  return (
    <div className="fixed top-20 right-4 z-50 animate-fade-in">
      <Badge
        onClick={handleTestHaptic}
        className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
      >
        <Vibrate className="w-3 h-3 mr-1" />
        <span className="text-xs font-medium">Haptic Enabled</span>
      </Badge>
    </div>
  )
}
