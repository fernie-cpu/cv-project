import React, { Component } from 'react';
import '../style/style.css';

class Header extends Component {
  render() {
    return (
      <header className='headerCont'>
        <h1 className='title'>CV Project</h1>
        <span className='spanHeader'>Make your resume and bring us home!</span>
      </header>
    );
  }
}

export default Header;
