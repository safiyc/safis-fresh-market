import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const navLinks = {
    textDecoration: 'none',
    color: 'black'
  };
  return (
    <div>
      <style jsx>{`
        h1 {
          // background-color: lightgreen;
          padding: 10px;
          // color: white;
          color: lightgreen;
          font-size: 40px;
          text-shadow: 0 0 3px black;
          margin: 0 auto;
          border-bottom: 3px solid rgba(0,0,0,.5);
        }
        #nav-section {
          display: flex;
          justify-content: flex-end;
          background-color: lightgreen;
          padding: 5px 12px 5px 0;
          border-top: 1px solid rgba(255,255,255,.5); 
        }
      `}</style>
      <h1>Safi's Fresh Market</h1>
      <div id="nav-section">
        <Link style={navLinks} to="daydisplay">Schedule</Link> &nbsp;&nbsp; <Link style={navLinks} to="/monthdisplay">Produce</Link> &nbsp;&nbsp; <Link style={navLinks} to="/">Home</Link>
      </div>
    </div >
  );
}

export default Header;
