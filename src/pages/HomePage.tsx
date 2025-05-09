import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
// BURADA EKRAN GÖRÜNTÜSÜNÜ İMPORT EDİYORUZ
import appScreenshot from "../assets/app-screenshot.png";
import { useTranslation } from "react-i18next";

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
            <motion.div
              className="mt-16 relative w-full max-w-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.5 }}
            >
              <div className="relative mx-auto w-full h-full max-w-[320px]">
                {/* Sadece bir tane parıltılı telefon şekilli arka plan */}
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

                {/* Ekran görüntüsü - sadece telefon görseli */}
                <img
                  src={appScreenshot}
                  alt="WorkoutX app screenshot"
                  className="w-full h-auto relative z-10"
                  style={{
                    borderRadius: "38px",
                  }}
                />
              </div>

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
                <div className="relative max-w-[250px]">
                  {/* Telefon görseli etrafındaki parıltı efekti */}
                  <motion.div
                    className="absolute -inset-2"
                    animate={{
                      boxShadow: [
                        "0 0 15px rgba(10, 255, 157, 0.08)",
                        "0 0 25px rgba(10, 255, 157, 0.15)",
                        "0 0 15px rgba(10, 255, 157, 0.08)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      borderRadius: "52px",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Telefon ekran görüntüsü */}
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
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
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

      <Footer />
    </div>
  );
};

export default HomePage;
