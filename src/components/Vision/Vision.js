import React from 'react';
import './Vision.css';

const Vision = () => {

//   let loadScript = function(src) {
//   var tag = document.createElement('script');
//   tag.async = false;
//   tag.src = src;
//   document.getElementsByTagName('body').appendChild(tag);
// }
// loadScript('//embed.tidal.com/tidal-embed.js')
  return (
    <div>
      <h1>My Vision</h1>
      <p className="vision">To create things that I can use and will add value to my life.</p>
      <br />
      <h4>This is a work in progress. Check back later for updates.</h4>
      <br />
      <p className="vision">I'd like the opportunity to partner with an organization who's values are in harmony with mine to help them create products that add value to the world.</p>
      <br />
      <p className="vision">This app was created to help me practice Spanish and expand my English vocabulary. It includes a word game called Cows and Bulls that I learned while driving through the mountains of Guatemala during a thunder storm one night. We played the game to eaze our anxiety due to the torrential weather and low visibility.</p>
    </div>
  )
}

export default Vision;
