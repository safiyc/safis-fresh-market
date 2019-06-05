import React from 'react';
import imgProduce from '../assets/images/intro-produce.jpg';

function Intro() {
  return (
    <div>
      <style jsx>{`
        .img_container {
          position: relative;
          text-align: center;
        }
        #welcome, #welcome_arrow {
          position: absolute;
          left: 50%;
          transform: translate(-50%, 0);
        }
        #welcome {
          background: rgba(255,255,0, .65);
          width: 100%;
          height: 100px;
          line-height: 100px;
          margin-top: 0;
          padding: unset;
          color: white;
          font-size: 26px;
          font-weight: 600;
          text-shadow: 0 1px 2px black;
        }
        #welcome_arrow {
          margin-top: 100px;
          width: 0; 
          height: 0; 
          border-left: 150px solid transparent;
          border-right: 150px solid transparent;
          border-top: 20px solid rgba(255,255,0, .65);
        }
        img {
          width: 100%;
        }
        p {
          padding: 0 30px;
        }
      `}</style>
      <div className="img_container">
        <p id="welcome">Welcome</p>
        <p id="welcome_arrow"></p>
        <img src={imgProduce} alt="Produce Stand" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptates, sint quibusdam repellat eius eaque maiores doloremque nesciunt consequatur? Aliquid nam eaque accusamus fuga debitis magnam suscipit quae quam cumque.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eveniet officiis quisquam magni facere placeat accusantium accusamus, alias qui sunt excepturi saepe nisi officia iste quasi, facilis ipsa aspernatur? Consequuntur...
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit libero nam excepturi sit quibusdam. Eveniet beatae inventore nemo laboriosam voluptas!
      </p>
    </div>
  );
}

export default Intro;
