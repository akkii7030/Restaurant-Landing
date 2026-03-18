import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    text: "Amazing food! The dal makhani is absolutely delicious. Perfect family dining experience. Must visit place in Malad!",
    rating: 5,
    initials: "PS"
  },
  {
    name: "Rahul Mehta",
    text: "Best biryani in the area. The service is excellent and staff is very friendly. We come here every weekend with family.",
    rating: 5,
    initials: "RM"
  },
  {
    name: "Anjali Patel",
    text: "Wonderful restaurant with authentic taste. The tandoori chicken and naan are outstanding. Late night dining option is great!",
    rating: 5,
    initials: "AP"
  },
  {
    name: "Vikram Singh",
    text: "One of the best family restaurants in Mumbai. Food quality is consistently excellent. Highly recommend for group dining.",
    rating: 5,
    initials: "VS"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-primary relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3 text-center md:text-left text-primary-foreground"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Loved by our <span className="text-secondary">Guests</span></h2>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="text-5xl font-bold font-serif text-secondary">4.7</span>
              <div className="flex flex-col items-start">
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-sm opacity-80 mt-1 uppercase tracking-wider">Overall Rating</span>
              </div>
            </div>
            <p className="text-primary-foreground/80">Based on 1,400+ Google Reviews</p>
          </motion.div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background/10 backdrop-blur-md p-6 rounded-2xl border border-secondary/20 shadow-xl"
              >
                <Quote className="w-8 h-8 text-secondary/40 mb-4" />
                <p className="text-primary-foreground/90 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-lg shadow-inner">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-foreground">{review.name}</h4>
                    <div className="flex text-secondary mt-1">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
