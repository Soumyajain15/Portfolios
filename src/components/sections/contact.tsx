import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Linkedin, Github, Code as LeetcodeIcon, FileText, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { Button } from '../ui/button';

const contactDetails = [
  { icon: Phone, text: '+91 8602857172', href: 'tel:+918602857172', label: 'Phone' },
  { icon: Mail, text: 'soumyaj470@gmail.com', href: 'mailto:soumyaj470@gmail.com', label: 'Email' },
  { icon: MapPin, text: 'Indore, India', href: '#', label: 'Location', isLink: false },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/soumya-jain-a4095b254', label: 'LinkedIn Profile' },
  { icon: Github, href: 'https://github.com/Soumyajain15', label: 'GitHub Profile' },
  { icon: LeetcodeIcon, href: 'https://leetcode.com/u/Soumya15/', label: 'LeetCode Profile' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mt-2">I'm always open to discussing new projects, creative ideas, or opportunities.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.icon className="h-6 w-6 text-primary" />
                  {item.isLink === false ? (
                     <span className="text-muted-foreground">{item.text}</span>
                  ) : (
                    <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors" target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      {item.text}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t">
                <h3 className="text-lg font-semibold text-foreground mb-3">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <Button key={index} variant="outline" size="icon" asChild>
                      <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                        <link.icon className="h-5 w-5" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                 <Button asChild size="lg" className="w-full shadow-md hover:shadow-primary/40 transition-shadow mt-4">
                    <Link href="https://drive.google.com/file/d/15lyuEXnL7ImvHS9JHFriUtqTlRCSHIru/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-5 w-5" /> View My Resume
                    </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
