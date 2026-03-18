import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-card rounded-3xl overflow-hidden border border-secondary/20 shadow-2xl">
          
          {/* Info Side */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-foreground mb-8">Get In <span className="text-glow">Touch</span></h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Hera Niwas, Daftary Road, Malkani Estate,<br/>
                      Pushpa Park, Malad East,<br/>
                      Mumbai, Maharashtra 400097
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Reservations & Delivery</h4>
                    <a href="tel:+919819269169" className="text-muted-foreground text-sm hover:text-secondary transition-colors">
                      +91 98192 69169
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Opening Hours</h4>
                    <p className="text-muted-foreground text-sm">
                      Monday - Sunday<br/>
                      10:00 AM - 1:00 AM
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" variant="secondary" onClick={() => window.open('tel:+919819269169')}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Map Side */}
          <div className="h-[400px] lg:h-auto min-h-[400px] bg-muted relative grayscale-[50%] contrast-[1.2] hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5!2d72.8697!3d19.1863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDExJzEwLjciTiA3MsKwNTInMTAuOSJF!5e0!3m2!1sen!2sin!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              className="absolute inset-0"
              title="Restaurant Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
