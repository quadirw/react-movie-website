import React from 'react'

const Searching = () => {
  return (
      <div className="container">
        <div className="row">
            <div className="search__info">
                <h2>Search Results:</h2>
                <span className="searchName"></span>
                <div className="price__filter">
                    <select id="filter" >
                        <option disabled value="DEFAULT">Sort by year</option>
                        <option value="NEWEST">Newest to Oldest</option>
                        <option value="OLDEST">Oldest to Newest</option>
                    </select>
                </div>
            </div>
            <section className="search">
                <div className="movies"></div>
            </section>
        </div>
    </div>
  )
}

export default Searching;
