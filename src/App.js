import React, { Component } from 'react';
import { Navigation, Header, Layout, Drawer } from 'react-mdl';
import "App5.css";

class App extends Component {
  render(){
    return(
      <body>
        
        <header style={{ height: '100vh', position: 'relative'}}>
          <Layout fixedHeader>
          <Header style={{background:"black"}} title={<span><span style={{ color: '#ddd' }}></span><strong>SeanStagram</strong></span>}>
            <Navigation>
                <a href="">AboutMe</a>
                <a href="">Resume</a>
                <a href="">Education</a>
                <a href="">Contact</a>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
                <a href="">AboutMe</a>
                <a href="">Resume</a>
                <a href="">Education</a>
                <a href="">Contact</a>
            </Navigation>
          </Drawer>
        </Layout>
      </header>
      <section id="bg"></section>
      <section id="section-content">
        <div><h2>Welcome to Seanstagram</h2></div>
      </section>
      
    </body>
      
    )
  }
}
export default App;