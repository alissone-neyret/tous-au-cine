import React from 'react';
import NavbarMain from '../NavbarMain';
import CarouselHomepage from '../CarouselHomepage';
import Footer from '../Footer';
import CardRandom from '../CardRandom';

const HomePage = () => (
  <div className="HomePage">
    <header>
      <NavbarMain />
    </header>
    <section>
      <CarouselHomepage />
    </section>
    <section>
      <CardRandom />
    </section>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default HomePage;