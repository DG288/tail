import { useState } from 'react'
import Nav from './nav.jsx';
import "tailwindcss"
import Body from './body.jsx';
import Footer from './footer.jsx';
import Header from './header.jsx';
import funcionx from './funcionx.jsx';
import Summary from './summary.jsx';
import This from './this.jsx'

function App() {

  return (
    <>
    <Header />
    <Nav />
    <Body />
    {funcionx()}
    <Summary />
    <This />
    <Footer />
    </>
  );
}

export default App;
