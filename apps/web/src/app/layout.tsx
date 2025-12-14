import '../styles/globals.css';
import type { ReactNode } from 'react';
import { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import Nav from '../components/Nav';
import BackgroundFX from '../components/BackgroundFX';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Out Of Box Studio',
  description: 'Crafting Games Beyond Imagination',
  openGraph: {
    title: 'Out Of Box Studio',
    description: 'Crafting Games Beyond Imagination',
    type: 'website',
    url: 'https://outofbox.studio',
    images: []
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Out Of Box Studio',
    description: 'Crafting Games Beyond Imagination'
  }
};

const font = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans'
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body className="min-h-screen bg-bg text-text antialiased">
        <BackgroundFX />
        <div className="noise-overlay" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
