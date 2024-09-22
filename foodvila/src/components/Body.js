import { useState } from 'react';
import RestrauntCard from './RestrauntCard';
import { restaurantList } from './config';



const Body=()=>{
    const [searchInput, setSearchInput] = useState("");

    const [restaurants, setRestaurants] = useState(restaurantList);
    
    const filterData=(searchInput,restaurants)=>{
      return restaurants.filter((restaurant)=>
        restaurant.name.includes(searchInput)
      );
    }
    return(
        <>
        <div className='search-container'>
            <input type='text' className='search-input'placeholder='Search' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
            <button className='search-btn'
            onClick={()=>{
             const data=filterData(searchInput,restaurants);
             setRestaurants(data);
            }}
            >Search</button>
        </div>
        <div className='restaurant-list'>
        {
         restaurants.map((restaurant)=>{
          return <RestrauntCard {...restaurant} key={restaurant.id}/>
         } )
        }
    </div>
      </> 
    );
  }


export default Body;