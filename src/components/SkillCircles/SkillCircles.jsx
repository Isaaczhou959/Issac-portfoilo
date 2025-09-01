import { OrbitingCircles } from "../ui/OrbitingCircles";

export function SkillCircles() {
  const skills = [
    "CSS",
    "HTML",
    "JavaScript",
    "React-Dark",
    "NextJS-Dark",
    "Figma-Dark",
    "Github-Dark",
    "MongoDB",
    "MySQL-Dark",
    "NodeJS-Dark",
    "Postman",
    "TypeScript",
    "Vite-Dark",
    "TailwindCSS-Dark",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center ">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`skills/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`skills/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
