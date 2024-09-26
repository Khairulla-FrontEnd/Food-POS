import Sidebar from "../components/Home/Sidebar/Sidebar";
import MainContent from "../components/Home/Main/MainContent";
import Order from "../components/Home/Order/Order";

function FoodHome() {
  return (
    <div className="flex justify-between food__home">
      <div>
        <Sidebar link={0} />
      </div>
      <div>
        <MainContent />
      </div>
      <div>
        <Order />
      </div>
    </div>
  );
}
export default FoodHome;
