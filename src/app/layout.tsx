import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-snowtech.vercel.app'),
  title: {
    default: 'Akor Anthony Makuochukwu (Snowtech) | CTO & Senior Full-Stack Architect',
    template: '%s | Akor Anthony Makuochukwu (Snowtech)',
  },
  description: 'Chief Technology Officer at TallyPadi & former Cybersecurity Engineer at Smartweb Security. 6+ years of experience engineering enterprise web platforms, cross-platform mobile apps for iOS & Android, and hardened cloud infrastructure.',
  keywords: [
    'Akor Anthony Makuochukwu',
    'Snowtech',
    'CTO TallyPadi',
    'Full Stack Developer Lagos',
    'React Native Developer Nigeria',
    'Next.js Developer Lagos',
    'Cybersecurity Specialist Lagos',
    'Smartweb Security',
    'Mobile App Developer Nigeria',
    'Sangotedo Lagos Island Developer'
  ],
  authors: [{ name: 'Akor Anthony Makuochukwu (Snowtech)', url: 'https://tallypadi.com' }],
  creator: 'Akor Anthony Makuochukwu (Snowtech)',
  publisher: 'Snowtech Engineering',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-snowtech.vercel.app',
    siteName: 'Akor Anthony Makuochukwu (Snowtech) Portfolio',
    title: 'Akor Anthony Makuochukwu (Snowtech) | CTO & Senior Full-Stack Architect',
    description: 'Chief Technology Officer at TallyPadi & former Cybersecurity Engineer at Smartweb Security. 6+ years experience in web platforms, mobile apps, and cybersecurity.',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Akor Anthony Makuochukwu (Snowtech) - CTO & Senior Full-Stack Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akor Anthony Makuochukwu (Snowtech) | CTO & Senior Full-Stack Architect',
    description: 'Chief Technology Officer at TallyPadi & Cybersecurity Specialist. 6+ years experience building reactive apps and secure platforms.',
    images: ['/profile.jpg'],
    creator: '@snowtech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050811',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050811] text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
