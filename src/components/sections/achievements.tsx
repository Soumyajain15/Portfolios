import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, CheckCircle, Cloud, Code2 as CprogIcon } from 'lucide-react'; // Using Code2 for C Language
import type { AchievementItem } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

const achievementsData: AchievementItem[] = [
  { id: 'rpa-hackathon', title: 'Runner-Up – RPA Hackathon (Hack-a-Bot)', icon: Award, issuer: 'Hackathon' },
  { id: 'rpa-foundation', title: 'Certified in RPA Developer Foundation', icon: CheckCircle, issuer: 'UiPath (assumed)' },
  { id: 'oci-foundation', title: 'Certified in Oracle Cloud Infrastructure Foundation', icon: Cloud, issuer: 'Oracle' },
  { id: 'nptel-c', title: 'NPTEL Certified in C Language', icon: CprogIcon, issuer: 'NPTEL' },
  { id: 'reactjs-infosys', title: 'Certified in ReactJS', icon: CheckCircle, issuer: 'Infosys Springboard' },
  { id: 'javascript-infosys', title: 'Certified in JavaScript', icon: CheckCircle, issuer: 'Infosys Springboard' },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Achievements & Certifications</h2>
          <p className="text-lg text-muted-foreground mt-2">Recognitions of my skills and dedication.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((achievement) => (
            <Card key={achievement.id} className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              {achievement.icon && <achievement.icon className="h-12 w-12 text-primary mb-4" />}
              <CardTitle className="text-lg font-semibold mb-1">{achievement.title}</CardTitle>
              {achievement.issuer && (
                <Badge variant="outline" className="text-xs">{achievement.issuer}</Badge>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
