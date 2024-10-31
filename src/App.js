import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import Main from './containers/Main/Main';

function App() {
  return (
    <>
      <Nav children={Main}>
        {/* <Main/> */}
      </Nav>
    </>
  );
}

export default App;
