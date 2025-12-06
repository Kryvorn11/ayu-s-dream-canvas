import { useState } from 'react';
import ayuPhoto from '@/assets/ayu-photo.png';
const memories = [{
  id: 1,
  caption: "Beautiful moments ✨"
}, {
  id: 2,
  caption: "Your lovely smile 💕"
}, {
  id: 3,
  caption: "Precious memories 🌸"
}, {
  id: 4,
  caption: "Forever cherished 💝"
}];
const MemoryGallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return <section className="relative py-24 px-4 mocha-swirl-bg overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-warm-gold/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-gold/10 rounded-full blur-3xl animate-float-slow delay-500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-mocha-deep mb-4">
            Our <span className="text-gradient-gold">Precious Memories</span>
          </h2>
          <p className="font-handwritten text-2xl text-primary">
            Every moment with you is a treasure 📸
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {memories.map((memory, index) => <div key={memory.id} className={`polaroid transform transition-all duration-500 cursor-pointer ${activeIndex === index ? 'scale-105 z-20' : 'hover:scale-105 hover:-rotate-2'}`} style={{
          transform: `rotate(${(index % 2 === 0 ? -1 : 1) * (2 + index)}deg)`,
          animationDelay: `${index * 0.2}s`
        }} onClick={() => setActiveIndex(activeIndex === index ? null : index)} onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(null)}>
              <div className="relative aspect-square overflow-hidden rounded-sm mb-2">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src={ayuPhoto} alt={memory.caption} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                {/* Soft glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-mocha-soft/20 to-transparent" />
              </div>
              <p className="font-handwritten text-lg text-center text-mocha-deep">
                {memory.caption}
              </p>
            </div>)}
        </div>

        
      </div>
    </section>;
};
export default MemoryGallery;