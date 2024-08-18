import React, { useEffect, useState, useRef } from 'react'
import Button from './Button'
// icons import
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";


const Header: React.FC = () => {

  const [scrolled, setScrolled] = useState(false);

  const letscroll = () => {
    const goscroll = window.scrollY;
    if (goscroll > 50) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', letscroll);
    return () => {
      window.removeEventListener('scroll', letscroll);
    };
  }, [])


  const nemo = useRef<HTMLDivElement>(null);

  const opennavbar = () => {
    if (nemo.current) {
      nemo.current.classList.add("active")
    }
  }
  const closenavbar = () => {
    if (nemo.current) {
      nemo.current.classList.remove("active")
    }
  }


  return (
    <div className={scrolled ? 'header scrolled' : 'header'}>
      <div className="mobile-menu" ref={nemo}>
        <IoCloseSharp onClick={closenavbar} className='text-white closebtn' />
        <nav className='mobile-links'>
          <Link className=' mob-link my-1' to="/">Home</Link>
          <Link className=' mob-link my-1' to="/">About Us</Link>

          <div className="dropdown">
            <a className="mob-link my-1" href="#" data-bs-toggle="dropdown" aria-expanded="false"> Services</a>

            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/services">Services</Link></li>
              <li><Link className="dropdown-item border-top" to="/services-details">Services Details</Link></li>
            </ul>
          </div>

          <div className="dropdown">
            <a className="mob-link my-1" href="#" data-bs-toggle="dropdown" aria-expanded="false"> Other Page</a>

            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/pricing">Pricing</Link></li>
              <li><Link className="dropdown-item border-top" to="/team">Team</Link></li>
              <li><Link className="dropdown-item border-top" to="/shop">Shop</Link></li>
              <li><Link className="dropdown-item border-top" to="/shop-details">Shop Details</Link></li>
            </ul>
          </div>
          <Link className='mob-link my-1' to="/contact">Classes</Link>
          <Link className='mob-link my-1' to="/blog">Blog</Link>
          <div className="mob-btn">
          <Link to={'/contact-us'}><Button klass='header-mob-btn' btnname='Join Now' /></Link>
          </div>
          
        </nav>

      </div>
      <nav className="header-nav navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/"><img className='header-img' src="/header/logo.png" alt="" /></Link>
          <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars className='open-icon' onClick={opennavbar} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="header-ul navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <div className="dropdown">
                  <Link className="nav-link" to="/"> Home</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="#">About Us</Link>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <a className=" nav-link" href="#" data-bs-toggle="dropdown" aria-expanded="false"> Services</a>

                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/services">Services</Link></li>
                    <li><Link className="dropdown-item border-top" to="/services-details">Services Details</Link></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <a className=" nav-link" href="#" data-bs-toggle="dropdown" aria-expanded="false"> Other Page</a>

                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/pricing">Pricing</Link></li>
                    <li><Link className="dropdown-item border-top" to="/team">Team</Link></li>
                    <li><Link className="dropdown-item border-top" to="/shop">Shop</Link></li>
                    <li><Link className="dropdown-item border-top" to="/shop-details">Shop Details</Link></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Classes</a>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <a className=" nav-link" href="/"> Blog</a>
                </div>
              </li>
            </ul>
            <form className="d-flex header-form" role="search">
              <FaSearch className='search' />
              <input className="form-control me-2 enter-name" type="text" placeholder='Enter name' aria-label="text" />
              <Link to={'/contact-us'}><Button klass='header-btn' btnname='Join Now' /></Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header