
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="bg-background text-foreground py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
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
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary/50">
              <Image
                src="https://picsum.photos/400/400"
                alt="Soumya Jain - Profile Picture"
                data-ai-hint="profile picture"
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
