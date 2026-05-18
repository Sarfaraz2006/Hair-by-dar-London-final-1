
import { motion } from 'motion/react';

import { ArrowRight } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

interface HeroProps {
  onBookAppointment: () => void;
}

export default function Hero({ onBookAppointment }: HeroProps) {

  return (
    <>
      <section className="relative w-full bg-base text-contrast pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="w-full max-w-[120rem] mx-auto px-4 md:px-8 flex flex-col">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.2, 0.0, 0.2, 1], delay: 0.8 }}
            className="w-full relative aspect-[4/5] md:aspect-[16/7] lg:aspect-[21/9] bg-surface overflow-hidden mb-16 md:mb-24"
          >
            <img 
              src="https://i.postimg.cc/JzjPkM6w/file-000000002f6871faa89d6b478e9296aa.png" 
              alt="Dar - Personal World"
              className="w-full h-full object-cover object-[50%_20%]"
            />
          </motion.div>

          <div className="w-full flex flex-col xl:flex-row justify-between items-start xl:items-end gap-12 xl:gap-8 px-4 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.2, 0.0, 0.2, 1], delay: 1 }}
              className="flex flex-col w-full xl:w-3/5"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif tracking-tight leading-[1.05] text-contrast uppercase">
                A Signature<br />
                <span className="text-muted">in Transformation.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 1.2 }}
              className="flex flex-col items-start xl:items-end max-w-md xl:ml-auto mt-4 xl:mt-0"
            >
              <p className="text-[11px] md:text-[13px] font-sans font-medium leading-[1.8] text-contrast mb-8 text-left xl:text-right uppercase tracking-[0.05em]">
                It is never just a haircut. It is the moment you see yourself differently. An emotional shift that stays with you.
              </p>
              
              <button
                onClick={onBookAppointment}
                className="group relative inline-flex items-center justify-center w-fit px-0 py-2 border-b-2 border-contrast overflow-hidden text-[10px] md:text-[11px] font-sans tracking-[0.2em] font-bold uppercase text-contrast transition-all duration-500"
              >
                <span className="relative z-10 mr-4">Begin Your Experience</span>
                <ArrowRight className="w-3 h-3 relative z-10 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={2} />
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.2, 0.0, 0.2, 1], delay: 1.4 }}
          className="w-full max-w-[120rem] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-4 mt-24 md:mt-32 px-8 pt-16 border-t border-border"
        >
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-contrast mb-2">Expertise</span>
              <span className="text-2xl md:text-3xl font-serif text-muted">30+ Years</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-contrast mb-2">Impact</span>
              <span className="text-2xl md:text-3xl font-serif text-muted">1000+ Clients</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-contrast mb-2">Focus</span>
              <span className="text-2xl md:text-3xl font-serif text-muted">1 Vision</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-contrast mb-2">Location</span>
              <span className="text-2xl md:text-3xl font-serif text-muted">London, UK</span>
            </div>
        </motion.div>
      </section>
    </>
  );
}
