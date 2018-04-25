import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import { Link,BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact={true} component={Feed} />
          <Route path='/profile' component={Profile} />
        </div>
        </BrowserRouter>
    )
  }
}


const NavBar = () => (
  <div className="navbar">
    <Link className='listItem' to="/"><a>Feed</a></Link>
    <Link className='listItem' to="/profile"><a>Profile</a></Link>
  </div>
);

const Template = ({ title }) => (
  <div>
    <NavBar />
    <p className="page-info">
      This is the {title} page.
    </p>
    <p>{'Rendered at '+new Date()}</p>
  </div>
);

const Feed = (props) => (
  <Template title="Feed" />
);
const Profile = (props) => (
  <Template title="Profile" />
);

export default App;
