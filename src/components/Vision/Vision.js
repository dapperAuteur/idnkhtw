import React from 'react';
import playlist_20180620 from './../../playlists/Playlist_20180620.png';
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
      <h1>Why make comics?</h1>
      <p className="vision">I create because that's what humans do. I've been telling my nephews, and nieces to do what they love and don't worry about getting a job.</p>
      <p className="vision">I created a curricullum called The Elementary MBA (tm). Taught it to children for four years. Last month I got an offer to sell the trademark The Elementary MBA (tm).</p>
      <p className="vision">I made higher archy of needs for the curricullum. Showed it to my uncle. He told me that I need to be successful with it before anyone will believe it works.</p>
      <p className="vision">So I'm doing it. Just to prove <span className="wrong">I'm right</span> it works.</p>
      <p></p>
      <h3>Playlist Week of June 20th 2018:</h3>
      <h4>This playlist inspired the comic "I Think Very Deeply."</h4>
        <div>
          <a
            href="https://tidal.com/playlist/192bcd48-9681-4698-b679-66edb9b331fb"
            alt="Inspiring Playlist 20180620 from Tidal Music"
            target="_blank">
            <img className="image" src={ playlist_20180620 } />
          </a>
          <div className="playlist">
            <ul>
              <li>
                <a
                  href="https://tidal.com/album/90521072"
                  alt="Salud. A song from the Inspiring Playlist 20180620 from Tidal Music"
                  target="_blank">
                  Salud by <span className="artist">The Carters</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tidal.com/album/22331721"
                  alt="Nothin' To Show. A song from the Inspiring Playlist 20180620 from Tidal Music"
                  target="_blank">
                  Nothin' To Show by <span className="artist">Geto Boys</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tidal.com/album/2992765"
                  alt="My Philosophy. A song from the Inspiring Playlist 20180620 from Tidal Music"
                  target="_blank">
                  My Philosophy by <span className="artist">Boogie Down Productions</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tidal.com/album/59244601"
                  alt="Criminal Minded. A song from the Inspiring Playlist 20180620 from Tidal Music"
                  target="_blank">
                  Criminal Minded by <span className="artist">Boogie Down Productions</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Vision;
