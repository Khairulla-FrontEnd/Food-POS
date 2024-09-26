import FoodCard from "./FoodCard";
import Img0 from "./img/Image 0.svg";
import Img1 from "./img/Image 1.svg";
import Img2 from "./img/Image 2.svg";
import Img3 from "./img/Image 3.svg";
import Img4 from "./img/Image 3.svg";
import Img5 from "./img/Image 4.svg";
import { FoodData } from "./FoodData.js";

function FoodCardsContainer() {
  let imgArr = [
    Img0,
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img0,
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
  ];
  return (
    <div className="flex justify-between flex-wrap items-center food__container">
      {FoodData.map((item, index) => {
        return (
          <FoodCard
            key={index}
            imgSrc={imgArr[index]}
            title={item.title}
            price={item.price}
            available={item.available}
          />
        );
      })}
    </div>
  );
}
export default FoodCardsContainer;
