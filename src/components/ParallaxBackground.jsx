import { motion, useScroll, useTransform, useSpring } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 40, stiffness: 100 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);
  return (
    <section className="absolute inset-0">
      <div className="bg-homebackground relative h-screen overflow-y-hidden">
        {/* <div
          className="absolute inset-0 w-full h-screen z-0"
          style={{
            backgroundImage: "url(/parallaxbackground/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "Cover",
          }}
        /> */}
        <motion.div
          className="absolute inset-0 z-2"
          style={{
            backgroundImage: "url(/parallaxbackground/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "Cover",
            y: mountain3Y,
          }}
        />
        <motion.div
          className="absolute inset-0 z-4"
          style={{
            backgroundImage: "url(/parallaxbackground/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "Cover",
            x: planetsX,
          }}
        />
        <motion.div
          className="absolute inset-0 z-6"
          style={{
            backgroundImage: "url(/parallaxbackground/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "Cover",
            y: mountain2Y,
          }}
        />
        <motion.div
          className="absolute inset-0 z-8"
          style={{
            backgroundImage: "url(/parallaxbackground/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "Cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
