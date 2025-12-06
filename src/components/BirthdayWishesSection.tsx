import { useEffect, useState } from 'react';

const Candle = ({ delay }: { delay: number }) => (
  <div className="relative" style={{ animationDelay: `${delay}s` }}>
    {/* Candle body */}
    <div className="w-4 h-16 bg-gradient-to-b from-rose-gold to-warm-gold rounded-t-sm mx-auto" />
    {/* Flame */}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
      <div className="relative w-3 h-6 animate-candle">
        <div className="absolute inset-0 bg-gradient-to-t from-warm-gold via-yellow-300 to-yellow-100 rounded-full blur-[1px]" />
        <div className="absolute inset-1 bg-gradient-to-t from-orange-400 to-yellow-200 rounded-full" />
      </div>
      {/* Glow */}
      <div className="absolute -inset-4 bg-warm-gold/30 rounded-full blur-lg animate-glow-pulse" />
    </div>
  </div>
);

const Confetti = ({ delay, color }: { delay: number; color: string }) => (
  <div
    className="absolute w-2 h-3 rounded-sm animate-confetti"
    style={{
      left: `${Math.random() * 100}%`,
      backgroundColor: color,
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
    }}
  />
);

const BirthdayWishesSection = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number; delay: number; color: string }>>([]);

  useEffect(() => {
    const colors = [
      'hsl(350 45% 88%)', // blush pink
      'hsl(15 55% 72%)', // rose gold
      'hsl(40 75% 58%)', // warm gold
      'hsl(30 30% 78%)', // coffee beige
    ];

    const newConfetti = [];
    for (let i = 0; i < 30; i++) {
      newConfetti.push({
        id: i,
        delay: Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setConfetti(newConfetti);
  }, []);

  return (
    <section className="relative py-24 px-4 bg-cream-gradient overflow-hidden">
      {/* Confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {confetti.map((c) => (
          <Confetti key={c.id} delay={c.delay} color={c.color} />
        ))}
      </div>

      {/* Background swirl */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-gold/5 rounded-full blur-3xl animate-swirl" style={{ animationDuration: '40s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-mocha-deep mb-8">
          Make a <span className="text-gradient-gold">Wish</span>
        </h2>

        {/* Birthday cake with candles */}
        <div className="relative inline-block mb-12">
          {/* Cake */}
          <div className="relative">
            {/* Candles */}
            <div className="flex justify-center gap-4 mb-2">
              {[0, 0.1, 0.2, 0.3, 0.4].map((delay, i) => (
                <Candle key={i} delay={delay} />
              ))}
            </div>
            
            {/* Cake layers */}
            <div className="w-64 h-8 bg-gradient-to-r from-blush-pink via-rose-gold to-blush-pink rounded-t-lg" />
            <div className="w-72 h-12 bg-gradient-to-r from-rose-gold via-warm-gold to-rose-gold -mt-1" />
            <div className="w-80 h-8 bg-gradient-to-r from-coffee-beige via-mocha-soft to-coffee-beige rounded-b-lg -mt-1" />
            
            {/* Cake decorations */}
            <div className="absolute top-8 left-8 w-3 h-3 bg-warm-gold rounded-full animate-sparkle" />
            <div className="absolute top-12 right-10 w-2 h-2 bg-blush-pink rounded-full animate-sparkle delay-300" />
            <div className="absolute bottom-4 left-1/2 w-2 h-2 bg-rose-gold rounded-full animate-sparkle delay-500" />
          </div>
        </div>

        <p className="font-handwritten text-3xl md:text-4xl text-primary mb-8 animate-float">
          Make a wish, AYU ✨🎂
        </p>

        <div className="font-body text-lg text-muted-foreground max-w-lg mx-auto">
          <p>Close your eyes, take a deep breath, and make your most heartfelt wish.</p>
          <p className="mt-4 font-handwritten text-2xl text-rose-gold">
            May all your dreams come true! 🌟
          </p>
        </div>

        {/* Floating balloons */}
        <div className="absolute top-20 left-10 w-12 h-16 bg-blush-pink rounded-full animate-float opacity-60" style={{ animationDuration: '4s' }}>
          <div className="absolute bottom-0 left-1/2 w-px h-20 bg-rose-gold/50" />
        </div>
        <div className="absolute top-32 right-16 w-10 h-14 bg-rose-gold rounded-full animate-float opacity-50" style={{ animationDuration: '5s', animationDelay: '1s' }}>
          <div className="absolute bottom-0 left-1/2 w-px h-16 bg-rose-gold/50" />
        </div>
        <div className="absolute bottom-40 left-20 w-8 h-12 bg-warm-gold rounded-full animate-float opacity-40" style={{ animationDuration: '6s', animationDelay: '0.5s' }}>
          <div className="absolute bottom-0 left-1/2 w-px h-12 bg-rose-gold/50" />
        </div>
      </div>
    </section>
  );
};

export default BirthdayWishesSection;
