"use client"

import React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { useHaptic } from "@/hooks/use-haptic"
import { cn } from "@/lib/utils"

interface HapticButtonProps extends ButtonProps {
  hapticType?: "light" | "medium" | "heavy" | "selection"
  enableHaptic?: boolean
  onHapticFeedback?: () => void
}

export const HapticButton = React.forwardRef<HTMLButtonElement, HapticButtonProps>(
  ({ className, hapticType = "light", enableHaptic = true, onHapticFeedback, onClick, children, ...props }, ref) => {
    const { triggerHaptic, isSupported } = useHaptic()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (enableHaptic && isSupported) {
        triggerHaptic(hapticType)
        onHapticFeedback?.()
      }
      onClick?.(event)
    }

    return (
      <Button
        ref={ref}
        className={cn(
          "transition-all duration-200 active:scale-95",
          isSupported && enableHaptic && "hover:shadow-lg active:shadow-sm",
          className,
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Button>
    )
  },
)

HapticButton.displayName = "HapticButton"
