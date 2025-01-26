import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  width?: number;
  height?: number;
}

export default function OptimizedImage({
  src,
  alt,
  priority = false,
  width,
  height,
  className,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={width || 300}
        height={height || 300}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        quality={90}
        onLoadingComplete={() => setLoading(false)}
        className={`
          duration-700 ease-in-out
          ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }
          ${className || ""}
        `}
        {...props}
      />
    </div>
  );
}
