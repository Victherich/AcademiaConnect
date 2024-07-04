// SolutionsPage.js
import React from 'react';
import '../CSS/OurSolutions.css';

// Dummy images for illustration purposes
import solution1Image from '../Images/s1.jpeg';
import solution2Image from '../Images/s2.jpeg';
import solution3Image from '../Images/s3.jpeg';
import solution4Image from '../Images/s4.jpeg';
import solution5Image from '../Images/s5.jpeg';
import solution6Image from '../Images/s6.jpeg';


const solutions = [
  {
    title: 'Academia Connect',
    description: 'Implements pick up ID for each student and this ID changes and updates every week on both the student and management dashboards to ensure that only authorized individuals can pick up children, significantly improving student safety.',
    image: solution1Image,
  },
  {
    title: 'Academia Connect',
    description: 'Digitizes and securely stores all student records and details as well as digital recording and distribution of results, preventing loss or misplacement and ensuring timely communication of academic performance.',
    image: solution2Image,
  },
  {
    title: 'Academia Connect',
    description: 'Providing digital data handling of student information which can always be retrieved simply by entering the ID of the student in question.',
    image: solution3Image,
  },
  {
    title: 'Academia Connect',
    description: 'Simplifies the school fees payment process by providing an avenue for the student or his ward to pay school fees right from his dashboard within the app and get confirmation immediately.',
    image: solution4Image,
  },
  {
    title: 'Academia Connect',
    description: 'Provides teachers with an efficient way to distribute assignments and resources, enhancing the learning process and student engagement.',
    image: solution5Image,
  },
  {
    title: 'Academia Connect',
    description: 'Offers parents easy access to their child’s academic information and a platform to communicate concerns directly with the school, fostering a collaborative educational environment.',
    image: solution6Image,
  },
];

const OurSolutions = () => {
  return (
    <div className="solutions-page">
      <h1>Our Solutions</h1>
      <div className="solutions-grid">
        {solutions.map((solution, index) => (
          <div key={index} className="solution-card">
            <img src={solution.image} alt={solution.title} />
            {/* <h2>{solution.title}</h2> */}
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSolutions;
