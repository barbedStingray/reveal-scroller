import React, { useEffect, useRef } from 'react';
import './App.css';

import fruits from './Images/fruits.jpg';
import cherries from './Images/cherries.jpg';
import smoothie from './Images/smoothie.jpg';
import popcorn from './Images/popcorn.jpg';

function App() {
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

    // Set the initial scroll position
    const setInitialScroll = () => {
      const scroller = scrollerRef.current;
      const reveal = revealRef.current;

      // Calculate the height of each section
      const itemCount = items.length;
      const revealHeight = reveal.scrollHeight / itemCount;

      // Set the scrollTop for scroller to show the first item
      scroller.scrollTop = 0;
      // Set the scrollTop for reveal to show first image
      reveal.scrollTop = (itemCount - 1) * revealHeight;
    };

    setInitialScroll(); // Set the initial position
    const scroller = scrollerRef.current;
    scroller.addEventListener('scroll', handleScroll);

    return () => {
      scroller.removeEventListener('scroll', handleScroll);
    };
  }, [items.length]);

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
