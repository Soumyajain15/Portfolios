import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import type { TestimonialItem } from '@/lib/types';

const testimonialsData: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    quote: 'Soumya shows incredible dedication and fast learning in projects. A true asset to any team.',
    author: 'Sowmya Marthala',
    role: 'Project Manager, Infosys',
  },
  {
    id: 'testimonial-2',
    quote: 'Very dependable and skilled in automation and development. Soumya consistently delivers high-quality work.',
    author: 'Prof. Aarti Joshi',
    role: 'Professor, Acropolis Institute',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Testimonials</h2>
          <p className="text-lg text-muted-foreground mt-2">What others say about my work.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={`https://picsum.photos/seed/${testimonial.author.split(' ')[0]}/100/100`} alt={testimonial.author} data-ai-hint="person avatar"/>
                  <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/30" />
                  <p className="italic text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/50">
                    {testimonial.quote}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
