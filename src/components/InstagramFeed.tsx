


import { motion } from 'motion/react';
import { Instagram, ArrowRight } from 'lucide-react';

export default function InstagramFeed() {
  return (
    <section className="py-32 md:py-48 px-6 lg:px-16 w-full bg-base overflow-hidden">
      <div className="max-w-[100rem] mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-20 md:mb-32 gap-12">
          <div className="max-w-2xl">
            <p className="text-[9px] md:text-[10px] font-sans font-medium tracking-[0.4em] text-muted uppercase mb-8">The Journal</p>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif text-contrast leading-[1.1] tracking-tight uppercase">
              Follow The<br className="hidden md:block" /> Vision
            </h2>
          </div>
          <a href="https://www.instagram.com/hairbydarlondon" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-[10px] md:text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-contrast hover:text-muted transition-colors duration-300 pb-2 border-b border-contrast/20 hover:border-contrast">
            <Instagram className="w-4 h-4" strokeWidth={1.5} />
            <span>@hairbydarlondon</span>
          </a>
        </div>

        {/* Premium Mobile-First Editorial Layout */}
        <div className="relative w-full flex flex-col md:flex-row md:items-center gap-12 md:gap-8 lg:gap-16">
          
          {/* Main Large Image */}
          <motion.a
            href="https://www.instagram.com/hairbydarlondon" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.2, 0.0, 0.2, 1] }}
            className="group relative w-full md:w-[45%] lg:w-[40%] aspect-[9/16] overflow-hidden block rounded-sm"
          >
             <iframe src="https://www.instagram.com/p/DVR2AfCjAZB/embed" className="w-full h-full absolute inset-0 rounded-sm" frameBorder="0" scrolling="no" allowTransparency={true}></iframe>
             <div className="absolute inset-0 bg-contrast/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
             <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-4 group-hover:translate-y-0">
               <Instagram className="w-6 h-6 text-base" strokeWidth={1.5} />
             </div>
          </motion.a>

          {/* Right Side Curated Content */}
          <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col justify-center">
             
             {/* Quote / Editorial Text breaks up the gallery feel */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, delay: 0.2 }}
               className="mb-12 md:mb-16 lg:mb-24 lg:pl-12 max-w-xl"
             >
                <div className="w-8 h-px bg-contrast/30 mb-8"></div>
                <p className="text-sm md:text-base font-serif leading-relaxed text-contrast/80 italic">
                  "It is about the deep connection between the Vision and the Soul. The hair is the movement that brings her spirit to life. This is a feeling that goes beyond the scissors."
                </p>
                <p className="mt-6 text-[9px] font-sans tracking-[0.3em] uppercase text-muted">— DAR London</p>
             </motion.div>

             {/* Smaller offset images */}
             <div className="flex gap-4 sm:gap-8 md:gap-6 lg:gap-12 lg:pl-24 justify-end md:justify-start items-end">
               
               <motion.a
                 href="https://www.instagram.com/p/DVR2AfCjAZB/" target="_blank" rel="noopener noreferrer"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.2, delay: 0.4 }}
                 className="group relative w-1/2 md:w-5/12 aspect-square overflow-hidden block rounded-sm"
               >
                 <iframe src="https://www.instagram.com/p/DVR2AfCjAZB/embed" className="w-full h-full absolute inset-0 rounded-sm" frameBorder="0" scrolling="no" allowTransparency={true}></iframe>
                 <div className="absolute inset-0 bg-contrast/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               </motion.a>

               <motion.a
                 href="https://www.instagram.com/reel/DXt1ob9jAXv/" target="_blank" rel="noopener noreferrer"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.2, delay: 0.6 }}
                 className="group relative w-5/12 md:w-1/3 aspect-[9/16] overflow-hidden block lg:mb-16 rounded-sm"
               >
                 <iframe src="https://www.instagram.com/reel/DXt1ob9jAXv/embed" className="w-full h-full absolute inset-0 rounded-sm" frameBorder="0" scrolling="no" allowTransparency={true}></iframe>
                 <div className="absolute inset-0 bg-contrast/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               </motion.a>
               
             </div>

             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, delay: 0.8 }}
               className="mt-16 lg:mt-20 lg:pl-12 flex justify-start lg:justify-start"
             >
                <a href="https://www.instagram.com/hairbydarlondon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[9px] md:text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-contrast hover:text-muted transition-colors relative group">
                  <span>Explore The Archive</span>
                  <div className="w-8 h-[1px] bg-contrast group-hover:w-12 transition-all duration-300"></div>
                  <ArrowRight className="w-4 h-4" />
                </a>
             </motion.div>
             
          </div>

        </div>
      </div>
    </section>
  );
}
