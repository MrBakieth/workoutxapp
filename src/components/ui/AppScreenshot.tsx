import { motion } from "framer-motion";
import appScreenshot from "../../assets/app-screenshot.png";

interface AppScreenshotProps {
  isVisible: boolean;
}

const AppScreenshot = ({ isVisible }: AppScreenshotProps) => {
  return (
    <motion.div
      className="mt-16 relative w-full max-w-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 1.5 }}
    >
      <div className="relative mx-auto w-full h-full max-w-[320px]">
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

        <img
          src={appScreenshot}
          alt="WorkoutX app screenshot"
          className="w-full h-auto relative z-10"
          style={{
            borderRadius: "38px",
          }}
        />
      </div>
    </motion.div>
  );
};

export default AppScreenshot;
