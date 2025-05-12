import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/types';

const projectsData: Project[] = [
  {
    id: 'safevoice',
    title: 'SafeVoice – Speak Without Fear',
    description: 'Voice-based anonymous complaint system to promote secure reporting.',
    githubLink: 'https://github.com/Soumyajain15/safe',
    imageUrl: 'https://picsum.photos/seed/safevoice/600/400',
    tags: ['Web Development', 'Anonymity', 'Voice Recognition'],
    dataAiHint: 'secure communication'
  },
  {
    id: 'eduhub',
    title: 'EduHub – Online Learning Platform',
    description: 'A modern UI course & certification platform for online education.',
    githubLink: 'https://github.com/Soumyajain15/EduHub',
    imageUrl: 'https://picsum.photos/seed/eduhub/600/400',
    tags: ['React', 'Node.js', 'MySQL', 'E-learning'],
    dataAiHint: 'online learning'
  },
  {
    id: 'rgpvbot',
    title: 'RGPV Result Automation Bot (UiPath)',
    description: 'Automates SGPA calculation from the RGPV university website using UiPath.',
    githubLink: 'https://github.com/Soumyajain15/Rgpv-result-Sgpa-Calculator-bot-in-UIpath',
    imageUrl: 'https://picsum.photos/seed/rgpvbot/600/400',
    tags: ['RPA', 'UiPath', 'Automation', 'Education Tech'],
    dataAiHint: 'data automation'
  },
  {
    id: 'campusnetwork',
    title: 'Campus Network & Cybersecurity Design (Cisco)',
    description: 'Network simulation for a campus using VLANs, routing, and subnetting in Cisco Packet Tracer.',
    githubLink: 'https://github.com/Soumyajain15/Campus-Network-Cybersecurity',
    imageUrl: 'https://picsum.photos/seed/campusnetwork/600/400',
    tags: ['Networking', 'Cybersecurity', 'Cisco', 'Simulation'],
    dataAiHint: 'network security'
  },
  {
    id: 'techclubs',
    title: 'TechClubs Portal (Moonhack)',
    description: 'A portal to manage tech clubs, events, and registrations for campus activities.',
    githubLink: 'https://github.com/Soumyajain15/Techno-Club-Portal-Moonhack',
    imageUrl: 'https://picsum.photos/seed/techclubs/600/400',
    tags: ['Web Development', 'Event Management', 'Community'],
    dataAiHint: 'community portal'
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Projects</h2>
          <p className="text-lg text-muted-foreground mt-2">A selection of my work and contributions.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              {project.imageUrl && (
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    data-ai-hint={project.dataAiHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm text-muted-foreground mb-4">{project.description}</CardDescription>
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub <ArrowRight className="ml-auto h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
