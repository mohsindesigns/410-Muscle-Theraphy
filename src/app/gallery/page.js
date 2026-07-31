import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import data from '@/lib/data.json';

// Use available images to populate the gallery
import img1 from '../../../public/images/service-massage.webp';
import img2 from '../../../public/images/testimonial-1.webp';
import img3 from '../../../public/images/testimonial-2.webp';
import img4 from '../../../public/images/testimonial-3.webp';
import img5 from '../../../public/images/testimonial-4.webp';
import img6 from '../../../public/images/testimonial-5.webp';
import img7 from '../../../public/images/testimonial-6.webp';
import img8 from '../../../public/images/blog-1.webp';
import img9 from '../../../public/images/blog-2.webp';
import img10 from '../../../public/images/blog-3.webp';
import img11 from '../../../public/images/hero-bg.webp';
import img12 from '../../../public/images/therapist-portrait.webp';

const galleryImages = [
  img1, img11, img3, img8, img5, img12, img7, img9, img6, img2, img10, img4
];

export const metadata = {
  title: data.galleryPage.metadata.title,
  description: data.galleryPage.metadata.description,
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen pt-[140px] pb-24 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #C8960C 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="site-container relative z-10">
          <div className="mb-12 md:mb-20 text-center flex flex-col items-center">
            <p className="section-label mb-4">{data.galleryPage.label}</p>
            <h1 className="display-heading text-[32px] min-[400px]:text-[44px] md:text-[64px] text-white leading-tight">
              {data.galleryPage.titleLine1} <span className="text-gold italic font-light">{data.galleryPage.titleLine2}</span>
            </h1>
            <p className="text-white/60 text-[14px] md:text-[15px] max-w-2xl mx-auto mt-6 leading-relaxed">
              {data.galleryPage.description}
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="relative overflow-hidden break-inside-avoid group rounded-sm shadow-2xl border border-border-dark/50 bg-black/40">
                <Image 
                  src={src} 
                  alt={`Muscle Therapy Gallery Image ${idx + 1}`} 
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10" />
              </div>
            ))}
          </div>
          
          <div className="mt-20 flex justify-center">
            <a href="/contact" className="btn-gold shadow-2xl">
              {data.galleryPage.ctaBook}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
