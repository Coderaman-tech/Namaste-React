


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