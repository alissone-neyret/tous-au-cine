import React from 'react';
import Footer from '../Footer';
import NavbarMain from '../NavbarMain';
import CardMovie from '../CardMovie';

const AllMovies = () => (
  <div className="AllMovies">
    <header>
      <NavbarMain />
    </header>
    <section>
      <CardMovie />
    </section>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default AllMovies;