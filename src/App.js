import React, {Component} from 'react';
import "App3.css";


class App extends Component {
  render() {
    return (
      <body>
        <header>
          <div className="title">Seanstagram</div>
          <div className="navigation">
            <ul>
              <li>AboutMe</li>
              <li>Resume</li>
              <li>Education</li>
              <li>Contact</li>
            </ul>
          </div>
        </header>

        <div id="section">
          <div className="bg"></div>   
          <section>sean!!</section>       
        </div>

        <footer>
          <div className="footer-navigation">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
          <div className="footer-term"></div>
        </footer>
      </body>  
    );
  }
}

export default App;