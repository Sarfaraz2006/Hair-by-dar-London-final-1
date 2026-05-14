import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate backend submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form on close
      setTimeout(() => {
        onClose();
        setTimeout(() => {
          setIsSuccess(false);
          setFormState({ name: '', email: '', phone: '', service: '', date: '', message: '' });
        }, 500);
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-contrast/40 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.2, 0.0, 0.2, 1] }}
            className="relative w-full max-w-2xl bg-base overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 text-contrast/50 hover:text-contrast transition-colors duration-300"
            >
              <X className="w-6 h-6" strokeWidth={1} />
            </button>

            <div className="overflow-y-auto overflow-x-hidden p-8 md:p-14 hide-scrollbar">
              <div className="text-center mb-12">
                <p className="text-[9px] md:text-[10px] font-sans font-medium tracking-[0.4em] text-muted uppercase mb-4">Request</p>
                <h3 className="text-3xl md:text-5xl font-serif text-contrast leading-tight uppercase">
                  Private Consultation
                </h3>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <p className="text-xl font-serif text-contrast mb-4">Request Received</p>
                  <p className="text-sm font-sans font-normal text-contrast/70 leading-relaxed max-w-md">
                    Thank you. We will be in touch shortly to confirm your exclusive appointment details.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[9px] font-sans font-medium tracking-[0.2em] uppercase text-contrast/60 px-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-contrast/20 py-3 px-1 text-sm font-sans font-normal text-contrast focus:outline-none focus:border-contrast transition-colors duration-300 placeholder:text-contrast/30"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[9px] font-sans font-medium tracking-[0.2em] uppercase text-contrast/60 px-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-contrast/20 py-3 px-1 text-sm font-sans font-normal text-contrast focus:outline-none focus:border-contrast transition-colors duration-300 placeholder:text-contrast/30"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-[9px] font-sans font-medium tracking-[0.2em] uppercase text-contrast/60 px-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-contrast/20 py-3 px-1 text-sm font-sans font-normal text-contrast focus:outline-none focus:border-contrast transition-colors duration-300 placeholder:text-contrast/30"
                        placeholder="Optional"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-[9px] font-sans font-medium tracking-[0.2em] uppercase text-contrast/60 px-1">Preferred Date</label>
                      <input 
                        type="date" 
                        id="date"
                        name="date"
                        value={formState.date}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-contrast/20 py-3 px-1 text-sm font-sans font-normal text-contrast focus:outline-none focus:border-contrast transition-colors duration-300 placeholder:text-contrast/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-[9px] font-sans font-medium tracking-[0.2em] uppercase text-contrast/60 px-1">Service Type</label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-contrast/20 py-3 px-1 text-sm font-sans font-normal text-contrast/90 focus:outline-none focus:border-contrast transition-colors duration-300 appearance-none rounded-none"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="signature_cut">Signature Haircut</option>
                      <option value="color_transformation">Color Transformation</option>
                      <option value="bridal">Bridal & Editorial</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[9px] font-sans font-medium tracking-[0.2em] uppercase text-contrast/60 px-1">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={3}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-contrast/20 py-3 px-1 text-sm font-sans font-normal text-contrast focus:outline-none focus:border-contrast transition-colors duration-300 placeholder:text-contrast/30 resize-none"
                      placeholder="Please share any specific requests or hair history..."
                    ></textarea>
                  </div>

                  <div className="pt-8 flex justify-center">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center overflow-hidden bg-contrast text-base px-14 py-5 w-full md:w-auto font-sans font-bold text-[10px] tracking-[0.3em] uppercase transition-all duration-300 hover:bg-contrast/90 disabled:opacity-50"
                    >
                      <span>
                        {isSubmitting ? 'Submitting...' : 'Submit Request'}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
