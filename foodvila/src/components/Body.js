import { useState ,useEffect} from 'react';
import RestrauntCard from './RestrauntCard';
import { restaurantList } from './config';



const Body=()=>{
    const [searchInput, setSearchInput] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [allrestaurants, setAllRestaurants] = useState([]);
    
    const filterData=(searchInput,restaurants)=>{
      return restaurants.filter((restaurant)=>
        restaurant.info.name.includes(searchInput)
      );
    }


    useEffect(() => {
      getRestaurants();
    }, [])
    

    const getRestaurants= async()=>{
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4998403&lng=77.061843&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        
        //Optional Chaining
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }


    return(
        <>
        <div className='search-container'>
            <input type='text' className='search-input'placeholder='Search' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
            <button className='search-btn'
            onClick={()=>{
             const data=filterData(searchInput,allrestaurants);
             setFilteredRestaurant(data);
            }}
            >Search</button>
        </div>
        <div className='restaurant-list'>
        {
         filteredRestaurant.map((restaurant)=>{
          // console.log(restaurant.info.id)
          return <RestrauntCard {...restaurant.info} key={restaurant.info.id}/>
         } )
        }
    </div>
      </> 
    );
  }


export default Body;