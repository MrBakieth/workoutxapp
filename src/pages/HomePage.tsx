import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
// BURADA EKRAN GÖRÜNTÜSÜNÜ İMPORT EDİYORUZ
import AppScreenshot from "../components/ui/AppScreenshot";
import ImageOptimizer from "../components/ui/ImageOptimizer";
import { useTranslation } from "react-i18next";
import ScrollToTop from "../components/ui/ScrollToTop";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const { t } = useTranslation();

  useEffect(() => {
    // Sayfa yüklendiğinde animasyon başlasın
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section - Çarpıcı animasyonlu */}
        <section
          className="relative h-screen overflow-hidden"
          ref={containerRef}
        >
          {/* Arka plan gradienti ve animasyonlu dalgalar */}
          <div className="absolute inset-0 bg-dark">
            {/* Arka plan animasyonlu hareketli ışıklar */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-primary/20 blur-3xl"
                  initial={{
                    opacity: 0.1,
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    width: `${Math.random() * 40 + 10}%`,
                    height: `${Math.random() * 40 + 10}%`,
                  }}
                  animate={{
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 15 + i * 5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Hareket eden grid arka planı */}
            <motion.div
              className="absolute inset-0 opacity-10"
              initial={{ backgroundPosition: "0% 0%" }}
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{
                duration: 60,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, rgba(10, 255, 157, 0.2) 2%, transparent 0%), radial-gradient(circle at 25px 25px, rgba(10, 255, 157, 0.2) 2%, transparent 0%)`,
                backgroundSize: "50px 50px",
                backgroundPosition: "0 0, 25px 25px",
              }}
            />
          </div>

          {/* Ana içerik */}
          <motion.div
            className="container mx-auto px-4 h-full flex flex-col justify-center items-center"
            style={{ opacity, scale, y }}
          >
            {/* Hero başlığı ve içerik */}
            <div className="max-w-4xl text-center z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  <span className="relative inline-block">
                    <span className="relative z-10">
                      {t("home.hero.title1")}
                    </span>
                    <motion.span
                      className="absolute bottom-2 left-0 h-[3px] bg-primary/40"
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: "100%" } : {}}
                      transition={{
                        duration: 1.2,
                        delay: 1.3,
                        ease: "easeOut",
                      }}
                      style={{
                        boxShadow: "0 0 8px rgba(10, 255, 157, 0.2)",
                        borderRadius: "2px",
                      }}
                    />
                  </span>
                  <br />
                  <span className="relative inline-block">
                    <span className="relative z-10">
                      {t("home.hero.title2")}
                    </span>
                    <motion.span
                      className="absolute bottom-2 left-0 h-[3px] bg-primary/40"
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: "100%" } : {}}
                      transition={{
                        duration: 1.2,
                        delay: 1.6,
                        ease: "easeOut",
                      }}
                      style={{
                        boxShadow: "0 0 8px rgba(10, 255, 157, 0.2)",
                        borderRadius: "2px",
                      }}
                    />
                  </span>
                </h1>
                <motion.p
                  className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.9 }}
                >
                  {t("home.hero.subtitle")}
                </motion.p>
              </motion.div>

              {/* CTA Butonları */}
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
                  <span className="relative z-10">
                    {t("home.cta.download")}
                  </span>
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
            </div>

            {/* Mobil uygulama ekran görüntüsü */}
            <AppScreenshot
              isVisible={isVisible}
              maxWidth="320px"
              aspectRatio="9/19.5"
              className="max-w-lg"
            />

            {/* Etraftaki yörüngedeki parçacıklar */}
            <div className="absolute inset-0 -z-10">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary/60"
                  initial={{
                    x: "50%",
                    y: "50%",
                    scale: 0.2,
                    opacity: 0.3,
                  }}
                  animate={{
                    x: `${50 + 45 * Math.cos((2 * Math.PI * i) / 6)}%`,
                    y: `${50 + 45 * Math.sin((2 * Math.PI * i) / 6)}%`,
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 8,
                    delay: i * 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: [0, 0.7, 0], y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 2.5,
            }}
          >
            <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center">
              <div className="w-1 h-2 bg-primary rounded-full mt-2" />
            </div>
          </motion.div>
        </section>

        {/* Features Section - Dikkat Çekici Animasyonlar ile */}
        <section
          id="features"
          className="py-20 px-4 bg-dark-gray relative overflow-hidden"
        >
          {/* Animasyonlu arka plan elementleri */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-primary/20 blur-xl"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 300 + 100}px`,
                  height: `${Math.random() * 300 + 100}px`,
                }}
                animate={{
                  y: [
                    Math.random() * 50,
                    Math.random() * -50,
                    Math.random() * 50,
                  ],
                  x: [
                    Math.random() * 50,
                    Math.random() * -50,
                    Math.random() * 50,
                  ],
                  opacity: [0.05, 0.1, 0.05],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 10 + i * 5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.div
                className="inline-block mb-3"
                animate={{ rotate: [0, -5, 0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
              >
                <span className="text-5xl">💪</span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold mb-5">
                <span className="text-primary">{t("home.features.title")}</span>{" "}
                <br />
                {t("home.features.subtitle")}
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                {t("home.features.description")}
              </p>
            </motion.div>

            {/* Ana Özellikler - Interaktif Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🤖",
                  title: t("home.features.personalWorkouts.title"),
                  description: t("home.features.personalWorkouts.description"),
                  color: "from-[#4158D0] to-[#C850C0]",
                },
                {
                  icon: "📱",
                  title: t("home.features.realTimeFeedback.title"),
                  description: t("home.features.realTimeFeedback.description"),
                  color: "from-[#0aff9d] to-[#00cc7a]",
                },
                {
                  icon: "📈",
                  title: t("home.features.progressTracking.title"),
                  description: t("home.features.progressTracking.description"),
                  color: "from-[#FF416C] to-[#FF4B2B]",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="card group relative p-8 rounded-2xl overflow-hidden"
                >
                  {/* Gradient Arka Plan */}
                  <div
                    className={`absolute inset-0 opacity-10 bg-gradient-to-br ${feature.color}`}
                  />

                  {/* Üst Görsel */}
                  <motion.div
                    className="h-16 w-16 rounded-lg bg-dark/60 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/5"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    initial={{ rotate: -5 }}
                    animate={{ rotate: 0 }}
                  >
                    <span className="text-3xl">{feature.icon}</span>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>

                  {/* Hover Efekti */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r w-0 group-hover:w-full"
                    style={{
                      background: `linear-gradient(to right, ${feature.color
                        .replace("from-", "")
                        .replace("to-", "")})`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* İkinci sıra özellikler - Animasyonlu İkonlar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              {[
                {
                  icon: "🧠",
                  animation: {
                    animate: { scale: [1, 1.2, 1], rotate: [0, 10, 0] },
                    transition: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    },
                  },
                  title: t("home.features.nutrition.title"),
                  description: t("home.features.nutrition.description"),
                  color: "from-[#3494E6] to-[#EC6EAD]",
                },
                {
                  icon: "🏆",
                  animation: {
                    // Animasyon kısımlarını aynı tutun
                  },
                  title: t("home.features.nutrition.title"),
                  description: t("home.features.nutrition.description"),
                  color: "from-[#FF9966] to-[#FF5E62]",
                },
                {
                  icon: "⚡",
                  animation: {
                    // Animasyon kısımlarını aynı tutun
                  },
                  title: t("home.features.nutrition.title"),
                  description: t("home.features.nutrition.description"),
                  color: "from-[#8E2DE2] to-[#4A00E0]",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="card group relative p-8 rounded-2xl backdrop-blur-sm"
                >
                  {/* Gradient Arka Plan */}
                  <div
                    className={`absolute inset-0 opacity-10 bg-gradient-to-br ${feature.color}`}
                  />

                  {/* Animasyonlu İkon */}
                  <div className="flex justify-center mb-6">
                    <motion.div
                      className="h-20 w-20 flex items-center justify-center"
                      animate={feature.animation.animate}
                      transition={feature.animation.transition}
                    >
                      <span className="text-4xl filter drop-shadow-[0_0_8px_rgba(10,255,157,0.6)]">
                        {feature.icon}
                      </span>
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-center group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Dikkat Çekici Alt Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-20 relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-dark-gray/20 backdrop-blur-md"></div>
              <div className="relative z-10 p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {t("home.hero.title")}
                  </h3>
                  <p className="text-gray-300">{t("home.hero.subtitle")}</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="#download"
                    className="btn-primary px-8 py-4 text-lg rounded-xl flex items-center gap-2 whitespace-nowrap"
                  >
                    <span>{t("home.cta.download")}</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </a>
                </motion.div>
              </div>

              {/* Dekoratif Animasyon */}
              <div className="absolute -bottom-10 -right-10 opacity-20">
                <motion.div
                  className="w-40 h-40 rounded-full border border-primary"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing bölümü */}
        <section id="pricing" className="py-20 bg-dark-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              {t("pricing.title")}
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 max-w-3xl mx-auto">
              {/* Aylık Plan */}
              <div
                className="bg-dark p-8 rounded-xl border border-gray-700 flex flex-col items-center w-full md:w-1/2
        transition-all duration-300
        shadow-lg hover:shadow-primary/40 hover:border-primary hover:scale-105"
              >
                <div className="text-2xl font-bold mb-2">
                  {t("pricing.monthly.name")}
                </div>
                <div className="text-4xl font-extrabold mb-2">$9.99</div>
                <div className="text-gray-400 mb-6">
                  {t("pricing.monthly.period")}
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    {t("pricing.features.1")}
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    {t("pricing.features.2")}
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    {t("pricing.features.3")}
                  </li>
                </ul>
                <button
                  className="w-full py-3 rounded-lg bg-primary text-dark font-semibold
          transition-all duration-300
          hover:bg-primary/80 hover:scale-105"
                >
                  {t("pricing.cta")}
                </button>
              </div>
              {/* Yıllık Plan */}
              <div
                className="bg-dark p-8 rounded-xl border-2 border-primary flex flex-col items-center w-full md:w-1/2 scale-105 shadow-lg
        transition-all duration-300
        hover:shadow-primary/40 hover:scale-110"
              >
                <div className="mb-2">
                  <span className="bg-primary text-dark px-4 py-1 rounded-full text-xs font-bold shadow">
                    {t("pricing.bestValue")}
                  </span>
                </div>
                <div className="text-2xl font-bold mb-2">
                  {t("pricing.yearly.name")}
                </div>
                <div className="text-4xl font-extrabold mb-2">$29.99</div>
                <div className="text-gray-400 mb-6">
                  {t("pricing.yearly.period")}
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    {t("pricing.features.1")}
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    {t("pricing.features.2")}
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    {t("pricing.features.3")}
                  </li>
                </ul>
                <button
                  className="w-full py-3 rounded-lg bg-primary text-dark font-semibold
          transition-all duration-300
          hover:bg-primary/80 hover:scale-105"
                >
                  {t("pricing.cta")}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Geliştirilmiş ve Android için "Yakında" ibaresi */}
        <section id="download" className="py-20 px-4 relative overflow-hidden">
          {/* Arka plan efektleri */}
          <motion.div
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute w-full h-full bg-gradient-to-br from-dark via-dark to-dark-gray opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,255,157,0.1)_0,transparent_50%)]" />

            {/* Hareketli nokta desenleri */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-primary/30"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 5 + 2}px`,
                    height: `${Math.random() * 5 + 2}px`,
                  }}
                  animate={{
                    y: [
                      Math.random() * 10,
                      Math.random() * -10,
                      Math.random() * 10,
                    ],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + Math.random() * 5,
                  }}
                />
              ))}
            </div>
          </motion.div>

          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
              {/* Sol taraf - Telefon mockup */}
              <motion.div
                className="w-full md:w-2/5 flex justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <AppScreenshot
                  isVisible={true}
                  maxWidth="250px"
                  aspectRatio="9/19.5"
                  className="mt-0"
                />
              </motion.div>

              {/* Sağ taraf - İçerik */}
              <motion.div
                className="w-full md:w-3/5 text-center md:text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t("home.cta.download")}
                </h2>

                <p className="text-lg mb-8 text-gray-300 max-w-xl">
                  {t("home.cta.description")}
                </p>

                <div className="space-y-5">
                  {/* App Store Buton */}
                  <motion.a
                    href="#app-store"
                    className="flex items-center px-6 py-4 rounded-xl bg-dark-gray border border-primary/20 hover:border-primary/50 w-full max-w-md mx-auto md:mx-0 group transition-all duration-300"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 0 20px rgba(10, 255, 157, 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="mr-4">
                      <svg
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-gray-400">
                        {t("home.cta.download")}
                      </span>
                      <span className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {t("home.cta.download")}
                      </span>
                    </div>
                    <motion.div
                      className="ml-auto"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-primary/70"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </motion.div>
                  </motion.a>

                  {/* Google Play Buton - İnaktif ve Yakında İbaresi */}
                  <div className="relative">
                    <motion.div
                      className="flex items-center px-6 py-4 rounded-xl bg-dark-gray border border-white/10 w-full max-w-md mx-auto md:mx-0 opacity-70 cursor-not-allowed"
                      initial={{ opacity: 0.5 }}
                      whileInView={{ opacity: 0.7 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="mr-4">
                        <svg
                          className="w-10 h-10 text-gray-500"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M3,20.5V3.5C3,2.91,3.34,2.39,3.84,2.15L13.69,12L3.84,21.85C3.34,21.6,3,21.09,3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88M19.69,12L17.42,14.27C17.42,14.27,17.79,14.63,17.79,14.63L21,12L17.79,9.37L17.42,9.73L19.69,12Z" />
                        </svg>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-xs text-gray-500">
                          {t("home.cta.comingSoon")}
                        </span>
                        <span className="text-lg font-semibold text-gray-400">
                          {t("home.cta.comingSoon")}
                        </span>
                      </div>
                      {/* Sadece buton içindeki yakında yazısı */}
                      <motion.div
                        className="ml-auto bg-primary/10 rounded-md py-1 px-2 border border-primary/30"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <span className="text-xs font-medium text-primary">
                          {t("home.cta.comingSoon")}
                        </span>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Güven Faktörleri */}
            <motion.div
              className="mt-16 flex flex-wrap justify-center gap-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                {
                  value: "10M+",
                  label: t("home.features.personalWorkouts.title"),
                },
                {
                  value: "4.8 ⭐",
                  label: t("home.features.realTimeFeedback.title"),
                },
                {
                  value: "200+",
                  label: t("home.features.progressTracking.title"),
                },
                { value: "30+", label: t("home.features.nutrition.title") },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Testimonials Section - Kullanıcı Yorumları ve Başarı Hikayeleri */}
      <section className="py-20 px-4 bg-dark relative overflow-hidden">
        {/* Arka plan animasyonu */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 15,
            }}
          />
          {/* Arka plan parçacıkları */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10 w-2 h-2"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 5 + Math.random() * 10,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Başlık */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium">
              {t("home.testimonials.title")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              {t("home.testimonials.subtitle")}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t("home.testimonials.description")}
            </p>
          </motion.div>

          {/* Testimonial Slider / Cards */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            {[
              {
                name: "Ahmet Y.",
                avatar: "👨‍🦱",
                role: "Yazılım Geliştirici",
                content:
                  "WorkoutX'in AI özelliği ofis çalışanları için harika. Masa başı duruş problemlerimi tespit etti ve omuz/sırt ağrılarımı hedefleyen özel bir program oluşturdu. 2 ay içinde tamamen ağrısız bir hayata kavuştum.",
                metric: "Omuz ve Sırt Ağrıları",
                result: "8 hafta içinde %90 azalma",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Zeynep K.",
                avatar: "👩‍🦰",
                role: "Fitness Eğitmeni",
                content:
                  "Profesyonel bir eğitmen olarak bile AI'ın önerdiği teknik düzeltmeler beni şaşırttı. Danışanlarıma daha iyi servis verebilmek için uygulamayı kullanıyorum. Yapay zeka, kişiselleştirilmiş antrenman planlarında yeni bir çağ açtı.",
                metric: "Müşteri Sonuçları",
                result: "Ortalama %35 daha hızlı ilerleme",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Mehmet A.",
                avatar: "👨‍🦲",
                role: "İşletme Sahibi",
                content:
                  "50 yaşında spor yapmaya başlamak zor olacak diye endişeliydim. WorkoutX'in AI koçu, eklem problemlerime özel bir program tasarladı. Şimdi 15 kg daha hafifim ve hiç olmadığım kadar enerjik hissediyorum!",
                metric: "Vücut Yağ Oranı",
                result: "6 ayda %22'den %14'e düşüş",
                image: "https://randomuser.me/api/portraits/men/67.jpg",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px -5px rgba(10, 255, 157, 0.15)",
                  transition: { duration: 0.2 },
                }}
                className="bg-dark-gray rounded-2xl p-6 border border-white/5 flex-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <ImageOptimizer
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    rounded={true}
                    className="border-2 border-primary/30"
                    priority={index < 2}
                    motionProps={{
                      initial: { opacity: 0, scale: 0.8 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { duration: 0.3 },
                    }}
                  />
                  <div>
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>

                {/* Sonuç metrikleri */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
                  <div className="flex-1">
                    <div className="text-xs text-gray-400">
                      {t("home.testimonials.metric")}
                    </div>
                    <div className="font-medium text-white">
                      {testimonial.metric}
                    </div>
                  </div>
                  <div className="bg-primary/10 px-3 py-1 rounded-full border border-primary/30">
                    <span className="text-primary font-medium text-sm">
                      {testimonial.result}
                    </span>
                  </div>
                </div>

                {/* AI önerisi */}
                <div className="mt-5 bg-dark/40 rounded-xl p-3 border border-primary/10">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-5 h-5 text-primary"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,15L17,10H7Z" />
                    </svg>
                    <span className="text-xs text-primary font-medium">
                      {t("home.testimonials.aiSuggestion")}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300">
                    {index === 0
                      ? t("home.testimonials.aiSuggestion1")
                      : index === 1
                      ? t("home.testimonials.aiSuggestion2")
                      : t("home.testimonials.aiSuggestion3")}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Yıldızlar ve Değerlendirme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center p-8 rounded-2xl bg-primary/5 border border-primary/10"
          >
            {/* Yıldızlar */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  className="w-6 h-6 text-primary mx-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                </motion.svg>
              ))}
            </div>
            <div className="text-2xl font-bold mb-2">4.8 / 5.0</div>
            <p className="text-gray-300 mb-4">
              {t("home.testimonials.description")}
            </p>

            {/* App store butonuna bağlantılı düğme */}
            <motion.a
              href="#download"
              className="px-6 py-3 rounded-lg border border-primary bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.32 12L12 7.35L6.64 12L12 16.65L17.32 12M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
                </svg>
                {t("home.cta.download")}
              </span>
            </motion.a>
          </motion.div>

          {/* Başarı Metrikleri */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              {
                value: "500+",
                label: t("home.features.personalWorkouts.title"),
                desc: t("home.features.personalWorkouts.description"),
              },
              {
                value: "93%",
                label: t("home.features.realTimeFeedback.title"),
                desc: t("home.features.realTimeFeedback.description"),
              },
              {
                value: "+45%",
                label: t("home.features.progressTracking.title"),
                desc: t("home.features.progressTracking.description"),
              },
              {
                value: "12+",
                label: t("home.features.nutrition.title"),
                desc: t("home.features.nutrition.description"),
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-gray/50 p-6 rounded-xl border border-white/5 text-center"
              >
                <div className="text-primary text-3xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="font-medium text-white mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>

          <div className="max-w-3xl mx-auto bg-dark-light rounded-xl shadow-lg overflow-hidden border border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary/40">
            <div className="flex flex-col md:flex-row">
              {/* İletişim bilgileri */}
              <div className="bg-primary/10 p-8 w-full md:w-1/3">
                <h3 className="text-xl font-bold mb-4">
                  {t("contact.getInTouch")}
                </h3>

                <div className="space-y-4 mt-6">
                  <div className="flex items-start">
                    <div className="text-primary mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">{t("contact.email")}</p>
                      <a
                        href="mailto:info@workoutxapp.com"
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        info@workoutxapp.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-primary mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">{t("contact.website")}</p>
                      <a
                        href="https://workoutxapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        workoutxapp.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-primary mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">{t("contact.phone")}</p>
                      <a
                        href="tel:+901234567890"
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        +90 123 456 7890
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-2">
                    {t("contact.followUs")}
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-twitter"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* İletişim formu */}
              <div className="p-8 w-full md:w-2/3">
                <h3 className="text-xl font-bold mb-4">
                  {t("contact.sendMessage")}
                </h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        {t("contact.form.name")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-lg 
                  focus:outline-none focus:border-primary
                  transition-all duration-300"
                        placeholder={t("contact.form.namePlaceholder")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        {t("contact.form.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-lg 
                  focus:outline-none focus:border-primary
                  transition-all duration-300"
                        placeholder={t("contact.form.emailPlaceholder")}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-1"
                    >
                      {t("contact.form.subject")}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-lg 
                focus:outline-none focus:border-primary
                transition-all duration-300"
                      placeholder={t("contact.form.subjectPlaceholder")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-lg 
                focus:outline-none focus:border-primary
                transition-all duration-300"
                      placeholder={t("contact.form.messagePlaceholder")}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-primary text-dark font-semibold rounded-lg
                transition-all duration-300
                hover:bg-primary/80 hover:scale-105"
                  >
                    {t("contact.form.submit")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default HomePage;
