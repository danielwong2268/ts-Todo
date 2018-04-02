import * as React from 'react';

const logo = require('../../logo.svg');

const Header = () => (
<header className="App-header mb5">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to My Typescript Todo App</h1>
</header>
)

export default Header;