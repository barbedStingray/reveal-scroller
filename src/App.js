import logo from './logo.svg';
import './App.css';

import fruits from './Images/fruits.jpg';
import cherries from './Images/cherries.jpg';
import smoothie from './Images/smoothie.jpg';
import popcorn from './Images/popcorn.jpg';

function App() {


  return (
    <div className="App">
      <h1>Reveal Scroller</h1>

      <div className='revealScroller'>

        <div className='scroller'>
          <p>Fruits</p>
          <p>Cherries</p>
          <p>Smoothie</p>
          <p>Popcorn</p>

        </div>
        <div className='reveal'>

        </div>

      </div>


    </div>
  );
}

export default App;
