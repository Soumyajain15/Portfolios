import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Brush, DatabaseZap, Bot, ShieldCheck, Server } from 'lucide-react';
import type { ServiceItem } from '@/lib/types';

const servicesData: ServiceItem[] = [
  { id: 'frontend', title: 'Frontend Web Development', icon: Code },
  { id: 'backend', title: 'Backend Development', icon: Server },
  { id: 'uiux', title: 'UI/UX Design', icon: Brush },
  { id: 'db', title: 'Database Management (MySQL, MongoDB)', icon: DatabaseZap },
  { id: 'rpa', title: 'Robotic Process Automation (UiPath)', icon: Bot },
  { id: 'cybersecurity', title: 'Cybersecurity & Network Simulation', icon: ShieldCheck },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Services I Offer</h2>
          <p className="text-lg text-muted-foreground mt-2">How I can help you build amazing things.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Card key={service.id} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <CardHeader>
                {service.icon && <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />}
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              {/* Optional: Add a short description for each service in CardContent if needed */}
              {/* <CardContent>
                <p className="text-muted-foreground text-sm">A brief description of the service.</p>
              </CardContent> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
