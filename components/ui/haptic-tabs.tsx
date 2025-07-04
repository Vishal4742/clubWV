"use client"

import React from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useHaptic } from "@/hooks/use-haptic"
import { cn } from "@/lib/utils"

interface HapticTabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsTrigger> {
  hapticType?: "light" | "medium" | "heavy" | "selection"
  enableHaptic?: boolean
}

const HapticTabsTrigger = React.forwardRef<React.ElementRef<typeof TabsTrigger>, HapticTabsTriggerProps>(
  ({ className, hapticType = "selection", enableHaptic = true, onClick, children, ...props }, ref) => {
    const { triggerHaptic, isSupported } = useHaptic()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (enableHaptic && isSupported) {
        triggerHaptic(hapticType)
      }
      onClick?.(event)
    }

    return (
      <TabsTrigger
        ref={ref}
        className={cn("transition-all duration-200", isSupported && enableHaptic && "active:scale-95", className)}
        onClick={handleClick}
        {...props}
      >
        {children}
      </TabsTrigger>
    )
  },
)

HapticTabsTrigger.displayName = "HapticTabsTrigger"

export { Tabs, TabsList, HapticTabsTrigger as TabsTrigger, TabsContent }
