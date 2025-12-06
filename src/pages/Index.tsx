import FloatingSparkles from '@/components/FloatingSparkles';
import FloatingHearts from '@/components/FloatingHearts';
import HeroSection from '@/components/HeroSection';
import WhySpecialSection from '@/components/WhySpecialSection';
import MemoryGallery from '@/components/MemoryGallery';
import LoveLetterSection from '@/components/LoveLetterSection';
import BirthdayWishesSection from '@/components/BirthdayWishesSection';
import FinalSurpriseSection from '@/components/FinalSurpriseSection';

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Global floating elements */}
      <FloatingSparkles />
      <FloatingHearts />
      
      {/* Page sections */}
      <HeroSection />
      <WhySpecialSection />
      <MemoryGallery />
      <LoveLetterSection />
      <BirthdayWishesSection />
      <FinalSurpriseSection />

      {/* Footer */}
      <footer className="relative py-8 bg-mocha-deep text-center">
        <p className="font-handwritten text-xl text-rose-gold/80">
          Made with 💝 for the most special girl
        </p>
      </footer>
    </main>
  );
};

export default Index;
