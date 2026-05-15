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
           <p className="text-[9px] md:text-[10px] font-sans font-medium tracking-[0.4em] text-accent uppercase mb-12">Personal Artistry</p>
           <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif text-base leading-[1.2] tracking-tight uppercase">
             Face Architecture. <br className="hidden md:block" /> Movement. <br className="hidden md:block" /> Presence.
           </h2>
           <div className="h-px w-full bg-base/20 my-12 max-w-sm"></div>
           <p className="text-base/80 font-sans font-medium leading-[1.8] text-[11px] md:text-[12px] uppercase tracking-[0.1em] max-w-md">
             True artistry is not an imposition of style, but the revelation of identity. Every cut and movement is mathematically designed to amplify your natural presence and elevate your aura.
           </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.8, ease: [0.2, 0.0, 0.2, 1] }}
          className="w-full lg:w-7/12 order-1 lg:order-2 overflow-hidden aspect-[2/3] md:aspect-auto lg:aspect-[2/3] relative flex items-center justify-center"
        >
          <img 
            src="/client-4.png" 
            alt="Personal Artistry"
            className="w-full h-auto object-contain grayscale opacity-90"
          />
        </motion.div>

      </div>
    </section>
  );
}
