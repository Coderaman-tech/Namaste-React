const burgerKing={
    name:"Burger King",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/df52cfea-a2a1-4810-a3ab-73473fdd80da_129211.jpg",
    cusines:["Burger","American"],
    rating:"4.2"
  }

  
  const RestrauntCard=()=>{
    return(
        <div className='card'>
            <img src={burgerKing.image} alt="foodie"/>
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cusines.join(",")}</h3>
            <h4>{burgerKing.rating} stars</h4>
        </div>

    );
  }

export default RestrauntCard;