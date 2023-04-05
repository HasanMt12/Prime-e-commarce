import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

const TopBtn = () => {

  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button if the user scrolls down the page
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hide the button if the current location is at the top of the page
  useEffect(() => {
    if (pathname === '/') {
      setIsVisible(false);
    }
  }, [pathname]);
    return (
      <button  onClick={handleClick} 
      
      style={{ display: isVisible ? 'block' : 'none' }}
  
      >dssssssssssssss</button>
    );
};

export default TopBtn;