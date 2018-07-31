import React from 'react';
import { Link } from 'react-router-dom';
import playlist_20180620 from './../../playlists/Playlist_20180620.png';
import './Vision.css';

const Playlist = () => {

//   let loadScript = function(src) {
//   var tag = document.createElement('script');
//   tag.async = false;
//   tag.src = src;
//   document.getElementsByTagName('body').appendChild(tag);
// }
// loadScript('//embed.tidal.com/tidal-embed.js')
  return (
    <div>
      <h1>Why make comics?</h1>
      <p className="playlist">I like to tell stories.</p>

      <h3>Playlist Week of June 20th 2018:</h3>
      <h4>This playlist inspired the comic <Link to={{ pathname: "/comics/i-think-very-deeply" }}>"I Think Very Deeply."</Link></h4>
        <div>
          <a
            href="https://tidal.com/playlist/192bcd48-9681-4698-b679-66edb9b331fb"
            alt="Inspiring Playlist 20180620 from Tidal Music"
            target="_blank"
            rel="noopener noreferrer">
            <img className="image" src={ playlist_20180620 } alt="album covers of the songs in the playlist" />
          </a>
          <div className="playlist">
            <ul>
              <li>
                <a
                  href="https://tidal.com/album/90521072"
                  alt="Salud. A song from the Inspiring Playlist 20180620 from Tidal Music"
                  target="_blank"
                  rel="noopener noreferrer">
                  Salud by <span className="artist">The Carters</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tidal.com/album/22331721"
                  alt="Nothin' To Show. A song from the Inspiring Playlist 20180620 from Tidal Music"
                  target="_blank"
                  rel="noopener noreferrer">
                  Nothin' To Show by <span className="artist">Geto Boys</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tidal.com/album/2992765"
                  alt="My Philosophy. A song from the Inspiring Playlist 20180620 from Tidal Music"
                  target="_blank"
                  rel="noopener noreferrer">
                  My Philosophy by <span className="artist">Boogie Down Productions</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tidal.com/album/59244601"
                  alt="Criminal Minded. A song from the Inspiring Playlist 20180620 from Tidal Music"
                  target="_blank"
                  rel="noopener noreferrer">
                  Criminal Minded by <span className="artist">Boogie Down Productions</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Playlist;
