/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuHighlight from './components/MenuHighlight';
import Deals from './components/Deals';
import AppPromo from './components/AppPromo';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <MenuHighlight />
      <Deals />
      <AppPromo />
      <Footer />
    </main>
  );
}

