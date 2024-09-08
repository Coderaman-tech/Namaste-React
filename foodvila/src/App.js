import './App.css';

function App() {

  const Title=()=>(
    <a href='/ '>
    <img  className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimKS0-E61jy_dctanYVq2rzxMV35RExo-Aw&s' alt='logo'/>
    </a>
  );

  const HeaderComponents=()=>{
    return(
    <div className='header' >
       <Title/>
       <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
       </div>
    </div>
    );
  }

  const Body=()=>{
    return(
      <h4>Body</h4>
    );
  }
  const Footer=()=>{
    return( 
      <h4>Footer</h4>
    );
  }
  const AppLayout=()=>{
    return(
      <>
      <HeaderComponents/>
      <Body/>
      <Footer/>
      </>
    );
  }
  return (
    <div className="App">
      <AppLayout/>
    </div>
  );
}

export default App;
