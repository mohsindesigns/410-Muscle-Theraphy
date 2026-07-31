'use client';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft } from 'lucide-react';
import data from '@/lib/data.json';
import { useEffect, useState } from 'react';

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (params?.slug) {
      const foundPost = data.blog.items.find(item => item.slug === params.slug);
      if (foundPost) {
        setPost(foundPost);
      } else {
        router.push('/blogs');
      }
    }
  }, [params, router]);

  if (!post) {
    return (
      <main className="bg-dark min-h-screen pt-[140px] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
      </main>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-dark min-h-screen pt-[140px] pb-24 relative">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #C8960C 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="site-container relative z-10">
          
          {/* Top Bar Navigation */}
          <div className="mb-10 lg:mb-16">
            <Link 
              href="/blogs" 
              className="inline-flex items-center gap-2 text-white/50 hover:text-gold text-[12px] font-bold tracking-widest uppercase transition-colors"
            >
              <ArrowLeft size={16} />
              {data.blogDetailPage.backLink}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Image & Header (Sticky) */}
            <div className="lg:sticky lg:top-24 flex flex-col gap-6">
              <header className="flex flex-col items-start text-left">
                <h1 className="display-heading text-[32px] min-[400px]:text-[40px] md:text-[50px] text-white leading-[1.1] mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-white/50 text-[12px] tracking-[0.1em] uppercase font-bold">
                  <span>{post.author}</span>
                  <span className="w-1 h-1 bg-gold rounded-full"></span>
                  <span>{post.date}</span>
                </div>
              </header>

              <div className="relative w-full h-[320px] md:h-[420px] rounded-sm overflow-hidden shadow-2xl border border-border-dark">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Article Content */}
            <article className="lg:pt-2">
              {post.content.map((block, index) => {
                if (block.type === 'paragraph') {
                  return (
                    <p key={index} className="text-white/70 text-[16px] md:text-[17px] leading-[1.85] tracking-wide mb-8 font-light">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === 'heading') {
                  return (
                    <h2 key={index} className="text-white text-[24px] md:text-[30px] mt-12 mb-6 font-normal tracking-tight leading-snug">
                      {block.text}
                    </h2>
                  );
                }
                return null;
              })}
            </article>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
