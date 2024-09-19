import { useState } from 'react';
import RestrauntCard from './RestrauntCard';


const Body=()=>{
    const [searchInput, setSearchInput] = useState("KFC");


    
    return(
        <>
        <div className='search-container'>
            <input type='text' className='search-input'placeholder='Search' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
            <button className='search-btn'>Search</button>
        </div>
      <div>
        <RestrauntCard/>
      </div>
      </>
    );
  }


export default Body;