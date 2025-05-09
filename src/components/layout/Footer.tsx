import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark-gray py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold glow-text">WorkoutXApp</span>
            <p className="text-gray-400 mt-2">{t("footer.copyright")}</p>
          </div>

          <div className="flex gap-8">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="#terms"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              {t("footer.terms")}
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              {t("footer.contact")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
