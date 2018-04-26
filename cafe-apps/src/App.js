import React, { Component } from 'react';
import './App.css';
import { Route, } from 'react-router';
import {  BrowserRouter  } from 'react-router-dom';
import Calculator from './calc/index';
import Container from './container-ui/index'
import About from './about'
class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact={true} component={Home} />
          <Route path='/Calculator' component={Calc} />
          <Route path='/About' component={AboutComp} />
          
        </div>

      </BrowserRouter>
    )
  }
}

const links = [{path:'/',name:'Home'},
{path:'/Calculator',name:'Calculator'},
{path:'/About',name:'About Cafe Works'}

]

const Home = (props) => (
  <Container links={links}>
    <Calculator />
  </Container>
);
const Calc = (props) => (

  <Container links={links}>
    <Calculator />
  </Container>

);
const AboutComp = (props) => (

  <Container links={links}>
    <About />
  </Container>

);

export default App;
