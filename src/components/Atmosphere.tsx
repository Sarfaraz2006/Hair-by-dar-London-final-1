import { motion } from 'motion/react';
import ImagePlaceholder from './ImagePlaceholder';

export default function Atmosphere() {
  return (
    <section className="py-32 md:py-48 px-6 lg:px-16 w-full bg-dark overflow-hidden">
      <div className="max-w-[85rem] mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">

        <motion.div
          initial={{ opacity: 0, x: -30, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.6, ease: [0.2, 0.0, 0.2, 1] }}
          className="w-full lg:w-5/12 order-2 lg:order-1 lg:pr-10"
        >
           <p className="text-[9px] md:text-[10px] font-sans font-medium tracking-[0.4em] text-accent uppercase mb-12">Emotional Confidence</p>
           <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif text-base leading-[1.2] tracking-tight uppercase">
             Femininity. <br className="hidden md:block" /> Glamour. <br className="hidden md:block" /> Confidence.
           </h2>
           <div className="h-px w-full bg-base/20 my-12 max-w-sm"></div>
           <p className="text-base/80 font-sans font-medium leading-[1.8] text-[11px] md:text-[12px] uppercase tracking-[0.1em] max-w-md">
             The true power of luxury is how it makes you feel. An intimate understanding of female identity, transforming not just how the world sees you, but how confidently you step into it.
           </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.8, ease: [0.2, 0.0, 0.2, 1] }}
          className="w-full lg:w-7/12 order-1 lg:order-2 overflow-hidden aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80" 
            alt="Glamorous Confidence" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale opacity-90"
          />
        </motion.div>

      </div>
    </section>
  );
}
