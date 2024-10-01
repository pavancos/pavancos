import React, { useEffect, useState } from 'react';

const Pullout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id='Pull'
      className={`${
        isScrolled ? 'translate-y-0' : '-translate-y-3/4'
      } transition-transform duration-300 ease-in-out`}
    >
      HEllo
    </div>
  );
};

export default Pullout;
