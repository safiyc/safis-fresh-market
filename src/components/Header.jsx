import React from 'react';
import { NavLink as Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx>{`
        h1 {
          background-color: lightgreen;
          padding: 5px 10px;
          color: white;
          text-align: center;
        }
      `}</style>
      <h1 className="text-center">Safi's Fresh Market</h1>
      <div>
        <Link style={{ textDecoration: 'none' }} to="daydisplay">Schedule</Link> | <Link style={{ textDecoration: 'none' }} to="/monthdisplay">Availability</Link> | <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
      </div>
      <hr />
    </div >
  );
}

export default Header;
