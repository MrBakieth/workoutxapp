import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
// Arka plan görseli için import
import appBackground from "../../assets/app-background.png"; // Görsel yolunu buraya ekleyin
import { useTranslation } from "react-i18next";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isXAnimationComplete, setIsXAnimationComplete] = useState(false);
  const [isTextAnimationComplete, setIsTextAnimationComplete] = useState(false);
  const [isSloganVisible, setIsSloganVisible] = useState(false);
  const { t } = useTranslation();

  // "Workout" ve "X" için ayrı değişkenler
  const workoutLetters = "Workout".split("");

  // Slogan metni
  const slogan = t("splash.slogan");

  useEffect(() => {
    // Yazı tamamlandığında sloganı göster
    if (isTextAnimationComplete) {
      setTimeout(() => {
        setIsSloganVisible(true);
      }, 500);
    }

    // Animasyon tamamlandıktan sonra splash screen'i kapatıyoruz
    if (isXAnimationComplete) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        // Animasyon bittikten sonra callback'i çağırıyoruz
        setTimeout(onComplete, 1200);
      }, 1800);

      return () => clearTimeout(timer);
    }
  }, [isXAnimationComplete, isTextAnimationComplete, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="relative w-full max-w-4xl px-4">
            {/* Çizgi animasyonu için container */}
            <div className="absolute -inset-10 md:-inset-14 lg:-inset-20">
              {/* Arka plan çizgi (sabit, çok düşük opaklıkta) */}
              <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-white opacity-[0.02]"></div>
              <div className="absolute top-[10%] right-[10%] bottom-[10%] w-[1px] bg-white opacity-[0.02]"></div>
              <div className="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-white opacity-[0.02]"></div>
              <div className="absolute top-[10%] left-[10%] bottom-[10%] w-[1px] bg-white opacity-[0.02]"></div>

              {/* Üst çizgi */}
              <motion.div
                className="absolute top-0 left-[10%] right-[10%] h-[1px]"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.6 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent)",
                  boxShadow: "0 0 8px rgba(255,255,255,0.3)",
                }}
              />

              {/* Sağ çizgi */}
              <motion.div
                className="absolute top-[10%] right-[10%] bottom-[10%] w-[1px]"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 0.6 }}
                transition={{
                  duration: 1.0,
                  ease: "easeOut",
                  delay: 1.0,
                }}
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(255,255,255,0.8), transparent)",
                  boxShadow: "0 0 8px rgba(255,255,255,0.3)",
                }}
              />

              {/* Alt çizgi */}
              <motion.div
                className="absolute bottom-0 left-[10%] right-[10%] h-[1px]"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.6 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                  delay: 1.8,
                }}
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent)",
                  boxShadow: "0 0 8px rgba(255,255,255,0.3)",
                }}
              />

              {/* Sol çizgi */}
              <motion.div
                className="absolute top-[10%] left-[10%] bottom-[10%] w-[1px]"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 0.6 }}
                transition={{
                  duration: 1.0,
                  ease: "easeOut",
                  delay: 2.8,
                }}
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(255,255,255,0.8), transparent)",
                  boxShadow: "0 0 8px rgba(255,255,255,0.3)",
                }}
              />
            </div>

            {/* Logo yazısı */}
            <div className="flex flex-col items-center justify-center">
              {/* Yazının arkasındaki görsel arka plan */}
              <motion.div
                className="absolute z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{
                  backgroundImage: `url(${appBackground})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "24px",
                  width: "110%", // Yazıdan biraz geniş
                  height: "200px", // Yazı ve slogan için yeterli yükseklik
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                }}
              />

              <div className="flex mb-8 relative z-10">
                {/* "Workout" kısmı */}
                {workoutLetters.map((letter, index) => (
                  <motion.span
                    key={index}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.25 * index,
                      ease: "easeOut",
                      onComplete:
                        index === workoutLetters.length - 1
                          ? () => setIsTextAnimationComplete(true)
                          : undefined,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}

                {/* "X" harfi - özel animasyonlu */}
                <motion.div className="relative">
                  <motion.span
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold inline-block"
                    initial={{ opacity: 0, x: -20, color: "#FFFFFF" }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      color: isTextAnimationComplete ? "#0aff9d" : "#FFFFFF",
                    }}
                    transition={{
                      opacity: {
                        duration: 0.3,
                        delay: 0.25 * workoutLetters.length,
                        ease: "easeOut",
                      },
                      x: {
                        duration: 0.3,
                        delay: 0.25 * workoutLetters.length,
                        ease: "easeOut",
                      },
                      color: {
                        duration: 1.5,
                        delay: 3.0, // Yazı tamamlandıktan sonra renk değişimi
                        ease: "easeInOut",
                        onComplete: () => setIsXAnimationComplete(true),
                      },
                    }}
                  >
                    X
                  </motion.span>

                  {/* X harfi parlama efekti - animasyon tamamlandığında (tam X'in üstünde) */}
                  {isXAnimationComplete && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.8, 0] }}
                      transition={{
                        duration: 1.8,
                        times: [0, 0.5, 1],
                        ease: "easeInOut",
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute inset-0 bg-primary blur-[40px] rounded-full opacity-70" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Slogan animasyonu */}
              {isSloganVisible && (
                <div className="relative h-10 overflow-visible mb-4 z-10">
                  <motion.div
                    className="absolute inset-x-0 h-[1px] bg-white/20"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />

                  <motion.p
                    className="text-xs sm:text-sm tracking-[0.3em] font-light text-white/80 text-center mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    {slogan.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        className="inline-block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.1,
                          delay: 0.4 + index * 0.03,
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
