import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, FileText, Brain, Code2, Palette, FileJson2, ServerCog, Cable, Database, DatabaseZap, Bot, Router as CiscoIcon } from 'lucide-react'; // Using Router for Cisco
import type { SkillItem } from '@/lib/types';

const skills: SkillItem[] = [
  { id: 'html', name: 'HTML', category: 'Frontend', icon: Code2 },
  { id: 'css', name: 'CSS', category: 'Frontend', icon: Palette },
  { id: 'javascript', name: 'JavaScript', category: 'Frontend', icon: FileJson2 },
  { id: 'reactjs', name: 'ReactJS', category: 'Frontend', icon: () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 fill-current"><title>React</title><path d="M12.001 2.002c-5.524 0-10.002 4.476-10.002 10.002s4.478 10.002 10.002 10.002 10.002-4.476 10.002-10.002S17.525 2.002 12.001 2.002zm0 18.003c-4.41 0-8.002-3.59-8.002-8.002s3.592-8.002 8.002-8.002 8.002 3.59 8.002 8.002-3.592 8.002-8.002 8.002zM12.001 3.785a.722.722 0 00-.724.722v1.855a7.323 7.323 0 00-5.176 5.177H4.249a.722.722 0 00-.722.721.722.722 0 00.722.722h1.857a7.323 7.323 0 005.175 5.175v1.857a.722.722 0 00.722.722.722.722 0 00.722-.722v-1.857a7.323 7.323 0 005.177-5.175h1.855a.722.722 0 00.722-.722.722.722 0 00-.722-.721h-1.855a7.323 7.323 0 00-5.177-5.177V4.507a.722.722 0 00-.722-.722zm0 2.39a4.936 4.936 0 014.935 4.937 4.936 4.936 0 01-4.935 4.935 4.936 4.936 0 01-4.937-4.935A4.936 4.936 0 0112 6.176zm-2.469 3.49a.722.722 0 00-.721.722.722.722 0 00.721.722h4.938a.722.722 0 100-1.444H9.532z"/></svg> },
  { id: 'nodejs', name: 'Node.js', category: 'Backend', icon: ServerCog },
  { id: 'expressjs', name: 'Express.js', category: 'Backend', icon: Cable },
  { id: 'mysql', name: 'MySQL', category: 'Database', icon: Database },
  { id: 'mongodb', name: 'MongoDB', category: 'Database', icon: DatabaseZap },
  { id: 'uipath', name: 'UiPath (RPA)', category: 'Others', icon: Bot },
  { id: 'dbms', name: 'DBMS', category: 'Others', icon: Database },
  { id: 'cisco', name: 'Cisco Packet Tracer', category: 'Others', icon: CiscoIcon },
];

const skillCategories = ['Frontend', 'Backend', 'Database', 'Others'] as const;

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
          <p className="text-lg text-muted-foreground mt-2">A glimpse into my professional journey and skills.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <Card className="md:col-span-3 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Soumya Jain</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                I am a dedicated and adaptable IT professional with experience in Web Development and Robotic Process Automation (RPA). 
                Currently pursuing B.Tech in Computer Science at Acropolis Institute of Technology & Research, Indore. 
                Passionate about building cost-effective, scalable digital solutions.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Highlights:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Active on <Link href="https://leetcode.com/u/Soumya15/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LeetCode <ExternalLink className="inline-block h-4 w-4" /></Link></li>
                  <li>Strong DSA & problem-solving foundation</li>
                </ul>
              </div>
              <Button asChild size="lg" className="w-full sm:w-auto shadow-md hover:shadow-primary/40 transition-shadow">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSefOEKMEPfMFPafIVzxb2Bn6SYiv19Gxes78553ocSByTCSZg/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" /> View My Resume
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              {skillCategories.map(category => (
                <div key={category} className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.filter(skill => skill.category === category).map(skill => (
                      <Badge key={skill.id} variant="secondary" className="py-1 px-3 text-sm">
                        {skill.icon && <skill.icon className="h-4 w-4 mr-1.5" />}
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
