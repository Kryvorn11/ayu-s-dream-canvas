import ayuPhoto from '@/assets/ayu-photo.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden mocha-swirl-bg latte-texture">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blush-pink/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-gold/20 rounded-full blur-3xl animate-float-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-warm-gold/10 rounded-full blur-3xl animate-swirl" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
        {/* Heart-shaped photo frame */}
        <div className="relative mb-12 animate-fade-up">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-gold via-warm-gold to-blush-pink opacity-60 blur-2xl animate-glow-pulse" />
            
            {/* Heart shape container */}
            <div className="absolute inset-4 overflow-hidden rounded-full border-4 border-rose-gold/50 glow-rose">
              <img
                src={ayuPhoto}
                alt="AYU"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative sparkles around the frame */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-warm-gold rounded-full animate-sparkle" />
            <div className="absolute top-1/4 -right-2 w-3 h-3 bg-rose-gold rounded-full animate-sparkle delay-300" />
            <div className="absolute bottom-1/4 -left-2 w-3 h-3 bg-blush-pink rounded-full animate-sparkle delay-500" />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-rose-gold rounded-full animate-sparkle delay-700" />
          </div>
        </div>

        {/* Main heading */}
        <div className="animate-fade-up delay-200">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold mb-4 leading-tight">
            <span className="text-gradient-gold">Happy Birthday</span>
          </h1>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold italic text-mocha-deep mb-6">
            AYU
          </h2>
        </div>

        <p className="font-handwritten text-2xl md:text-3xl lg:text-4xl text-primary mb-8 animate-fade-up delay-300">
          You Are My Most Special Girl in the World ✨
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-rose-gold/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-rose-gold rounded-full animate-fade-up" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
