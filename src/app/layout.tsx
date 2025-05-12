import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import SiteHeader from '@/components/layout/header';
import SiteFooter from '@/components/layout/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Soumya Jain | Frontend & RPA Developer',
  description: 'Portfolio of Soumya Jain, a Frontend Developer and RPA enthusiast, showcasing skills, projects, and experience.',
  keywords: ['Soumya Jain', 'Frontend Developer', 'RPA Developer', 'Portfolio', 'ReactJS', 'UiPath', 'Web Developer'],
  authors: [{ name: 'Soumya Jain' }],
  openGraph: {
    title: 'Soumya Jain | Frontend & RPA Developer',
    description: 'Crafting digital experiences and automation solutions.',
    url: 'https://your-domain.com', // Replace with actual domain
    siteName: 'Soumya Jain Portfolio',
    images: [
      {
        url: 'https://picsum.photos/seed/soumya-og/1200/630', // Replace with a relevant OG image
        width: 1200,
        height: 630,
        alt: 'Soumya Jain Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soumya Jain | Frontend & RPA Developer',
    description: 'Crafting digital experiences and automation solutions.',
    // creator: '@yourtwitterhandle', // Replace with actual Twitter handle
    images: ['https://picsum.photos/seed/soumya-og/1200/630'], // Replace
  },
  icons: {
    // icon: '/favicon.ico', // Add your favicon here
    // apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest', // Add your manifest file
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-grow">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
