import { motion } from 'motion/react';
import client1Image from '../assets/images/client-1.jpg';
import client2Image from '../assets/images/client-2.jpg';
import ImagePlaceholder from './ImagePlaceholder';

export default function Gallery() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 w-full overflow-hidden bg-base text-contrast">
      <div className="max-w-[85rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">

        {/* Image 1 - Left Offset */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.6, ease: [0.2, 0.0, 0.2, 1] }}
          className="lg:col-span-6 overflow-hidden md:px-8 lg:px-0"
        >
          <div className="relative overflow-hidden aspect-[3/4] md:aspect-[4/5]">
             <img 
              src={client1Image} 
              alt="Happy Client" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale opacity-90"
            />
          </div>
          <p className="mt-8 text-[12px] md:text-[14px] font-serif font-medium tracking-wide text-contrast capitalize">A Happy Client</p>
          <p className="mt-2 text-[9px] md:text-[10px] font-sans tracking-[0.3em] text-muted uppercase">Signature Transformation</p>
        </motion.div>

        {/* Text block & Image 2 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.6, ease: [0.2, 0.0, 0.2, 1], delay: 0.2 }}
          className="lg:col-span-6 flex flex-col justify-center lg:mt-48"
        >
           <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-contrast mb-12 tracking-tight text-pretty uppercase">The Signature Manifesto.</h3>
           <p className="text-contrast font-sans font-medium leading-[1.8] mb-10 text-[11px] md:text-[12px] uppercase tracking-[0.1em] max-w-lg">
            A great haircut is not just a style. It is a sculpture. Whether long, short, or medium, its purpose is to frame your features with intention and never to mask them.
           </p>
           <p className="text-contrast font-sans font-medium leading-[1.8] mb-24 text-[11px] md:text-[12px] uppercase tracking-[0.1em] max-w-lg">
            True glamour is not about chasing the latest trend. It is about timeless elegance — an elegance that reveals who you are rather than disguises you.
           </p>

          <div className="w-full xl:w-5/6 relative overflow-hidden aspect-square md:aspect-[4/3]">
            <img 
              src={client2Image} 
              alt="Happy Client" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale opacity-90"
            />
          </div>
          <p className="mt-8 text-[12px] md:text-[14px] font-serif font-medium tracking-wide text-contrast capitalize">A Happy Client</p>
          <p className="mt-2 text-[9px] md:text-[10px] font-sans tracking-[0.3em] text-muted uppercase">Signature Elegance</p>
        </motion.div>

      </div>
    </section>
  );
}
