'use client';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';
import data from '@/lib/data.json';

export default function BlogsPage() {
  const { items } = data.blog;

  return (
    <>

      <main className="bg-dark min-h-screen pt-[140px] pb-24 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-radial-dots-gold" />

        <div className="site-container relative z-10">
          <div className="mb-12 md:mb-20 text-center flex flex-col items-center">
            <p className="section-label mb-4">{data.blogsPage.label}</p>
            <h1 className="display-heading text-[32px] min-[400px]:text-[44px] md:text-[64px] text-white leading-tight">
              {data.blogsPage.titleLine1} <span className="text-gold italic font-light">{data.blogsPage.titleLine2}</span>
            </h1>
            <p className="text-white/60 text-[14px] md:text-[15px] max-w-2xl mx-auto mt-6 leading-relaxed">
              {data.blogsPage.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((post) => (
              <article key={post.id} className="bg-black/40 border border-border-dark/50 rounded-sm overflow-hidden group shadow-2xl flex flex-col">
                <div className="relative w-full h-[240px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10" />
                  <span className="absolute top-4 left-4 bg-gold text-dark text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 shadow-lg">
                    {post.tag}
                  </span>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-white font-bold text-[18px] md:text-[20px] leading-snug mb-3 group-hover:text-gold transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-white/60 text-[13.5px] leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="flex items-center gap-2 text-gold text-[12px] font-bold tracking-wide uppercase hover:gap-3 transition-all duration-200 mt-auto"
                  >
                    {data.blogsPage.ctaReadMore} <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

    </>
  );
}
