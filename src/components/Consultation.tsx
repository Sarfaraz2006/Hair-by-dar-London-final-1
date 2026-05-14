import { motion } from 'motion/react';

interface ConsultationProps {
  onBookAppointment: () => void;
}

export default function Consultation({ onBookAppointment }: ConsultationProps) {

  return (
    <>
      <section className="py-48 lg:py-72 px-6 bg-base text-contrast flex flex-col items-center text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.6, ease: [0.2, 0.0, 0.2, 1] }}
          className="relative z-10 w-full max-w-3xl"
        >
          <p className="text-[10px] md:text-[11px] font-sans font-bold tracking-[0.4em] text-contrast uppercase mb-12">The Exclusive Experience</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-20 tracking-normal leading-[1.2] uppercase">
            Reserve your <br className="md:hidden" />Private appointment.
          </h2>

          <div className="pt-8">
            <button 
              onClick={onBookAppointment}
              className="group relative inline-flex items-center justify-center overflow-hidden bg-contrast px-14 py-6 font-sans font-bold text-[10px] tracking-[0.3em] uppercase transition-all duration-300 hover:bg-contrast/90 text-base"
            >
              <span>Request a Private Consultation</span>
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
