import './App.css';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {

 
  const AppLayout=()=>{
    return(
      // <React.Fragment>
      <>
      <Header/>
      <Body/>
      <Footer/>
      </>
      // </React.Fragment>
    );
  }
  return (
    <div className="App">
      <AppLayout/>
    </div>
  );
}

export default App;
