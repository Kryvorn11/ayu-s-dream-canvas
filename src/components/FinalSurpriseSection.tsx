import { Heart } from 'lucide-react';

const FinalSurpriseSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-4 overflow-hidden">
      {/* Mocha fog rising from bottom */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-coffee-beige/40 via-mocha-soft/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blush-pink/30 to-transparent blur-xl" />
      </div>

      {/* Rose-gold sparkle burst */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-sparkle"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              background: `radial-gradient(circle, hsl(15 55% 72%), hsl(40 75% 58% / 0.5))`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-gold/20 rounded-full blur-3xl animate-glow-pulse" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Heartbeat animation */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-rose-gold via-warm-gold to-blush-pink animate-heartbeat glow-rose">
            <Heart className="w-16 h-16 text-card fill-card" />
          </div>
        </div>

        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-mocha-deep mb-8">
          <span className="block text-gradient-gold mb-4">Ayu,</span>
          <span className="block text-3xl md:text-4xl lg:text-5xl font-medium">
            You Are One in a Billion
          </span>
        </h2>

        <div className="relative my-12">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto rounded-full" />
        </div>

        <p className="font-handwritten text-2xl md:text-3xl lg:text-4xl text-primary leading-relaxed mb-8">
          Thank you for existing.
        </p>

        <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-12">
          The world became a more beautiful place the day you were born. 
          Happy Birthday, my most special girl. 💝
        </p>

        {/* Decorative elements */}
        <div className="flex justify-center gap-4">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="text-rose-gold/60 fill-rose-gold/40 animate-float"
              size={20 + i * 4}
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Final sparkle */}
        <div className="mt-16 font-handwritten text-4xl md:text-5xl text-gradient-gold animate-glow-pulse">
          ✨ Forever & Always ✨
        </div>
      </div>
    </section>
  );
};

export default FinalSurpriseSection;
