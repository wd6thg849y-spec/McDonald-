import { MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-24 pb-8 px-6 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="font-display font-bold text-3xl tracking-tighter text-white mb-6 block">
              CRAVE<span className="text-brand-red">.</span>
            </span>
            <p className="text-white/60 max-w-sm mb-8">
              Redefining fast food. Chef-crafted burgers, cinematic flavors, and lightning-fast delivery.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Full Menu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Locations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Crave Rewards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nutrition</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Crave Foods Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
             <MapPin className="w-4 h-4" />
             <span>Available in 50+ Cities Nationwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
