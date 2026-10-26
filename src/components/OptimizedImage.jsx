import React, { useState, useEffect, useRef } from "react";
import { FiImage } from "react-icons/fi";

/**
 * High-performance OptimizedImage component
 * Features:
 * - Native lazy loading & async decoding by default
 * - Skeleton shimmer placeholder during load
 * - Smooth fade-in + unblur transition on load
 * - Cumulative Layout Shift (CLS) prevention
 * - Graceful error fallback
 * - High-priority eager mode for LCP hero images
 */
export default function OptimizedImage({
  src,
  alt = "",
  className = "",
  wrapperClassName = "",
  loading = "lazy",
  priority = false,
  decoding = "async",
  fetchpriority,
  onLoad,
  onError,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // If already cached in browser, mark loaded immediately to avoid flicker
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setHasError(true);
    if (onError) onError(e);
  };

  return (
    <div
      className={`relative overflow-hidden ${wrapperClassName || "w-full h-full"}`}
    >
      {/* Skeleton Shimmer Placeholder */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 z-0 bg-slate-900/80 animate-pulse flex items-center justify-center overflow-hidden"
          aria-hidden="true"
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-slate-800/40 to-transparent -translate-x-full animate-[shimmer_1.8s_infinite]" />
          <FiImage className="w-6 h-6 text-slate-700/60 absolute" />
        </div>
      )}

      {/* Error Fallback */}
      {hasError ? (
        <div className="absolute inset-0 z-0 bg-slate-900/90 border border-slate-800 flex flex-col items-center justify-center p-3 text-center">
          <FiImage className="w-6 h-6 text-slate-600 mb-1.5" />
          <span className="text-[11px] font-mono text-slate-500">
            {alt ? `${alt.slice(0, 24)}...` : "Image unavailable"}
          </span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : loading}
          fetchpriority={priority ? "high" : fetchpriority}
          decoding={decoding}
          onLoad={handleLoad}
          onError={handleError}
          className={`${className} ${
            isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
          } transition-all duration-500 ease-out`}
          {...props}
        />
      )}
    </div>
  );
}
