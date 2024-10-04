


const RestrauntCard = ({id,name,cloudinaryImageId,locality,avgRatingString}) => {

  return (
    <div className='card'>
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="foodie" />
      <h2>{name}</h2>
      <h3>{locality}</h3>
      <h4>{avgRatingString} stars</h4>
    </div>

  );
}


export default RestrauntCard;