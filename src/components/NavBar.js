import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';


export default class NavBar extends Component {
  render() {
    return (
        <nav  className="navbar">
          <NavLink activeClassName='selected' to='/'>Miguel</NavLink>
          <NavLink activeClassName='selected' to='/'>Home</NavLink>
          <NavLink activeClassName='selected' to='/About'>About</NavLink>
          <NavLink activeClassName='selected' to='/Portfolio'>Portfolio</NavLink>
          <NavLink activeClassName='selected' to='/References'>References</NavLink>
          <NavLink activeClassName='selected' to='/Contact'>Contact</NavLink>
        </nav>
    )
  }
}
