import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Home = () => {

  return (
    <section id="home">
      <header>
        <div className="header__container">
            <div className="movie__title--header">
                <h1>America's best global <span className="purple">movie</span> retriever</h1>
                <h2>Can't find your favorite <span className="purple">movies</span>?</h2>
                <p>Well, come and search for <span className="purple">movies</span> with us!</p>
            </div>
            <div className="movie__title--search">
                <button className='movie__searchbar'>
               <input className="textbox" placeholder="Search movie here"></input>
               <FontAwesomeIcon icon="magnifying-glass" />
            </button>
            </div>
        </div>
      </header>
    </section>
  );
};

export default Home;
