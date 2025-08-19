import { useEffect, useState } from "react";

// id,size,x,y,opacity,aimationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfstars = Math.floor(
      (window.innerHeight * window.innerWidth) / 10000
    );
    const newStars = [];

    for (let i = 0; i < numberOfstars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // Size of the star from 0 to 4 px
        x: Math.random() * 100, // x from 0 to 100
        y: Math.random() * 100, // y from 0 to 100
        opacity: Math.random() * 0.5 + 0.5, // Opactity from 50% to 100%
        animationDuration: Math.random() * 4 + 2, // Animation duration from 2s to 6s
      });
    }

    setStars(newStars);
  };
  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // Size of the star from 0 to 4 px
        x: Math.random() * 100, // x from 0 to 100
        y: Math.random() * 30, // y from 0 to 20
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3, // Animation duration from 0s to 6s
      });
    }

    setMeteors(newMeteors);
  };
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 1.5 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
