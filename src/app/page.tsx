import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ProjectsSection from '@/components/sections/projects';
import ServicesSection from '@/components/sections/services';
import ExperienceSection from '@/components/sections/experience';
import AchievementsSection from '@/components/sections/achievements';
import TestimonialsSection from '@/components/sections/testimonials';
import ContactSection from '@/components/sections/contact';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Separator className="my-0" />
      <ProjectsSection />
      <Separator className="my-0" />
      <ServicesSection />
      <Separator className="my-0" />
      <ExperienceSection />
      <Separator className="my-0" />
      <AchievementsSection />
      <Separator className="my-0" />
      <TestimonialsSection />
      <Separator className="my-0" />
      <ContactSection />
    </>
  );
}
