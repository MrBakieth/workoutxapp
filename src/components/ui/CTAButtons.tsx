import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface CTAButtonsProps {
  isVisible: boolean;
}

const CTAButtons = ({ isVisible }: CTAButtonsProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <motion.a
        href="#download"
        className="btn-primary group relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">{t("home.cta.download")}</span>
        <motion.span
          className="absolute inset-0 bg-white/10"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
      </motion.a>

      <motion.a
        href="#learn-more"
        className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all duration-300 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{t("home.cta.watchDemo")}</span>
        <motion.span
          className="inline-block ml-2"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          →
        </motion.span>
      </motion.a>
    </motion.div>
  );
};

export default CTAButtons;
