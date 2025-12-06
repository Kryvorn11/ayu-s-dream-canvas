const LoveLetterSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Latte texture background */}
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-beige/30 via-background to-blush-pink/20 latte-texture" />
      
      {/* Animated swirls */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-40 h-40 border border-rose-gold/20 rounded-full animate-swirl" style={{ animationDuration: '25s' }} />
          <div className="absolute bottom-20 right-20 w-60 h-60 border border-warm-gold/15 rounded-full animate-swirl" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-blush-pink/20 rounded-full animate-swirl" style={{ animationDuration: '20s' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-mocha-deep mb-4">
            A Letter From <span className="text-gradient-gold">My Heart</span>
          </h2>
        </div>

        {/* Letter card */}
        <div className="relative">
          {/* Golden glow behind */}
          <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/30 via-rose-gold/20 to-blush-pink/30 blur-3xl rounded-3xl" />
          
          <div className="relative bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-rose-gold/30 shadow-xl">
            {/* Decorative corner flourishes */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-rose-gold/40 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-rose-gold/40 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-rose-gold/40 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-rose-gold/40 rounded-br-lg" />

            <div className="font-handwritten text-xl md:text-2xl text-mocha-deep leading-relaxed space-y-6">
              <p className="text-rose-gold text-3xl md:text-4xl mb-8">My Dearest Ayu,</p>
              
              <p>
                On this special day, I want you to know just how much you mean to me. 
                Every moment with you is like a beautiful dream that I never want to wake up from.
              </p>
              
              <p>
                Your smile is my sunshine, your laughter is my favorite melody, 
                and your presence makes every ordinary day feel extraordinary.
              </p>
              
              <p>
                You deserve all the happiness in the world, and I hope this birthday 
                brings you as much joy as you bring to everyone around you.
              </p>
              
              <p>
                Thank you for being you — perfectly, wonderfully, amazingly YOU.
              </p>

              <p className="text-right mt-8 text-rose-gold text-2xl md:text-3xl">
                With all my love,<br />
                Forever Yours 💝
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
