
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="bg-background text-foreground py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-1 gap-12 items-center"> {/* Changed to md:grid-cols-1 for single column layout */}
          <div className="text-center md:text-left"> {/* Removed order classes */}
            <span className="text-primary font-semibold uppercase tracking-wider">Soumya Jain</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4 leading-tight">
              Frontend Developer <span className="text-primary">|</span> RPA Developer
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
              Crafting digital experiences and automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
                <Link href="mailto:soumyaj470@gmail.com">
                  <Mail className="mr-2 h-5 w-5" /> Hire Me
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-accent/50 transition-shadow">
                <Link href="#projects">
                  <Briefcase className="mr-2 h-5 w-5" /> View Projects
                </Link>
              </Button>
            </div>
          </div>
          {/* Removed image section */}
        </div>
      </div>
    </section>
  );
}
