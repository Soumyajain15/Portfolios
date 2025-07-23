
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  ArrowRight,
  Globe,
  Mic,
  ServerCog,
  Database,
  Bot,
  Settings2,
  Network,
  Shield,
  Users,
  Search,
  Briefcase,
  Eye,
  Router as RouterIcon // Aliasing to avoid conflict with Next.js Router
} from 'lucide-react';
import type { Project } from '@/lib/types';
import type React from 'react';

// Define ReactIcon here or import from a shared icons file if used elsewhere
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
    <title>React</title>
    <path d="M12.001 2.002c-5.524 0-10.002 4.476-10.002 10.002s4.478 10.002 10.002 10.002 10.002-4.476 10.002-10.002S17.525 2.002 12.001 2.002zm0 18.003c-4.41 0-8.002-3.59-8.002-8.002s3.592-8.002 8.002-8.002 8.002 3.59 8.002 8.002-3.592 8.002-8.002 8.002zM12.001 3.785a.722.722 0 00-.724.722v1.855a7.323 7.323 0 00-5.176 5.177H4.249a.722.722 0 00-.722.721.722.722 0 00.722.722h1.857a7.323 7.323 0 005.175 5.175v1.857a.722.722 0 00.722.722.722.722 0 00.722-.722v-1.857a7.323 7.323 0 005.177-5.175h1.855a.722.722 0 00.722-.722.722.722 0 00-.722-.721h-1.855a7.323 7.323 0 00-5.177-5.177V4.507a.722.722 0 00-.722-.722zm0 2.39a4.936 4.936 0 014.935 4.937 4.936 4.936 0 01-4.935 4.935 4.936 4.936 0 01-4.937-4.935A4.936 4.936 0 0112 6.176zm-2.469 3.49a.722.722 0 00-.721.722.722.722 0 00.721.722h4.938a.722.722 0 100-1.444H9.532z"/>
  </svg>
);

const projectsData: Project[] = [
    {
    id: 'jobportal',
    title: 'Job Portal',
    description: 'A comprehensive platform for job seekers and employers to connect, featuring job listings, applications, and user profiles.',
    githubLink: 'https://github.com/Soumyajain15/Jobportal',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Web Development', 'React', 'Job Board'],
    dataAiHint: 'job search',
    techIcons: [
      { name: 'React', icon: ReactIcon },
      { name: 'Job Search', icon: Briefcase },
    ],
  },
  {
    id: 'proxima',
    title: 'Proxima - AI Content Generator',
    description: 'An AI-powered application to generate various types of content, including text and images, using generative models.',
    githubLink: 'https://github.com/Soumyajain15/proximas',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['AI', 'Content Generation', 'Web App'],
    dataAiHint: 'artificial intelligence',
    techIcons: [
      { name: 'AI', icon: Bot },
      { name: 'React', icon: ReactIcon },
    ],
  },
    {
    id: 'speekfree',
    title: 'SpeekFree – Speak Without Fear',
    description: 'Voice-based anonymous complaint system to promote secure and fearless reporting, ensuring user privacy.',
    githubLink: 'https://github.com/Soumyajain15/SpeekFree-Speak-Without-Fear',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Web Development', 'Anonymity', 'Voice Recognition'],
    dataAiHint: 'secure communication',
    techIcons: [
      { name: 'Voice Input', icon: Mic },
      { name: 'Anonymity', icon: Eye },
    ],
  },
  {
    id: 'eduhub',
    title: 'EduHub – Online Learning Platform',
    description: 'A modern UI course & certification platform for online education.',
    githubLink: 'https://github.com/Soumyajain15/EduHub',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['React', 'Node.js', 'MySQL', 'E-learning'],
    dataAiHint: 'online learning',
    techIcons: [
      { name: 'React', icon: ReactIcon },
      { name: 'Node.js', icon: ServerCog },
      { name: 'MySQL', icon: Database },
    ],
  },
  {
    id: 'rgpvbot',
    title: 'RGPV Result Automation Bot (UiPath)',
    description: 'Automates SGPA calculation from the RGPV university website using UiPath.',
    githubLink: 'https://github.com/Soumyajain15/Rgpv-result-Sgpa-Calculator-bot-in-UIpath',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['RPA', 'UiPath', 'Automation', 'Education Tech'],
    dataAiHint: 'data automation',
    techIcons: [
      { name: 'UiPath', icon: Bot },
      { name: 'Automation', icon: Settings2 },
    ],
  },
  {
    id: 'campusnetwork',
    title: 'Campus Network & Cybersecurity Design (Cisco)',
    description: 'Network simulation for a campus using VLANs, routing, and subnetting in Cisco Packet Tracer.',
    githubLink: 'https://github.com/Soumyajain15/Campus-Network-Cybersecurity',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Networking', 'Cybersecurity', 'Cisco', 'Simulation'],
    dataAiHint: 'network security',
    techIcons: [
      { name: 'Cisco Packet Tracer', icon: RouterIcon },
      { name: 'Networking', icon: Network },
      { name: 'Cybersecurity', icon: Shield },
    ],
  },
  {
    id: 'techclubs',
    title: 'TechClubs Portal (Moonhack)',
    description: 'A portal to manage tech clubs, events, and registrations for campus activities.',
    githubLink: 'https://github.com/Soumyajain15/Techno-Club-Portal-Moonhack',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Web Development', 'Event Management', 'Community'],
    dataAiHint: 'community portal',
    techIcons: [
      { name: 'Web Platform', icon: Globe },
      { name: 'Community', icon: Users },
    ],
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
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out group">
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
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                )}
                {project.techIcons && project.techIcons.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-border/20">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Key Technologies:</h4>
                    <div className="flex flex-wrap gap-3 items-center">
                      {project.techIcons.map((tech, index) => (
                        <tech.icon 
                          key={`${project.id}-tech-${index}`} 
                          className="h-5 w-5 text-muted-foreground" 
                          title={tech.name} 
                          aria-label={tech.name}
                        />
                      ))}
                    </div>
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
