import React, { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const reviews = [
  {
    text: "I've been a member of Heritage Financial Credit Union  for over five years now, and I can confidently say that it's been a fantastic financial partner. From day one, their commitment to personalized service and member satisfaction has been evident in every interaction. Overall, I couldn't be happier with my experience at Heritage Financial Credit Union. They've exceeded my expectations in every aspect, and I wouldn't hesitate to recommend them to anyone looking for a trustworthy financial institution.",
    author: "Ty Burrell",
  },
  {
    text: "I've been a member at Heritage Financial Credit Union for nearly a decade, and my experience has been outstanding. Their dedication to customer service is unmatched, and they've always been proactive in helping me achieve my financial goals. I highly recommend Heritage Financial to anyone looking for a reliable banking partner.",
    author: "Emma Thompson",
  },
  {
    text: "Heritage Financial Credit Union has been my go-to financial institution for years. Their commitment to transparency and customer satisfaction is evident in every interaction. Their competitive rates and personalized service make them a standout choice for anyone seeking trustworthy financial solutions.",
    author: "Michael Johnson",
  },
  {
    text: "As a member of Heritage Financial Credit Union, I've consistently received top-notch service. Whether it's handling everyday banking needs or planning for the future, they've always provided knowledgeable advice and prompt assistance. I'm grateful to have them as my financial partner.",
    author: "Sarah Parker",
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? reviews.length - 1 : currentSlide - 1);
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow-slide">
        <p>{reviews[currentSlide].text}</p>
        <p>- {reviews[currentSlide].author}</p>
      </div>
      <div className="slideshow-nav">
      <IoIosArrowDropleftCircle className="ph2e1" onClick={prevSlide}/>
      <IoIosArrowDroprightCircle className="ph2e2" onClick={nextSlide}/>
      </div>
    </div>
  );
};

export default Slideshow;
