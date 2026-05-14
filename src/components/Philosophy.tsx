import { motion } from 'motion/react';

export default function Philosophy() {
  return (
    <section className="py-40 md:py-64 px-6 md:px-16 lg:px-32 max-w-[120rem] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between text-left bg-base gap-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.6, ease: [0.2, 0.0, 0.2, 1] }}
        className="w-full md:w-1/3"
      >
        <h2 className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-medium text-contrast mb-8 font-sans">The Artistry</h2>
        <div className="w-12 h-px bg-contrast/30"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.6, ease: [0.2, 0.0, 0.2, 1], delay: 0.2 }}
        className="w-full md:w-2/3 max-w-3xl"
      >
        <p className="text-3xl md:text-5xl lg:text-5xl font-serif text-contrast leading-[1.3] lg:leading-[1.2] tracking-normal uppercase">
           Artistry is not about imposing a style. <br className="hidden md:block"/>
           It is about understanding the architecture of the face, and revealing the structure within.
        </p>
      </motion.div>
    </section>
  );
}
