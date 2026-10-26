import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { JourneySection } from "@/components/sections/JourneySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StackSection } from "@/components/sections/StackSection";
import { SketchDivider } from "@/components/ui/SketchDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="page-container">
        <SketchDivider />
      </div>
      <ProjectsSection />
      <div className="page-container">
        <SketchDivider />
      </div>
      <JourneySection />
      <div className="page-container">
        <SketchDivider />
      </div>
      <StackSection />
      <div className="page-container">
        <SketchDivider />
      </div>
      <ContactSection />
    </>
  );
}
