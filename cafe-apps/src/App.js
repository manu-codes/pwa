import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
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
  <ul>
    <li>
      <Link className='listItem' to="/"><a>Feed</a></Link>
    </li>
    <li>
      <Link className='listItem' to="/profile"><a>Profile</a></Link>
    </li>
  </ul>
);

const Template = ({ title }) => (
  <div>
    <NavBar />
    <p className="page-info">
      This is the {title} page.
    </p>
    <p>{'Rendered at ' + new Date()}</p>
  </div>
);

const Feed = (props) => (
  <Template title="Feed" />
);
const Profile = (props) => (
  <Template title="Profile" />
);

export default App;
