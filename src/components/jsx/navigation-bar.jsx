import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/navigation-bar.css';
import Navright from '../jsx/nav_icon_global';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [showShopSubMenu, setShowShopSubmenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false);
        setShowShopSubmenu(false);
      });
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <header className="navbar-wrapper">
      <div className="announcement-bar">
        Shop at special prices&nbsp;|<Link to="/shop">Discover Now</Link>
      </div>

      <div className="navbar">
        <div className="navbar-container">
          {!menuOpen && (
            <div className="nav-mobile-header">
              <div
                role="button"
                tabIndex={0}
                className="hamburger"
                onClick={toggleMenu}
                onKeyDown={(e) => { if (e.key === 'Enter') toggleMenu(); }}
                aria-label="Toggle menu"
              >
                ☰
              </div>
              <div className="nav-left">
                <Link to="/">
                  <img src="/assets/logo/aoho_logo_main.svg" alt="logo" className="logo" />
                </Link>
              </div>
              <div className="mobile-navright">

              </div>
            </div>
          )}

          {menuOpen && (
            <div className={`mobile-menu-wrapper ${menuOpen ? 'open' : ''} ${closing ? 'closing' : ''}`}>
              <div className='close-button' onClick={toggleMenu}>✖</div>

              <div className={`mobile-menu main-menu ${showShopSubMenu ? 'slide-left' : ''}`}>
                <div className='mobile-link' onClick={() => { setMenuOpen(false); navigate('/'); }}>Home</div>
                <div className='submenu-toggle' onClick={() => setShowShopSubmenu(true)}>
                  Shop <span className='mobile-shop-arrow'>→</span>
                </div>
                <div className='mobile-link' onClick={() => { setMenuOpen(false); navigate('/lookbook') }}>LookBook</div>
                <div className='mobile-link' onClick={() => { setMenuOpen(false); navigate('/about'); }}>About</div>
                <div className='mobile-link' onClick={() => { setMenuOpen(false); navigate('/contact'); }}>Contact</div>
              </div>

              <div className={`mobile-menu shop-submenu ${showShopSubMenu ? 'slide-in' : ''}`}>
                <div className='submenu-toggle' onClick={() => setShowShopSubmenu(false)}>← Back</div>
                <Link className='mobile-link' to="/shop/men's clothing" onClick={() => { setMenuOpen(false); setShowShopSubmenu(false); }}>Men's</Link>
                <Link className='mobile-link' to="/shop/electronics" onClick={() => { setMenuOpen(false); setShowShopSubmenu(false); }}>Electronic</Link>
                <Link className='mobile-link' to="/shop/women's clothing" onClick={() => { setMenuOpen(false); setShowShopSubmenu(false); }}>Women's</Link>
                <Link className='mobile-link' to='/shop/kantha' onClick={() => { setMenuOpen(false); setShowShopSubmenu(false); }}>Kantha</Link>
                <Link className='mobile-link' to='/shop/bagru' onClick={() => { setMenuOpen(false); setShowShopSubmenu(false); }}>Bagru</Link>
                <Link className='mobile-link' to='/shop/ikkat' onClick={() => { setMenuOpen(false); setShowShopSubmenu(false); }}>Ikkat</Link>
              </div>
            </div>
          )}

          <div className='nav-center'>
            <div className="nav-item"><Link to="/">Home</Link></div>
            <div className="nav-item nav-item-with-arrow">
              <span className="nav-link">
                SHOP <span className="dropdown-arrow">▼</span>
              </span>
              <div className="dropdown-menu">
                <Link to="/shop/men's clothing">Men</Link>
                <Link to="/shop/electronics">Electronic</Link>
                <Link to="/shop/women's clothing">Women</Link>
                <Link to="/shop/kantha">Kantha</Link>
                <Link to="/shop/bagru">Bagru</Link>
                <Link to="/shop/ikkat">Ikkat</Link>
              </div>
            </div>
            <div className="nav-item"><Link to="/about">About Us</Link></div>
            <div className="nav-item"><Link to="/lookbook">Look Book</Link></div>
            <div className="nav-item"><Link to="/contact">Contact</Link></div>
          </div>

          <div className="nav-right">
            <Navright />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
