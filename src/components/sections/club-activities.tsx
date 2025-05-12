import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Zap, Award } from 'lucide-react'; // Example icons
import type { ClubActivityItem } from '@/lib/types';

const clubActivitiesData: ClubActivityItem[] = [
  {
    id: 'uipath-community',
    clubName: 'UiPath Community',
    icon: Zap, // Example icon for UiPath
    description: 'Actively contributed to the UiPath Community, fostering learning and development in Robotic Process Automation.',
    roles: [
      {
        role: 'Trainer Head',
        duration: '2nd Year',
        details: [
          'Led and mentored a team of trainers.',
          'Developed training materials and workshops.',
          'Organized community events and hackathons related to RPA.'
        ],
      },
      {
        role: 'Trainer',
        duration: '1st Year',
        details: [
          'Conducted training sessions on UiPath tools and best practices.',
          'Assisted members with their RPA projects and queries.',
          'Promoted RPA adoption within the student community.'
        ],
      },
    ],
  },
  {
    id: 'csi-club',
    clubName: 'Computer Society of India (CSI) - Student Chapter',
    icon: Users, // Example icon for CSI
    description: 'Engaged in various technical and professional development activities organized by the CSI student chapter.',
    roles: [
      {
        role: 'Executive Member',
        duration: '2 Years',
        details: [
          'Actively participated in organizing technical workshops, seminars, and coding competitions.',
          'Contributed to event management and outreach activities.',
          'Collaborated with fellow members on club initiatives and projects.'
        ],
      },
    ],
  },
];

export default function ClubActivitiesSection() {
  return (
    <section id="clubs" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Club Activities & Leadership</h2>
          <p className="text-lg text-muted-foreground mt-2">My involvement in technical and community-driven clubs.</p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {clubActivitiesData.map((activity) => (
            <Card key={activity.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {activity.icon && <activity.icon className="h-8 w-8 text-primary mr-3" />}
                  <CardTitle className="text-2xl font-semibold">{activity.clubName}</CardTitle>
                </div>
                {activity.description && (
                  <CardDescription className="text-muted-foreground">{activity.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                {activity.roles.map((roleItem, index) => (
                  <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-primary/30">
                    <div className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-primary border-2 border-background"></div>
                    <h4 className="text-lg font-medium text-foreground">{roleItem.role}</h4>
                    <Badge variant="secondary" className="mb-2">{roleItem.duration}</Badge>
                    {roleItem.details && roleItem.details.length > 0 && (
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {roleItem.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
