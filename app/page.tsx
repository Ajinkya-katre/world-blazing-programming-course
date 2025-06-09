import Hero from '@/components/Hero';
import FeaturedCourses from '@/components/FeaturedCourses';
import HighlightedContent from '@/components/HighlightedContent';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedCourses />
      <HighlightedContent />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}