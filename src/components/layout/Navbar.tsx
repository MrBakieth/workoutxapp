import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <span className="text-2xl font-bold glow-text">WorkoutXApp</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex gap-8"
        >
          <a href="#features" className="hover:text-primary transition-colors">
            {t("navbar.features")}
          </a>
          <a href="#pricing" className="hover:text-primary transition-colors">
            {t("navbar.pricing")}
          </a>
          <a href="#download" className="hover:text-primary transition-colors">
            {t("navbar.download")}
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            {t("navbar.contact")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#download" className="btn-primary">
            {t("navbar.downloadNow")}
          </a>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;
