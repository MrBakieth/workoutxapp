import { motion } from "framer-motion";
import appScreenshot from "../../assets/app-screenshot.png";
import { useEffect, useState } from "react";

interface AppScreenshotProps {
  isVisible: boolean;
  maxWidth?: string; // Opsiyonel maksimum genişlik
  aspectRatio?: string; // Opsiyonel en-boy oranı
  className?: string; // Ek CSS sınıfları
}

const AppScreenshot = ({
  isVisible,
  maxWidth = "320px",
  aspectRatio = "auto",
  className = "",
}: AppScreenshotProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Görsel önceden önbelleğe alınır
    const img = new Image();
    img.src = appScreenshot;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <motion.div
      className={`mt-16 relative w-full ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 1.5 }}
    >
      <div
        className="relative mx-auto w-full h-full"
        style={{
          maxWidth: maxWidth,
          aspectRatio: aspectRatio,
        }}
      >
        {/* Parıltılı telefon şekilli arka plan */}
        <motion.div
          className="absolute -inset-3"
          animate={{
            boxShadow: [
              "0 0 15px rgba(10, 255, 157, 0.08)",
              "0 0 25px rgba(10, 255, 157, 0.15)",
              "0 0 15px rgba(10, 255, 157, 0.08)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            borderRadius: "72px",
            pointerEvents: "none",
          }}
        />

        {/* İçeriği ortalamak için görsel konteyner */}
        <div className="w-full h-full flex items-center justify-center">
          {/* Görsel yüklenene kadar placeholder */}
          {!imageLoaded && (
            <div
              className="w-full h-full bg-dark-gray/50 animate-pulse"
              style={{ borderRadius: "38px" }}
            />
          )}

          {/* Ekran görüntüsü */}
          <motion.img
            src={appScreenshot}
            alt="WorkoutX app screenshot"
            className="w-full h-auto relative z-10 object-contain"
            style={{
              borderRadius: "38px",
              opacity: imageLoaded ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
            loading="lazy"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AppScreenshot;
