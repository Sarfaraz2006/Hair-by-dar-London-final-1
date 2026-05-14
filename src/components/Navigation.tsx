import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';

interface NavigationProps {
  onBookAppointment: () => void;
}

export default function Navigation({ onBookAppointment }: NavigationProps) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: [0.2, 0.0, 0.2, 1], delay: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 transition-all duration-500 ${
        isScrolled ? "py-4 bg-base text-contrast border-b border-contrast/10" : "py-8 text-base mix-blend-difference bg-transparent"
      }`}
    >
      <div className="flex items-center gap-4 cursor-pointer group">
        <div className="flex flex-col gap-[5px] w-6 transition-all duration-300">
          <div className="h-[1.5px] w-full bg-current"></div>
          <div className="h-[1.5px] w-full bg-current group-hover:w-2/3 transition-all"></div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-current transition-opacity group-hover:opacity-70 hidden md:block">Menu</div>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="text-4xl md:text-5xl font-serif tracking-[0.2em] uppercase text-current cursor-pointer">DAR</div>
        <div className="text-[8px] uppercase tracking-[0.4em] font-sans font-medium text-current opacity-80 mt-1 ml-2">London</div>
      </div>

      <div 
        onClick={onBookAppointment}
        className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-current hover:opacity-70 transition-opacity cursor-pointer hidden md:block"
      >
        Book Appointment
      </div>
      <div className="md:hidden">
        <div 
          onClick={onBookAppointment}
          className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-current hover:opacity-70 transition-opacity cursor-pointer"
        >
          Book
        </div>
      </div>
    </motion.nav>
  );
}
