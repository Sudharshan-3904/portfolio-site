import React from "react";

/**
 * Technical minimal skeleton fallback for lazily loaded sections
 */
export default function SectionSkeleton({ id, title = "Loading Section", minHeight = "min-h-[420px]" }) {
  return (
    <section id={id} className={`py-20 relative overflow-hidden flex items-center justify-center ${minHeight}`}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title Skeleton */}
        <div className="section-title mb-12 flex flex-col items-center">
          <div className="h-8 w-48 bg-slate-800/60 rounded-md animate-pulse mb-3" />
          <div className="h-1 w-20 bg-primary/40 rounded-full animate-pulse" />
          <div className="h-3 w-64 bg-slate-800/40 rounded mt-4 animate-pulse" />
        </div>

        {/* Content Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-dark/60 border border-slate-800/60 rounded-xl p-6 h-64 flex flex-col justify-between animate-pulse"
            >
              <div className="space-y-3">
                <div className="h-5 w-3/4 bg-slate-800/80 rounded" />
                <div className="h-3 w-full bg-slate-800/50 rounded" />
                <div className="h-3 w-5/6 bg-slate-800/50 rounded" />
              </div>
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-slate-800/60 rounded" />
                <div className="h-6 w-20 bg-slate-800/60 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
