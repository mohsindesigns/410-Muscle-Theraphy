import { Inter, Playfair_Display, Herr_Von_Muellerhoff } from 'next/font/google';
import './globals.css';

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
  title: 'Muscle Therapy & Sports Recovery | Expert Muscle Therapy',
  description:
    'Expert muscle therapy to reduce pain, restore mobility, and elevate your performance. Trusted by 500+ clients.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${signatureFont.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
