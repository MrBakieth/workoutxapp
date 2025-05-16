import { useState, useEffect } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  lazy?: boolean;
  priority?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  rounded?: boolean | string;
  motionProps?: Partial<HTMLMotionProps<"img">>;
}

/**
 * Görsel optimizasyonu sağlayan bileşen
 * Görselleri daha verimli yüklemek, boyutlandırmak ve animasyonlar eklemek için kullanılır
 */
const ImageOptimizer = ({
  src,
  alt,
  width,
  height,
  className = "",
  style = {},
  lazy = true,
  priority = false,
  objectFit = "cover",
  rounded = false,
  motionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
  },
}: ImageOptimizerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (priority && src) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setIsError(true);
    }
  }, [src, priority]);

  // Yuvarlak kenarlık stili
  const borderRadiusStyle = (() => {
    if (rounded === true) return "rounded-full";
    if (rounded === false) return "";
    return rounded; // String olarak sınıf adı
  })();

  // Yükleme hatası veya resim yoksa
  if (isError || !src) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${borderRadiusStyle} ${className}`}
        style={{
          width: width ? `${width}px` : "100%",
          height: height ? `${height}px` : "100%",
          ...style,
        }}
      >
        <svg
          className="w-1/3 h-1/3 text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19.5 3h-15A2.5 2.5 0 0 0 2 5.5v13A2.5 2.5 0 0 0 4.5 21h15a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 19.5 3zM4.5 5h15c.3 0 .5.2.5.5V15l-3.5-3-3.5 4-4-5-5 4V5.5c0-.3.2-.5.5-.5zm0 14c-.3 0-.5-.2-.5-.5V17l5-4 4 5 3.5-4 3.5 3v2.5c0 .3-.2.5-.5.5h-15z" />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${borderRadiusStyle} ${className}`}
      style={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "auto",
        ...style,
      }}
    >
      {/* Görsel yüklenene kadar gösterilen placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}

      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={lazy && !priority ? "lazy" : "eager"}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
        className={`w-full h-full transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          objectFit: objectFit,
        }}
        {...motionProps}
      />
    </div>
  );
};

export default ImageOptimizer;
