
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
import img12 from '../../../public/images/theraphist.jpeg';

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

      <main className="bg-dark min-h-screen pt-[140px] pb-24 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-radial-dots-gold" />

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="relative aspect-[4/3] w-full overflow-hidden group rounded-lg shadow-xl border border-border-dark/60 bg-dark-3">
                <Image 
                  src={src} 
                  alt={`Muscle Therapy Gallery Image ${idx + 1}`} 
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 filter contrast-[1.02]"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 left-0 w-5 h-5 m-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gold" />
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-gold" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 flex justify-center">
            <a
              href={data.globalMetadata?.bookingUrl || "https://www.styleseat.com/m/v/410muscletherapy"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold shadow-2xl"
            >
              {data.galleryPage.ctaBook}
            </a>
          </div>
        </div>
      </main>

    </>
  );
}
