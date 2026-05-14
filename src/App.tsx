/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Gallery from './components/Gallery';
import Atmosphere from './components/Atmosphere';
import InstagramFeed from './components/InstagramFeed';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-base overflow-hidden">
      <Navigation onBookAppointment={() => setIsModalOpen(true)} />
      <Hero onBookAppointment={() => setIsModalOpen(true)} />
      <Philosophy />
      <Gallery />
      <Atmosphere />
      <InstagramFeed />
      <Consultation onBookAppointment={() => setIsModalOpen(true)} />
      <Footer />
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
