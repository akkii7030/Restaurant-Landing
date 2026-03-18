import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
  "https://images.unsplash.com/photo-1567188040759-fb8a254b4fe8?w=600&q=80",
  "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
  "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
  "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80",
  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80",
  "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?w=600&q=80",
  "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80",
  "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80",
  "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80",
  "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
  "https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=600&q=80",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-secondary"></span>
              <span className="text-secondary uppercase tracking-[0.2em] text-sm font-bold">Moments</span>
              <span className="w-8 h-[1px] bg-secondary"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Our <span className="text-glow">Gallery</span></h2>
          </motion.div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
          {images.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-xl break-inside-avoid group cursor-pointer border border-secondary/10"
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-multiply" />
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
