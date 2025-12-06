import { Heart, Star, Sparkles, Sun } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: "Your Beautiful Soul",
    description: "You have the kindest heart I've ever known. Your compassion lights up everyone around you."
  },
  {
    icon: Star,
    title: "Your Radiant Smile",
    description: "When you smile, the whole world stops for a moment. It's the most beautiful sight I've ever seen."
  },
  {
    icon: Sparkles,
    title: "Your Magic Touch",
    description: "Everything you do has a special magic to it. You make ordinary moments extraordinary."
  },
  {
    icon: Sun,
    title: "Your Warm Presence",
    description: "Being with you feels like sunshine on a cold day. You bring warmth wherever you go."
  }
];

const WhySpecialSection = () => {
  return (
    <section className="relative py-24 px-4 bg-cream-gradient overflow-hidden">
      {/* Background swirls */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blush-pink/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-mocha-deep mb-4">
            Why You're So <span className="text-gradient-gold">Special</span>
          </h2>
          <p className="font-handwritten text-2xl text-primary">
            A million reasons, here are just a few... 💝
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-rose-gold/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-gold/0 via-warm-gold/0 to-blush-pink/0 group-hover:from-rose-gold/10 group-hover:via-warm-gold/5 group-hover:to-blush-pink/10 transition-all duration-500" />
              
              {/* Swirl decoration on hover */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-gold/0 rounded-full blur-xl group-hover:bg-rose-gold/20 transition-all duration-700" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-gold to-warm-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                  <reason.icon className="w-8 h-8 text-card" />
                </div>
                
                <h3 className="font-display text-2xl font-semibold text-mocha-deep mb-3">
                  {reason.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySpecialSection;
