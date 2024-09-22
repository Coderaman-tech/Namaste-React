const restaurantList = [
  {
    id: "1",
    name: "Burger King",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/df52cfea-a2a1-4810-a3ab-73473fdd80da_129211.jpg",
    cusines: ["Burger", "American"],
    rating: "4.2"
  },
  {
    id: "2",
    name: "KFC",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/df52cfea-a2a1-4810-a3ab-73473fdd80da_129211.jpg",
    cusines: ["KFC", "Chicken"],
    rating: "4.2"
  },
  {
    id: "3",
    name: "MC Donald",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/df52cfea-a2a1-4810-a3ab-73473fdd80da_129211.jpg",
    cusines: ["Burger", "American"],
    rating: "4.2"
  },
  {
    id: "4",
    name: "Starbucks",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/df52cfea-a2a1-4810-a3ab-73473fdd80da_129211.jpg",
    cusines: ["Coffee","Tea"],
    rating: "4.6"
  },
  {
    id: "5",
    name: "Wow Momos",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/df52cfea-a2a1-4810-a3ab-73473fdd80da_129211.jpg",
    cusines: ["Momos", "American"],
    rating: "4.2"
  }
]


const RestrauntCard = ({id,name,image,cusines,rating}) => {

  return (
    <div className='card'>
      <img src={image} alt="foodie" />
      <h2>{name}</h2>
      <h3>{cusines.join(",")}</h3>
      <h4>{rating} stars</h4>
    </div>

  );
}


export default RestrauntCard;