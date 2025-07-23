import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, Shield, Building } from 'lucide-react';
import type { ExperienceItem } from '@/lib/types';

const experienceData: ExperienceItem[] = [
  {
    id: 'frontend-intern-infosys',
    role: 'Software Developer Intern',
    company: 'Infosys',
    period: 'May – Oct 2024',
    description: 'Contributed to the development of the EduHub platform. Utilized React for frontend development, Node.js for backend services, and MySQL for database management. Focused on creating responsive and user-friendly interfaces. Github- https://github.com/Soumyajain15/EduHub?embedded=0',
  },
  {
    id: 'cybersecurity-intern',
    role: 'Cybersecurity Intern',
    company: 'Cisco',
    period: 'Aug – Dec 2024',
    description: 'Gained hands-on experience in system protection, threat analysis, and secure networking practices. Developed foundational skills in identifying vulnerabilities and implementing security measures. Github-https://github.com/Soumyajain15/Campus-Network-Cybersecurity?embedded=0',
  },
 
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience & Internships</h2>
          <p className="text-lg text-muted-foreground mt-2">My professional journey and learning experiences.</p>
        </div>
        <div className="relative space-y-12">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden md:block"></div>

          {experienceData.map((item, index) => (
            <div key={item.id} className={`flex md:items-center flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} w-full mb-8`}>
              <div className="md:w-1/2">
                <Card className={`shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out ${index % 2 === 0 ? 'md:mr-4 lg:mr-8' : 'md:ml-4 lg:ml-8'} mb-8 md:mb-0`}>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      {item.role.toLowerCase().includes('cybersecurity') ? <Shield className="h-6 w-6 text-primary mr-3" /> : <Briefcase className="h-6 w-6 text-primary mr-3" />}
                      <CardTitle className="text-xl font-semibold">{item.role}</CardTitle>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Building className="h-4 w-4 mr-2"/>
                      <span>{item.company}</span>
                      <span className="mx-2">|</span>
                      <span>{item.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
              <div className="md:w-1/2"></div> {/* Spacer for the other side of timeline */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
