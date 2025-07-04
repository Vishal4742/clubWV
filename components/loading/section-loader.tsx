import { Skeleton } from "./skeleton"
import { TeamMemberSkeleton, EventCardSkeleton } from "./skeleton"

export function TeamSectionLoader() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section title skeleton */}
        <div className="text-center mb-20 space-y-6">
          <div className="space-y-4">
            <Skeleton className="h-16 w-64 mx-auto" />
            <Skeleton className="h-16 w-48 mx-auto" />
          </div>
          <Skeleton className="h-8 w-96 mx-auto" />
        </div>

        {/* Team members grid skeleton */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <TeamMemberSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EventsSectionLoader() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section title skeleton */}
        <div className="text-center mb-20 space-y-6">
          <div className="space-y-4">
            <Skeleton className="h-16 w-64 mx-auto" />
            <Skeleton className="h-16 w-48 mx-auto" />
          </div>
          <Skeleton className="h-8 w-96 mx-auto" />
        </div>

        {/* Events grid skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <EventCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function AboutSectionLoader() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section title skeleton */}
        <div className="text-center mb-20 space-y-6">
          <div className="space-y-4">
            <Skeleton className="h-16 w-64 mx-auto" />
            <Skeleton className="h-16 w-48 mx-auto" />
          </div>
          <Skeleton className="h-8 w-96 mx-auto" />
          <Skeleton className="h-6 w-full max-w-4xl mx-auto" />
          <Skeleton className="h-6 w-3/4 max-w-4xl mx-auto" />
        </div>

        {/* Cards skeleton */}
        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg rounded-3xl p-8 h-full"
            >
              <div className="text-center space-y-6">
                <Skeleton className="w-16 h-16 mx-auto rounded-2xl" />
                <Skeleton className="h-8 w-32 mx-auto" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4 mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
