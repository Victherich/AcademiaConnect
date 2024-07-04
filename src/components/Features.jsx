// FeaturesPage.js
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../CSS/Features.css';

const features = [
  'Student Information Management',
  'Attendance Tracking',
  'Academic Performance Management',
  'Communication Tools',
  'School Fees Management',
  'Curriculum and Lesson Planning',
  'Library Management',
  'Timetable and Scheduling',
  'School Transport Management',
  'Health and Safety',
  'Pick-Up ID Management for Increased Safety',
  'Parental Engagement',
  'Staff Management',
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const FeaturesPage = () => {
  return (
    <div className="features-page">
      <h1>Academia Connect Features</h1>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        arrows={true}
      >
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            {feature}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturesPage;
