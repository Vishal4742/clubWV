import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("animate-pulse rounded-md bg-slate-200", className)} />
}

export function TeamMemberSkeleton() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-0 shadow-lg rounded-3xl p-6 h-full">
      <div className="text-center space-y-4">
        {/* Avatar skeleton */}
        <div className="w-32 h-32 mx-auto rounded-3xl bg-slate-200 animate-pulse"></div>

        {/* Name skeleton */}
        <Skeleton className="h-6 w-32 mx-auto" />

        {/* Role badge skeleton */}
        <Skeleton className="h-6 w-24 mx-auto rounded-full" />

        {/* Roll number skeleton */}
        <Skeleton className="h-4 w-28 mx-auto" />

        {/* CGPA skeleton */}
        <Skeleton className="h-4 w-20 mx-auto" />

        {/* Description skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4 mx-auto" />
          <Skeleton className="h-4 w-1/2 mx-auto" />
        </div>

        {/* Skills skeleton */}
        <div className="flex flex-wrap gap-1 justify-center">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>

        {/* Social links skeleton */}
        <div className="flex justify-center space-x-3 pt-2">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function EventCardSkeleton() {
  return (
    <div className="bg-white border-0 shadow-lg rounded-3xl overflow-hidden h-full">
      {/* Image skeleton */}
      <Skeleton className="w-full h-56" />

      <div className="p-6 space-y-4">
        {/* Title skeleton */}
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />

        {/* Date and location skeleton */}
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <Skeleton className="w-4 h-4" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="flex items-center space-x-3">
            <Skeleton className="w-4 h-4" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>

        {/* Description skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-8">
        {/* Main title skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-20 w-96 mx-auto" />
          <Skeleton className="h-16 w-64 mx-auto" />
        </div>

        {/* Subtitle skeleton */}
        <Skeleton className="h-8 w-80 mx-auto" />

        {/* Tagline skeleton */}
        <Skeleton className="h-12 w-72 mx-auto" />

        {/* Button skeleton */}
        <Skeleton className="h-14 w-48 mx-auto rounded-2xl" />
      </div>
    </div>
  )
}
