import React from 'react';

function Intro() {
  return (
    <div>
      <style jsx>{`
        h3 {
          text-align: center;
          height: 100vh;
          margin-top: 0;
          background: orange;
        }
        p {
          padding: 0 6px;
        }
      `}</style>
      <h3>Intro</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptates, sint quibusdam repellat eius eaque maiores doloremque nesciunt consequatur? Aliquid nam eaque accusamus fuga debitis magnam suscipit quae quam cumque.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit libero nam excepturi sit quibusdam. Eveniet beatae inventore nemo laboriosam voluptas!
      </p>
    </div>
  );
}

export default Intro;
