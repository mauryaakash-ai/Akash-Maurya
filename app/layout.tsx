import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://mauryaakash-ai.github.io'),
  title: 'Akash Maurya — AI/ML Engineer & Computer Vision Researcher',
  description:
    'Research and engineering portfolio of Akash Maurya — AI/ML undergraduate specializing in image super-resolution, deep convolutional backbones, vision transformers (EDSR, SwinIR, HAT), and self-supervised learning.',
  authors: [{ name: 'Akash Maurya', url: 'https://github.com/mauryaakash-ai' }],
  keywords: [
    'Akash Maurya',
    'AI Engineer',
    'Machine Learning Engineer',
    'Computer Vision Researcher',
    'Image Super-Resolution',
    'PyTorch',
    'Deep Learning',
    'Bennett University',
    'SimCLR',
    'SwinIR',
    'EDSR',
    'ViSecure Systems',
    'Ashoka University'
  ],
  openGraph: {
    title: 'Akash Maurya — AI/ML Engineer & Computer Vision Researcher',
    description:
      'AI/ML undergraduate with hands-on research in image super-resolution, deep learning architectures, and real-time systems.',
    url: 'https://github.com/mauryaakash-ai',
    siteName: 'Akash Maurya Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 1000,
        alt: 'Akash Maurya',
      },
    ],
  },
  icons: {
    icon: '/profile.jpg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0a09' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
