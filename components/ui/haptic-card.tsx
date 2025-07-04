"use client"

import React from "react"
import { Card, type CardProps } from "@/components/ui/card"
import { useHaptic } from "@/hooks/use-haptic"
import { cn } from "@/lib/utils"

interface HapticCardProps extends CardProps {
  hapticType?: "light" | "medium" | "heavy" | "selection"
  enableHaptic?: boolean
  interactive?: boolean
  onHapticFeedback?: () => void
}

export const HapticCard = React.forwardRef<HTMLDivElement, HapticCardProps>(
  (
    {
      className,
      hapticType = "light",
      enableHaptic = true,
      interactive = false,
      onHapticFeedback,
      onClick,
      children,
      ...props
    },
    ref,
  ) => {
    const { triggerHaptic, isSupported } = useHaptic()

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (enableHaptic && isSupported && interactive) {
        triggerHaptic(hapticType)
        onHapticFeedback?.()
      }
      onClick?.(event)
    }

    const handleTouchStart = () => {
      if (enableHaptic && isSupported && interactive) {
        triggerHaptic("selection")
      }
    }

    return (
      <Card
        ref={ref}
        className={cn(
          interactive && "cursor-pointer transition-all duration-200",
          interactive && isSupported && enableHaptic && "hover:shadow-lg active:scale-[0.98] active:shadow-sm",
          className,
        )}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        {...props}
      >
        {children}
      </Card>
    )
  },
)

HapticCard.displayName = "HapticCard"
