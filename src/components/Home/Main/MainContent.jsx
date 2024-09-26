import Header from "./Header";
import Menu from "./Menu";
import DishSelection from "./DishSelection";
import FoodCardsContainer from "../Foods/FoodCardsContainer";

function Main() {
  return (
    <div className="text-white max-w-3xl width-full mr-[550px] pt-5 main__content">
      <div className="mb-5">
        <Header />
      </div>
      <div className="mb-10">
        <Menu />
      </div>
      <div className="mb-12">
        <DishSelection />
      </div>
      <div>
        <FoodCardsContainer />
      </div>
    </div>
  );
}
export default Main;
