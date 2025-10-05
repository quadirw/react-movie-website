import React from "react";

const Searching = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="search__info">
          <input type="text" className="searchbox"/>
          <h3 className="search__title">Search Results:</h3>
          <span className="searchName" ></span>
          <div className="price__filter">
            <select id="filter" defaultValue=" DEFAULT" >
              <option disabled value="DEFAULT">
                Sort by year
              </option>
              <option value="NEWEST">Newest to Oldest</option>
              <option value="OLDEST">Oldest to Newest</option>
              <option value="RATING">Rating</option>
            </select>
          </div>
        </div>
        <section className="search">
          <div className="movies">
            {/* movies={currentMovies} key={movie.id} */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Searching;
