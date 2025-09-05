import { useState } from 'react'
import Nav from './nav.jsx';
import "tailwindcss"
import Body from './body.jsx';
import Footer from './footer.jsx';
import Header from './header.jsx';

function App() {

  return (
    <>
    <Header />
    <Nav />
    <Body />
    <Footer />
    </>
  );
}

export default App;
