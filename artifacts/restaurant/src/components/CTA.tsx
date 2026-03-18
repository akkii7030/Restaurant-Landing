import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-primary">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
            Enjoy Delicious Indian Food <br/>With Your Family
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 uppercase tracking-widest font-bold">
            Open 7 days a week | 10:00 AM - 1:00 AM
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8">
              Reserve a Table
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Order Online
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
