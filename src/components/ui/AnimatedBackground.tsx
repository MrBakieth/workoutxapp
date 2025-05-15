import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
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
  );
};

export default AnimatedBackground;
