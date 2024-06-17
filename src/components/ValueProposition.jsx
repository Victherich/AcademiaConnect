import React from 'react';
import '../CSS/ValueProposition.css'; // Import your CSS file for styling

const ValueProposition = () => {
  return (
    <section id="value" className="value-proposition">
      <div className="containerP">
        <div className="value-content">
          <h2>Our Value Proposition</h2>    
          <p>Discover the benefits of using our school management app:</p>
          <ul>
            <li>Streamlined administrative tasks</li>
            <li>Enhanced communication between stakeholders</li>
            <li>Improved student and parent engagement</li>
            <li>Efficient management of academic resources</li>
          </ul>
          {/* Add more value proposition points as needed */}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
