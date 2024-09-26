function FoodCard(props) {
  return (
    <div className="bg-gray-800 flex justify-center items-center flex-col text-center my-8 mx-4 px-3 pt-4 rounded-2xl food__card">
      <div className="w-28 h-28 relative bottom-11 food__card__img">
        <img
          src={props.imgSrc}
          alt="img1"
          className="w-full h-full object-cover"
        ></img>
      </div>
      <div className="relative bottom-7 flex flex-col gap-2">
        <h1 className="w-40">{props.title}</h1>
        <p>$ {props.price}</p>
        <p className="text-zinc-500">{props.available} available</p>
      </div>
    </div>
  );
}
export default FoodCard;
