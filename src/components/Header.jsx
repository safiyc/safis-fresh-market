import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx>{`
        h1 {
          padding: 10px;
          color: lightgreen;
          font-size: 40px;
          text-shadow: 0 0 3px black;
          margin: 0 auto;
          border-bottom: 3px solid rgba(0,0,0,.5);
          background-color: orangered;
        }
      `}</style>
      <h1>Safi's Fresh Market</h1>
      <div id="nav-section">
        <NavLink className='nav_links' activeClassName='link_active' to="/daydisplay">Schedule</NavLink> &nbsp;&nbsp; <NavLink className='nav_links' activeClassName='link_active' to="/monthdisplay">Produce</NavLink> &nbsp;&nbsp; <Link className='nav_links' to="/">Home</Link>
      </div>
    </div >
  );
}

export default Header;
