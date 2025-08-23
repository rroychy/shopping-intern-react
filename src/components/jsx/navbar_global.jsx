import React, { useState } from 'react';
// import {Helmet} from 'react-helmet';
import {Link,useNavigate} from 'react-router-dom';
import '../css/navbar_global.css';
import Navright from '../jsx/nav_icon_global';


function Navbar() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [closing,setClosing] = useState(false);
  const navigate=useNavigate();
  //Search Input Box
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchClick = () => {
      setShowSearchBar((prev) => !prev);
    };
  const clearSearch = () => {
      setSearchValue('')
    };
  const [showShopSubMenu, setShowShopSubmenu] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen (prev => {
  //     const newState = !prev;
  //     if (!newState) {
  //       setShowShopSubmenu(false);
  //     }
  //     return newState;
  //   });
  // };
  const toggleMenu = () => {
  if (menuOpen) {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
      setShowShopSubmenu(false);
    },);
  } else {
    setMenuOpen(true);
  }
};

  return (
<header className="navbar-wrapper">
  {/* <Helmet>
    <meta name="viewport" content="width=device-width , initial-scale=1.0"/>
  </Helmet> */}

  <div className="announcement-bar">Shop at special prices&nbsp;|<Link to="/shop">Discover Now</Link></div>

  <div className="navbar">
  
    {!showSearchBar && (
  <>

{!menuOpen && (
  <div className='nav-mobile-header'>
  <div
    role="button"
    tabIndex={0}
    className="hamburger"
    onClick={toggleMenu}
    onKeyDown={(e) => { if (e.key === 'Enter') toggleMenu(); }}
    // aria-expanded={menuOpen}
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
    <Navright />
  </div>
  </div>
)}

{menuOpen && (
  // <div className={`mobile-menu open`}>
  //   {/* Close button INSIDE the mobile menu */}
  //   <div
  //     role='button'
  //     tabIndex={0}
  //     className='close-button'
  //     onClick={toggleMenu}
  //     onKeyDown={(e) => { if (e.key === 'Enter') toggleMenu(); }}
  //     aria-label="Close menu"
  //   >
  //     ✖
  //   </div>

  //   <Link to="/" className='mobile-link' onClick={() => setMenuOpen(false)}>Home</Link>
  //   {/* <Link to="/shop" className='mobile-link' onClick={() => setMenuOpen(false)}>Shop</Link> */}
  //     <div 
  //       className='mobile-link submenu-toggle'
  //       onClick={()=> setShowShopSubmenu(prev=>!prev)}>
  //         SHOP 
  //         <span className='mobile-shop-arrow'>{showShopSubMenu ? '←':'→'}</span>
  //     </div>
  //     {showShopSubMenu && (
  //       <div className='shop-submenu-mobile'>
  //         <Link to='/shop/men' className='submenu-link' onClick={()=>setMenuOpen(false)}>Men</Link>
  //         <Link to='/shop/women' className='submenu-link' onClick={()=>setMenuOpen(false)}>Women</Link>
  //       </div>
  //     )}
  <div className={`mobile-menu-wrapper ${menuOpen ? 'open' : ''} ${closing ? 'closing' : ''}`}>
     {/* MAIN MENU */}
    <div className='close-button-old' onClick={toggleMenu}>✖</div>
    <div className={`mobile-menu main-menu ${showShopSubMenu ? 'slide-left' : ''}`}>
      {/* <div className='close-button' onClick={toggleMenu}>✖</div> */}
      <div className='mobile-link' onClick={() => {setMenuOpen(false); navigate('/');}}>Home</div>
      <div className='submenu-toggle' onClick={() => setShowShopSubmenu(true)}>
        Shop <span className='mobile-shop-arrow'>→</span>
      </div>
      <div className='mobile-link' onClick={() => {setMenuOpen(false); navigate('/lookbook')}}>LookBook</div>
      <div className='mobile-link' onClick={() => {setMenuOpen(false); navigate('/about');}}>About</div>
      <div className='mobile-link' onClick={() => {setMenuOpen(false); navigate('/contact');}}>Contact</div>
    </div>

    {/* SHOP SUBMENU */}
    <div className={`mobile-menu shop-submenu ${showShopSubMenu ? 'slide-in' : ''}`}>
      {/* <div className='close-button' onClick={toggleMenu}>✖</div> */}
      <div className='submenu-toggle' onClick={() => setShowShopSubmenu(false)}>← Back</div>
      <Link className='mobile-link' to="/shop/men's clothing" onClick={() => {setMenuOpen(false);setShowShopSubmenu(false);}}>Ajrakh Kurtas</Link>
      <Link className='mobile-link' to="/shop/electronics" onClick={() => {setMenuOpen(false);setShowShopSubmenu(false);}}>Bagh Printed Kurtas</Link>
      <Link className='mobile-link' to="/shop/women's clothing" onClick={() => {setMenuOpen(false);setShowShopSubmenu(false);}}>Coord</Link>
      <Link className='mobile-link' to='/shop/kantha' onClick={() => {setMenuOpen(false);setShowShopSubmenu(false);}}>Kantha</Link>
      <Link className='mobile-link' to='/shop/bagru' onClick={() => {setMenuOpen(false);setShowShopSubmenu(false);}}>Bagru</Link>
      <Link className='mobile-link' to='/shop/ikkat' onClick={() => {setMenuOpen(false);setShowShopSubmenu(false);}}>Ikkat</Link>
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
        <Link to="/shop/women's clothing">Womes</Link>
        <Link to="/shop/kantha">Kantha</Link>
        <Link to="/shop/bagru">Bagru</Link>
        <Link to="/shop/ikkat">Ikkat</Link>
      </div>
    </div>
  
    <div  className="nav-item"><Link to="/about">About Us</Link></div>
    <div className="nav-item"><Link to="/lookbook">Look Book</Link></div>
    <div className="nav-item"><Link to="/contact">Contact</Link></div>
    </div>
    <div className='mobile-icon-row-beside-logo'>
    </div>
    <div className="nav-right">
        {/*class="search"*/}
        <div onClick={handleSearchClick} className='icon-wrapper' title='Search'>
        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#622B1E"  viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg></div>

    {/* <Navright /> */}
    </div>   
    </>)}                 
  {/* Only When Search logo is clicked*/}
  {showSearchBar && (
   <>
    <div 
      className="search-backdrop active" 
      onClick={handleSearchClick} 
      aria-label="Close search overlay"
      tabIndex={0}
      onKeyDown={(e) => { if(e.key === 'Escape') handleSearchClick(); }}
    />

    {/* Search overlay */}
    <div className={`search-overlay active`}>
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        autoFocus
      />
      <button onClick={clearSearch}>✖</button>
      <button onClick={handleSearchClick}>Cancel</button>
    </div></>
  )}
</div>
      {/* {menuOpen && (
       <div className='mobile-menu'>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/context" onClick={() => setMenuOpen(false)}>LookBook</Link>
        <Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link></div>
      )} */}
</header>
  );
}

export default Navbar;
