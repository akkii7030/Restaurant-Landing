import { motion } from "framer-motion";
import { Utensils, ShoppingBag, Bike, Users, Clock } from "lucide-react";

const services = [
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Family Dining",
    desc: "A warm and welcoming atmosphere perfect for family gatherings"
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Takeaway",
    desc: "Order your favorite dishes to enjoy at home"
  },
  {
    icon: <Bike className="w-8 h-8" />,
    title: "Delivery",
    desc: "No-contact home delivery available in surrounding areas"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Group Dining",
    desc: "Perfect venue for corporate events and celebrations"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Late Night Dining",
    desc: "Craving late? We are open till 1:00 AM every day"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-card border-y border-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our <span className="text-glow">Services</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We provide a comprehensive dining experience tailored to your needs.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background rounded-2xl p-6 text-center border border-secondary/10 hover:border-secondary hover:-translate-y-2 transition-all duration-300 shadow-lg group"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 text-secondary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
