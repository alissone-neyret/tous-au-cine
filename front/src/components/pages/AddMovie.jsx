import React from 'react';
import Footer from '../Footer';
import NavbarMain from '../NavbarMain';
import CardAddMovie from '../CardAddMovie';

const AddMovie = () => (
  <div className="AllMovies">
    <header>
      <NavbarMain />
    </header>
    <section>
      <CardAddMovie />
    </section>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default AddMovie;