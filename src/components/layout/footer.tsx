import Link from 'next/link';
import { Github, Linkedin, Code, Heart } from 'lucide-react'; // Using Code for LeetCode as a placeholder

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/soumya-jain-a4095b254', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/Soumyajain15', icon: Github },
  { name: 'LeetCode', href: 'https://leetcode.com/u/Soumya15/', icon: Code },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-8 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.name}
            >
              <social.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground flex items-center">
          Built with <Heart className="w-4 h-4 mx-1 text-primary fill-primary" /> using Next.js & Tailwind CSS.
        </p>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Soumya Jain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
