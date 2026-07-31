import { Inter, Playfair_Display, Herr_Von_Muellerhoff } from 'next/font/google';
import './globals.css';
import data from '@/lib/data.json';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700', '800'],
});

const signatureFont = Herr_Von_Muellerhoff({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-signature',
});

export const metadata = {
  title: data.globalMetadata.title,
  description: data.globalMetadata.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${signatureFont.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
