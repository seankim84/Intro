import React, { Component } from 'react';
import "App4.css";


class App extends Component {
  render() {
    return (
      <body>
        <div id="headers">
          <div className="title">SeanStagram</div>
          <nav className="navigation">
            <ul>
              <li>AboutMe</li>
              <li>Resume</li>
              <li>Education</li>
              <li>Content</li>
            </ul>
          </nav>
        </div>

        <div id="section">
          <div className="bg"></div>
          <div className="section"></div>
          <footer></footer>
        </div> 
      </body>
    )
  }
}

export default App;