import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Akor Anthony Makuochukwu (Snowtech) | Senior Full-Stack & App Developer | Cybersecurity Specialist',
  description: 'Portfolio of Akor Anthony Makuochukwu (Snowtech) - Senior Full-Stack Web & App Developer with 6+ years experience. CTO at TallyPadi, former Smartweb Security engineer, cybersecurity certified. Based in Sangotedo, Lagos Island, Nigeria.',
  keywords: ['Akor Anthony Makuochukwu', 'Snowtech', 'Full Stack Developer Lagos', 'React Native Developer Nigeria', 'Next.js Developer', 'Cybersecurity Specialist Lagos', 'TallyPadi CTO'],
  authors: [{ name: 'Akor Anthony Makuochukwu (Snowtech)' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
