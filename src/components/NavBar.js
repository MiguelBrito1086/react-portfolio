import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';


export default class NavBar extends Component {
  render() {
    return (
        <nav>
          <Link activeClassName="selected" to='/Miguel'>Miguel</Link>
          <Link activeClassName="selected" to='/'>Home</Link>
          <Link activeClassName="selected" to='/About'>About</Link>
          <Link activeClassName="selected" to='/Portfolio'>Portfolio</Link>
        </nav>
    )
  }
}
