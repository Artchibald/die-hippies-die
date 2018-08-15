import React, { Component } from 'react';
// import logo from './logo.svg';

//images
import bg from './static/media/cruz-bg.jpg';
import spinTriangle from './static/media/cruz-spinning-triangle.svg';
import planet1 from './static/media/planet-1.png';
import planet2 from './static/media/planet-2.png';
import planet3 from './static/media/planet-3.png';
import planet4 from './static/media/planet-4.png';
import planet5 from './static/media/planet-5.png';
import planet6 from './static/media/planet-6.png';
import planet7 from './static/media/planet-7.png';
import planet8 from './static/media/planet-8.png';
import planet9 from './static/media/planet-9.png';
import ooga1 from './static/media/ooga-1.png';
import ooga2 from './static/media/ooga-2.png';
import ooga3 from './static/media/ooga-3.png';
import ooga4 from './static/media/ooga-4.png';
import ooga5 from './static/media/ooga-5.png';
import ooga6 from './static/media/ooga-6.png';
import ooga7 from './static/media/ooga-7.png';
import ooga8 from './static/media/ooga-8.png';
import eyeBrowse from './static/media/eyebrows.png';
import logoCruz from './static/media/CRUZ-logo-stories-of-fatherhood.png';
import mainContent from './static/media/main-content.png';
import featherLeft from './static/media/owl-feather-left.gif';
import enterSite from './static/media/enter-site.png';

import './App.css';





console.log("Time to get astro");



class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="Crop-App-to-bg">
          

            <img src={bg} className="App-bg" alt="bg" />
            <img src={spinTriangle} className="spin-triangle" alt="bg" />
            <img src={planet1} className="planet-1" alt="Planet Blue planet illustration" />
            <img src={planet2} className="planet-2" alt="Planet Blue planets illustration" />
            <img src={planet3} className="planet-3" alt="Planet Blue planets illustration" />
            <img src={planet4} className="planet-4" alt="Planet Blue planets illustration" />
            <img src={planet5} className="planet-5" alt="Planet Blue planets illustration" />
            <img src={planet6} className="planet-6" alt="Planet Blue planets illustration" />
            <img src={planet7} className="planet-7" alt="Planet Blue planets illustration" />
            <img src={planet8} className="planet-8" alt="Planet Blue planets illustration" />
            <img src={planet9} className="planet-9" alt="Planet Blue planets illustration" />

            <img src={ooga1} className="ooga-spin-1" alt="African Mask illustration" />
            <img src={ooga2} className="ooga-spin-2" alt="African Mask illustration" />
            <img src={ooga3} className="ooga-spin-3" alt="African Mask illustration" />
            <img src={ooga4} className="ooga-spin-4" alt="African Mask illustration" />
            <img src={ooga5} className="ooga-spin-5" alt="African Mask illustration" />
            <img src={ooga6} className="ooga-spin-6" alt="African Mask illustration" />
            <img src={ooga7} className="ooga-spin-7" alt="African Mask illustration" />
            <img src={ooga8} className="ooga-spin-8" alt="African Mask illustration" />

            <img src={ooga1} className="ooga-1" alt="African Mask illustration" />
            <img src={ooga2} className="ooga-2" alt="African Mask illustration" />
            <img src={ooga3} className="ooga-3" alt="African Mask illustration" />
            <img src={ooga4} className="ooga-4" alt="African Mask illustration" />
            <img src={ooga5} className="ooga-5" alt="African Mask illustration" />
            <img src={ooga6} className="ooga-6" alt="African Mask illustration" />
            <img src={ooga7} className="ooga-7" alt="African Mask illustration" />
            <img src={ooga8} className="ooga-8" alt="African Mask illustration" />

            <img src={mainContent} className="main-content" alt="Owl and boy in a transparent illustration" />
            <img src={featherLeft} className="left-feather" alt="Owl and boy in a transparent illustration" />
            <img src={featherLeft} className="right-feather" alt="Owl and boy in a transparent illustration" />


              <div className="control-cnt">
                  <div className="control hover-1"></div>
                  <div className="control hover-2"></div>
                  <div className="control hover-3"></div>
                  <div className="control hover-4"></div>
                  <div className="control hover-5"></div>
                  <div className="control hover-6"></div>
                  <div className="control hover-7"></div>
                  <div className="control hover-8"></div>
                  <div className="control hover-9"></div>
                  <div className="control hover-10"></div>
                  <div className="control hover-11"></div>
                  <div className="control hover-12"></div>
                  <div className="control hover-13"></div>
                  <div className="control hover-14"></div>
                  <div className="control hover-15"></div>
                  <div className="control hover-16"></div>
                  <div className="control hover-17"></div>
                  <div className="control hover-18"></div>
                  <div className="control hover-19"></div>
                  <div className="control hover-20"></div>
                  <div className="control hover-21"></div>
                  <div className="control hover-22"></div>
                  <div className="control hover-23"></div>
                  <div className="control hover-24"></div>
                  <div className="control hover-25"></div>
                  <div className="eye">
                    <div className="eye-inside-cnt">
                      <div className="eye-inside">
                        <div className="eye-really-inside">
                        </div>
                      </div>
                    </div>
                  </div>
              <div className="eye2">
                    <div className="eye-inside-cnt">
                      <div className="eye-inside">
                        <div className="eye-really-inside">
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <img src={eyeBrowse} className="eyebrows" alt="African Mask Owl illustration" />
            <a href={'http://www.archibaldbutler.com/'} className="logo-link"><img src={logoCruz} className="logo-cruz" alt="Stories by Cruz, a blog about Fatherhood" /></a>
            <a href={'http://www.archibaldbutler.com/'} className="enter-link"><img src={enterSite} className="enter-img" alt="Enter Site: Stories by Cruz, a blog about Fatherhood" /></a>
            <span className="signature"><a href={'http://www.archibaldbutler.com/'} >Illustrations and code by Archibald Butler</a></span>

       </div>
      </div>

    );
  }
}
export default App;








