import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import fruits from './Images/fruits.jpg';
import cherries from './Images/cherries.jpg';
import smoothie from './Images/smoothie.jpg';
import popcorn from './Images/popcorn.jpg';

function App() {
  // const [currentItem, setCurrentItem] = useState('Fruits');
  const scrollerRef = useRef(null);
  const revealRef = useRef(null);

  const items = ['Fruits', 'Cherries', 'Smoothie', 'Popcorn'];
  const images = {
    Fruits: fruits,
    Cherries: cherries,
    Smoothie: smoothie,
    Popcorn: popcorn,
  };

  useEffect(() => {

    const handleScroll = () => {
      const scrollTop = scrollerRef.current.scrollTop;
      const scrollHeight = scrollerRef.current.scrollHeight;
      const clientHeight = scrollerRef.current.clientHeight;

      // Calculate the scroll fraction of scroller (inverted)
      const scrollFraction = 1 - (scrollTop / (scrollHeight - clientHeight));

      // Set the scroll position of reveal
      revealRef.current.scrollTop = scrollFraction * (revealRef.current.scrollHeight - revealRef.current.clientHeight);
    };

    const scroller = scrollerRef.current;
    scroller.addEventListener('scroll', handleScroll);

    return () => {
      scroller.removeEventListener('scroll', handleScroll);
    };

    
  }, []);

  return (
    <div className="App">
      <h1>Reveal Scroller</h1>

      <section className='revealScroller'>
        <section className='scroller' ref={scrollerRef}>
          {items.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </section>
        <section className='reveal' ref={revealRef}>
          {items.slice().reverse().map((item) => (  // Reverse the order of items
            <img
              key={item}
              className='picture'
              src={images[item]}
              alt={item}
            />
          ))}
        </section>
      </section>
    </div>
  );
}

export default App;
