import { useEffect, useState } from "react";
import HeaderOrder from "./HeaderOrder";
import OrderMain from "./OrderMain";
import OrderFooter from "./OrderFooter";

function Order() {
  const [screen, setScreen] = useState(false);
  const [height, setHeight] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 520) {
        setScreen(true);
      } else {
        setScreen(false);
      }
      if (window.innerWidth <= 995) {
        setHeight(true);
      } else {
        setHeight(false);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (height && !screen) {
    return (
      <div className={`text-white bg-gray-800 fixed right-0 h-screen`}>
        <div className="px-5 flex justify-between items-center flex-col order relative">
          <div>
            <HeaderOrder />
          </div>
          <div className="h-full overflow-y-scroll order__main">
            <OrderMain />
          </div>
          <div>
            <OrderFooter />
          </div>
        </div>
      </div>
    );
  } else if (screen) {
    return (
      <div className="thing__main">
        <button className="p-1 rounded-md bg-red-400 text-white show__order" onClick={() => setShow(true)}>
          Show Orders
        </button>
        {show && <div className="fixed left-0 top-0 z-[100] flex items-center justify-center flex-row">
        <div className="text-white bg-gray-800 h-screen px-5 flex justify-between items-center flex-col">
            <div>
              <HeaderOrder show={show} setShow={setShow} />
        </div>
        <div className="h-full overflow-y-scroll order__main">
          <OrderMain />
        </div>
        <div>
          <OrderFooter />
        </div>
          </div>
        </div>}
      </div>
    );
  } else {
    return (
      <div className="text-white bg-gray-800 fixed right-0 h-screen px-5 flex justify-between items-center flex-col">
        <div>
          <HeaderOrder />
        </div>
        <div className="h-full overflow-y-scroll order__main">
          <OrderMain />
        </div>
        <div>
          <OrderFooter />
        </div>
      </div>
    );
  }
}
export default Order;
