import { useState } from 'react'
import Nav from './nav.jsx';
import "tailwindcss"
import Body from './body.jsx';
import Footer from './footer.jsx';
import Header from './header.jsx';
import funcionx from './funcionx.jsx';

function App() {

  return (
    <>
    <Header />
    <Nav />
    <Body />
    {funcionx()}
    <Footer />
    </>
  );
}

export default App;
