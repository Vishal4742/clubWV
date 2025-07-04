"use client"

import { useCallback } from "react"

// Haptic feedback types
export type HapticType = "light" | "medium" | "heavy" | "selection" | "impact" | "notification"

// Check if haptic feedback is supported
const isHapticSupported = (): boolean => {
  if (typeof window === "undefined") return false

  // Check for iOS haptic feedback
  if ("vibrate" in navigator || "hapticFeedback" in navigator) {
    return true
  }

  // Check for Android vibration API
  if ("vibrate" in navigator) {
    return true
  }

  return false
}

// Haptic patterns for different feedback types
const hapticPatterns = {
  light: [10],
  medium: [20],
  heavy: [30],
  selection: [5],
  impact: [15],
  notification: [10, 50, 10],
  success: [10, 50, 10, 50, 10],
  error: [50, 50, 50],
  warning: [25, 25, 25],
}

export function useHaptic() {
  const triggerHaptic = useCallback((type: HapticType = "light", customPattern?: number[]) => {
    if (!isHapticSupported()) return

    try {
      // Try iOS Haptic Feedback API first (if available)
      if ("hapticFeedback" in navigator) {
        const hapticFeedback = (navigator as any).hapticFeedback

        switch (type) {
          case "light":
            hapticFeedback.impact("light")
            break
          case "medium":
            hapticFeedback.impact("medium")
            break
          case "heavy":
            hapticFeedback.impact("heavy")
            break
          case "selection":
            hapticFeedback.selection()
            break
          case "notification":
            hapticFeedback.notification("success")
            break
          default:
            hapticFeedback.impact("light")
        }
        return
      }

      // Fallback to vibration API
      if ("vibrate" in navigator) {
        const pattern = customPattern || hapticPatterns[type] || hapticPatterns.light
        navigator.vibrate(pattern)
      }
    } catch (error) {
      console.warn("Haptic feedback failed:", error)
    }
  }, [])

  const triggerSuccess = useCallback(() => {
    triggerHaptic("notification", hapticPatterns.success)
  }, [triggerHaptic])

  const triggerError = useCallback(() => {
    triggerHaptic("heavy", hapticPatterns.error)
  }, [triggerHaptic])

  const triggerWarning = useCallback(() => {
    triggerHaptic("medium", hapticPatterns.warning)
  }, [triggerHaptic])

  const triggerSelection = useCallback(() => {
    triggerHaptic("selection")
  }, [triggerHaptic])

  const triggerImpact = useCallback(
    (intensity: "light" | "medium" | "heavy" = "light") => {
      triggerHaptic(intensity)
    },
    [triggerHaptic],
  )

  return {
    triggerHaptic,
    triggerSuccess,
    triggerError,
    triggerWarning,
    triggerSelection,
    triggerImpact,
    isSupported: isHapticSupported(),
  }
}
