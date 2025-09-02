import { cn } from "@/lib/utils";
import { Drag } from "./Drag/Drag";
import { useRef } from "react";
import { Globe } from "./ui/globe";
import { CopyEmailButton } from "./CopyEmailButton/CopyEmailButton";
import { SkillCircles } from "./SkillCircles/SkillCircles";
export const AboutSection = () => {
  const grid2Contianer = useRef();
  return (
    <section id="about" className="section-spacing c-space container">
      <h2 className="text-heading">
        About <span className="text-primary">me</span>
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6  md:auto-rows-[18rem] mt-12">
        {/* The first grid */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="aboutme/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10 text-white">
            <p className="headtext">Hi,I'm Issac Zhou</p>
            <p className="subtext">
              I’m a passionate Web Developer with a background in Computer
              Science and experience in technology and customer service.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>
        {/* The Second grid */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Contianer}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CRAFTED IN CODE
            </p>
            <Drag
              image="aboutme/js-logo.png"
              style={{ rotate: "-20deg", bottom: "10%", left: "10%" }}
              containerRef={grid2Contianer}
            />
            <Drag
              image="aboutme/react-logo.png"
              style={{ rotate: "-20deg", top: "20%", left: "50%" }}
              containerRef={grid2Contianer}
            />
            <Drag
              text={"SOLID"}
              style={{ rotate: "-30deg", top: "10%", left: "5%" }}
              containerRef={grid2Contianer}
            />
            <Drag
              text={"GRASP"}
              style={{ rotate: "30deg", top: "20%", left: "60%" }}
              containerRef={grid2Contianer}
            />
            <Drag
              text={"Design Patterns"}
              style={{ rotate: "-20deg", bottom: "20%", left: "60%" }}
              containerRef={grid2Contianer}
            />
            <Drag
              text={"Design Principles"}
              style={{ rotate: "20deg", bottom: "10%", left: "20%" }}
              containerRef={grid2Contianer}
            />
          </div>
        </div>
        {/* Third grid */}
        <div className="grid-black-color grid-3">
          <div className="absolute bottom-6 right-6 z-10">
            <p className="headtext text-white">Where Am I</p>
            <p className="subtext">I'm based in Australia</p>
          </div>

          <figure className="absolute left-[-20%] top-[-55%] z-0">
            <Globe />
          </figure>
        </div>
        {/* Fourth grid */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-6 size-full">
            <p className="text-white text-center headtext">Grab my Email</p>
            <CopyEmailButton />
          </div>
        </div>
        {/* fifth grid */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext text-white">Tech Stack</p>
            <p className="subtext">
              Skilled in working with a variety of frameworks, development
              tools, and programming languages, constantly adapt to new
              technologies
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <SkillCircles />
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Creative Problem Solver
            </h3>
            <p>
              I’m a passionate Web Developer with a background in Computer
              Science and experience in technology and customer service. My
              journey from hands-on projects to building interactive websites
              has shaped me into a creative problem solver who values clarity,
              performance, and user-focused design.
            </p>
            <p className="text-muted-foreground">
              I enjoy transforming ideas into clean, responsive, and engaging
              digital experiences. With strong skills in teamwork,
              communication, and adaptability, I’m ready to bring value to
              projects that require both technical expertise and a human touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-10 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in touch
              </a>
              <a
                href="#contact"
                className={cn(
                  "px-6 pt-2 rounded-full border border-primary",
                  "text-primary hover:bg-primary/20 transition-colors duration-300"
                )}
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Creating responsive websites and web applications with
                    modern frameworks
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Designing intuitive user interfaces and seamless user
                    experiences
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Leading projects from conception to completion with agile
                    methodologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};
