import { ArrowRightIcon } from "lucide-react";
import { ProjectDetail } from "./ProjectDetail/ProjectDetail";
import { useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { AuroraText } from "./ui/AuroraText";

const projects = [
  {
    id: 1,
    title: "MyEstore",
    description:
      "Smart E-shop is an online store where users can browse products and complete purchases securely.",
    subDescription: [
      "This project is an e-commerce web application built with Next.js and React.",
      "It integrates Stripe for secure payment processing and leverages Vercel for seamless deployment and hosting.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "This application provides a complete shopping experience with features such as product display, cart management, and a secure checkout flow.",
    ],

    image: "projects/eshop.png",
    tags: [
      {
        id: 1,
        name: "NextJS",
        path: "skills/NextJS-Dark.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "skills/TailwindCSS-Dark.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "skills/TypeScript.svg",
      },
    ],

    demoUrl: "smart-eshop-nextjs-stripe.vercel.app",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Learning management system",
    description:
      "A full-stack web application allows students to register, log in, and manage their learning progress.",
    subDescription: [""],

    image: "projects/Crouse_Mate.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "skills/React-Dark.svg",
      },
      {
        id: 2,
        name: "Bootstrap",
        path: "skills/Bootstrap.svg",
      },
      {
        id: 3,
        name: "NodeJS",
        path: "skills/NodeJS-Dark.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "skills/MongoDB.svg",
      },
    ],

    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Picture seeker",
    description:
      "Built with modern web technologies, it integrates with an external image API to fetch and display results dynamically.",
    subDescription: [""],

    image: "projects/Picture_Seeker.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "skills/React-Dark.svg",
      },
      {
        id: 2,
        name: "Bootstrap",
        path: "skills/Bootstrap.svg",
      },
    ],

    demoUrl: "#",
    githubUrl: "#",
  },
  // {
  //   id: 2,
  //   title: "Learning management system",
  //   description:
  //     "A full-stack web application allows students to register, log in, and manage their learning progress.",
  //   image: "projects/Crouse_Mate.png",
  //   tags: ["React", "MongoDB", "Node.js"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 3,
  //   title: "Picture seeker",
  //   description:
  //     "Built with modern web technologies, it integrates with an external image API to fetch and display results dynamically.",
  //   image: "projects/Picture_Seeker.png",
  //   tags: ["React", "Bootstrap"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
];

export const ProjectsSection = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      onMouseMove={handleMouseMove}
      id="projects"
      className="relative c-space section-spacing container"
    >
      <h2 className="text-heading">
        <AuroraText>Featured</AuroraText> Projects
      </h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {projects.map((project) => (
        <Project
          key={project.id}
          {...project}
          setPreview={setPreview}
        ></Project>
      ))}
      {preview && (
        <motion.img
          src={preview}
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

const Project = ({
  title,
  description,
  subDescription,
  demoUrl,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => {
            setIsHidden(true);
          }}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <ArrowRightIcon />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {isHidden && (
        <ProjectDetail
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={demoUrl}
          closePage={setIsHidden}
        />
      )}
    </>
  );
};

{
  /* <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects, designed with a focus on responsive
          layouts, intuitive interfaces, smooth user experiences, and good
          performance across different devices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                {" "}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={23} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <GithubIcon size={23} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */
}
