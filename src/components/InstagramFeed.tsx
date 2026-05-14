import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function InstagramFeed() {
  return (
    <section className="py-32 md:py-48 px-6 lg:px-16 w-full bg-base">
      <div className="max-w-[85rem] mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <p className="text-[9px] md:text-[10px] font-sans font-medium tracking-[0.4em] text-muted uppercase mb-6">The Journal</p>
          <h2 className="text-3xl md:text-4xl font-serif text-contrast leading-[1.1] tracking-tight mb-8 uppercase">
            Follow the Vision
          </h2>
          <a href="https://www.instagram.com/hairbydarlondon" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-[10px] md:text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-contrast hover:text-muted transition-colors duration-300">
            <Instagram className="w-4 h-4" strokeWidth={1.5} />
            <span>@hairbydarlondon</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
          ].map((item, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/hairbydarlondon"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: [0.2, 0.0, 0.2, 1] }}
              className="group relative aspect-[4/5] overflow-hidden bg-surface block cursor-pointer border border-border"
            >
              <img src={item} alt="Instagram post" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-contrast/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
                <Instagram className="w-8 h-8 text-base opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100" strokeWidth={1.5} />
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <motion.a
            href="https://www.instagram.com/hairbydarlondon"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="group relative inline-flex items-center justify-center overflow-hidden bg-contrast text-base px-12 py-5 font-sans font-bold text-[9px] md:text-[10px] tracking-[0.3em] uppercase transition-all duration-300 hover:bg-contrast/90"
          >
            <span>View Instagram</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
