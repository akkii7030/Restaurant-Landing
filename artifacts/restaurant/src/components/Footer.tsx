import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t-4 border-secondary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-secondary/20 pb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
               <img 
                src={`${import.meta.env.BASE_URL}images/restaurant-logo.png`} 
                alt="Logo" 
                className="w-12 h-12 object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <h3 className="font-serif font-bold text-2xl text-glow">Shree Laxmi Vilas</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Experience the authentic taste of Indian cuisine in a warm, family-friendly environment. Serving the finest meals in Malad East.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Menu', 'Gallery', 'Reviews', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().split(' ')[0]}`} className="text-muted-foreground text-sm hover:text-secondary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-secondary"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif font-bold text-lg text-foreground mb-6">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between border-b border-secondary/10 pb-2">
                <span className="text-muted-foreground text-sm">Monday - Friday</span>
                <span className="text-foreground text-sm font-medium">10:00 AM - 1:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-secondary/10 pb-2">
                <span className="text-muted-foreground text-sm">Saturday</span>
                <span className="text-foreground text-sm font-medium">10:00 AM - 1:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-secondary/10 pb-2">
                <span className="text-muted-foreground text-sm">Sunday</span>
                <span className="text-foreground text-sm font-medium">10:00 AM - 1:00 AM</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg text-foreground mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground text-sm leading-relaxed">
                Hera Niwas, Daftary Road,<br/>
                Malkani Estate, Pushpa Park,<br/>
                Malad East, Mumbai 400097
              </li>
              <li className="text-secondary font-bold text-lg">
                <a href="tel:+919819269169">+91 98192 69169</a>
              </li>
              <li className="text-muted-foreground text-sm">
                info@shreelaxmivilas.com
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shree Laxmi Vilas Family Restaurant. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
