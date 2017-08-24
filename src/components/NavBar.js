import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';


export default class NavBar extends Component {
  render() {
    return (
        <nav  className="navbar">
          <Link to='/'>Miguel</Link>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Portfolio'>Portfolio</Link>
        </nav>
    )
  }
}
