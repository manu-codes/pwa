import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';
import Calculator from './calc/index';
import Container from './container-ui/index'
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


const NavBar = () => {
  let ls = [];
ls.push(<Link className='listItem' to="/">Feed</Link>)
ls.push(<Link className='listItem' to="/profile">Profile</Link>);
return ls;
  
};

// const Template = ({ title }) => (
//   <div>
//     <NavBar />
//     <p className="page-info">
//       This is the {title} page.
//     </p>
//     <p>{'created at ' + new Date()}</p>
//   </div>
// );

const Feed = (props) => (
  <Container links={NavBar()}>
    <Calculator />
  </Container>
);
const Profile = (props) => (

  <Container links={NavBar()}>
    <Calculator />
  </Container>

);

export default App;
