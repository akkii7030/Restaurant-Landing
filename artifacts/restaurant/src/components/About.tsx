import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `url(${import.meta.env.BASE_URL}images/pattern-mandala.png)`,
          backgroundSize: '400px'
        }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* about section premium interior dining */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-secondary/20 shadow-2xl shadow-black/50">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" 
                alt="Restaurant Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-[10px] border-background/50 rounded-2xl"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-card border border-secondary/30 p-6 rounded-xl shadow-xl shadow-black max-w-[200px] hidden md:block">
              <h4 className="text-secondary font-serif text-3xl font-bold mb-1">20+</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-secondary"></span>
              <span className="text-secondary uppercase tracking-[0.2em] text-sm font-bold">Our Story</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
              A Legacy of <span className="text-glow">Authentic</span> Indian Flavors
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Shree Laxmi Vilas Family Restaurant is a popular dining destination in Malad East, 
              known for its delicious Indian cuisine and welcoming family atmosphere. 
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Guests can enjoy freshly prepared meals, traditional flavors crafted from generations-old recipes, 
              and excellent service in a comfortable dining environment perfect for creating memories.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="text-2xl font-serif font-bold text-foreground mb-1">4.7 <span className="text-secondary text-lg">★</span></h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Google Rating</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="text-2xl font-serif font-bold text-foreground mb-1">1400+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Happy Reviews</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="text-2xl font-serif font-bold text-foreground mb-1">7 Days</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Open Weekly</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="text-2xl font-serif font-bold text-foreground mb-1">10 AM</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">To 1:00 AM</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
