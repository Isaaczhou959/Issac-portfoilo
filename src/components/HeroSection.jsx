import { ArrowRight, ArrowDown } from "lucide-react";
import { FlipWords } from "./ui/FilpWords";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex items-start min-h-screen md:items-start md:justify-start justify-center px-4"
    >
      <div className="rounded-3xl bg-clip-text text-center mt-20 md:mt-40 md:text-left z-10">
        {/*Desktop view*/}
        <div className="flex-col hidden md:flex c-space">
          <h1 className="text-4xl font-medium text-white">
            <span className="animate-fade-in">Hi I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Issac
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              Zhou
            </span>
          </h1>
          <div className="flex flex-col opacity-0 text-white animate-fade-in-delay-3">
            <p className="text-5xl  font-medium">
              A Developer <br /> passionate about
            </p>
            {/* <div> get filp word here -- skills, creativity, and problem-solving*/}
            <div>
              <FlipWords
                words={["Designing", "Developing", "Delivering"]}
                className="font-black text-white text-8xl text-primary"
              />
            </div>
            <p className="text-4xl font-medium">web solutions</p>
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button gap-2 inline-flex">
              My Projects <ArrowRight />
            </a>
          </div>
        </div>
        {/* Mobile view */}
        <div className="flex flex-col items-center flex-col space-y-6 md:hidden mt-8">
          <h2 className="text-3xl font-medium">
            <span className="text-white animate-fade-in">Hi,I'm </span>
            <span className="text-primary animate-fade-in-delay-1">Issac</span>
            <span className="text-white opacity-0 animate-fade-in-delay-2">
              Zhou
            </span>
          </h2>
          <div>
            <p className="text-5xl font-black text-white animate-fade-in-delay-3 ">
              Building
            </p>
            <div>
              <FlipWords
                words={["Secure", "Modern", "Scalable"]}
                className="font-bold text-primary text-6xl pl-5"
              />
            </div>
            <p className="text-3xl text-white font-black">Web Applications</p>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-8 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div> */}
    </section>
  );
};
