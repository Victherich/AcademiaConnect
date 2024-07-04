import React from 'react';
import '../CSS/ValueProposition.css'; // Import your CSS file for styling
import show1 from "../Images/show1.png"
import show2 from "../Images/show2.png"
import show3 from "../Images/show3.png"

const ValueProposition = () => {
  return (
    <section id="value" className="value-proposition">
      <div className="containerP">
      <h1>DashBoards</h1>
        <div className="value-content">
          
          <img src={show1} alt="show"/>
          <img src={show2} alt="show"/>
          <img src={show3} alt="show"/>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
