import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import ParallaxBackground from "../components/ParallaxBackground";
import { ContactMeButton } from "../components/ContactMeButton/ContactMeButton";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />
      {/*  Background Effects */}
      <ParallaxBackground />
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* ContactMe button */}
      <ContactMeButton />
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        {/* <SkillsSection /> */}
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
