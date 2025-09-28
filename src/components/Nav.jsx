import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Nav = () => {
  return (
    <nav>
        <div className="nav__container">
            <div className="website__btn--list">
            <button className='website__btn'>
                Login
            </button>
            <button className='website__btn'>
                Sign-Up
            </button>
            <button className='movie__searchbar'>
                <FontAwesomeIcon icon="magnifying-glass" />
            </button>
            </div>
            <ul className="nav__links">
                <li className="nav__list">
                    <a href='' className="nav__link">Home</a>
                </li>
                <li className="nav__list">
                    <a href='/Searching/:id' className="nav__link">Movies</a>
                </li>
                <li className="nav__list">
                    <a href='' className="nav__link">My Favorites</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav;
