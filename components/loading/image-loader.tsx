"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Skeleton } from "./skeleton"

interface ImageWithLoaderProps {
  src: string
  alt: string
  className?: string
  skeletonClassName?: string
  onLoad?: () => void
  onError?: () => void
}

export function ImageWithLoader({ src, alt, className, skeletonClassName, onLoad, onError }: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }

  return (
    <div className="relative">
      {isLoading && <Skeleton className={cn("absolute inset-0", skeletonClassName)} />}

      {hasError ? (
        <div className={cn("bg-slate-100 flex items-center justify-center text-slate-400", className)}>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ) : (
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100", className)}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  )
}
