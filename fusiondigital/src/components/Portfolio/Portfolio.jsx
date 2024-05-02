import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'
import './Portfolio.scss';

const Portfolio = () => {
  const [isOpen, SetIsOpen] = useState(false);
  return (
    <>
      <button type='button' onClick={() => SetIsOpen(true)}>
        Open Gallery
      </button>

      <Lightbox
        open={isOpen}
        close={() => SetIsOpen(false)}
        slides={[
          { src: "../../assets/images/Liverpool-landscaping-2.png" },
          { src: "../../assets/images/Liverpool-landscaping-3.png" },
          { src: "../../assets/images/Liverpool-landscaping-4.png" },
          { src: "../../assets/images/Liverpool-landscaping-5.png" },
        ]}
        />
    </>
  );
};

export default Portfolio;