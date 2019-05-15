import React from 'react';

function Footer() {
  return (
    <div>
      <style jsx>{`
        footer {
          text-align: center;
          background-color: orange;
          height: 40px;
          line-height: 40px;
          margin-top: 15px;
        }
        a {
          text-decoration: none;
          color: white;
        }
      `}</style>
      <footer>
        <a href="http://www.safiycham.com/" target="_blank"><strong>Safi's Fresh Market</strong>&nbsp;&nbsp;&nbsp;by Safiy Cham&nbsp;&#169; 2019</a>
      </footer>
    </div>
  );
}

export default Footer;
