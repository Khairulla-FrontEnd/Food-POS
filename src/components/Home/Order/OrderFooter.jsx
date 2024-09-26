import { useState,useContext } from "react";
import { createPortal } from "react-dom";
import PopUp from "../PopUp/PopUp";
import { CardContext } from "../../../context/CardProvider";

function OrderFooter() {
  const [open, setOpen] = useState("right-0");
  const { total } = useContext(CardContext);
  return (
    <div>
      <div className="flex justify-center items-center gap-96 leading-10 mb-5 order__footer">
        <div className="text-gray-400 discount">
          <h1>Discount</h1>
          <h1>Sub total</h1>
        </div>
        <div className="text-lg leading-10 price">
          <h1>$0</h1>
          <h1>${total}</h1>
        </div>
      </div>
      <button
        className="p-2 bg-red-400 rounded-lg w-full payment__btn"
        onClick={() => setOpen("right-[590px]")}
      >
        Continue to Payment
      </button>
      {createPortal(<PopUp open={open} setOpen={setOpen} />, document.body)}
    </div>
  );
}
export default OrderFooter;
