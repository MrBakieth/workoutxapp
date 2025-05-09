import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-5 right-5 z-50 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
      <motion.button
        className={`text-sm px-2 py-1 rounded-full ${
          i18n.language === "en"
            ? "bg-green-500 text-black font-bold"
            : "text-white"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => changeLanguage("en")}
      >
        EN
      </motion.button>
      <motion.button
        className={`text-sm px-2 py-1 rounded-full ${
          i18n.language === "tr"
            ? "bg-green-500 text-black font-bold"
            : "text-white"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => changeLanguage("tr")}
      >
        TR
      </motion.button>
      <motion.button
        className={`text-sm px-2 py-1 rounded-full ${
          i18n.language === "de"
            ? "bg-green-500 text-black font-bold"
            : "text-white"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => changeLanguage("de")}
      >
        DE
      </motion.button>
    </div>
  );
};

export default LanguageSwitcher;
