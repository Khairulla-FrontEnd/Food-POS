import { useState } from "react";
import { btn } from "../../../data/btn.js";

function HeaderOrder({ show, setShow }) {
  const [click, setClick] = useState(0);
  return (
    <div className="flex flex-col justify-center items-start pt-5 pb-8 gap-10">
      <div className="flex items-center justify-center gap-32">
        <h1 className="text-2xl font-bold order__title">Orders #34562</h1>
        {show && 
      <i className="bi bi-arrow-right cancel__icon hidden" onClick={() => setShow(!show)}></i>
        
        }
      </div>
      <div className="flex justify-center items-center gap-3">
        {
          btn.map(item => {
            if (item.id === click) {
             return <button key={item.id} className="p-2 bg-red-400 text-white font-bold border-2 rounded-lg border-red-400 font-bold order__btn">{item.title}</button>
            } else {
              return <button key={item.id} className="p-2 bg-gray-800 text-red-400 border-2 border-gray-500 font-bold rounded-lg order__btn" onClick={() => setClick(item.id)}>{item.title}</button>
            }
          })
        }
      </div>
      <div className="flex items-center justify-center border-b-2 border-solid border-gray-500 pb-9 gap-96 header__order">
        <h1 className="text-lg font-bold order__title">Item</h1>
        <div className="flex items-center justify-center gap-16">
          <h1 className="text-lg font-bold order__title">Qty</h1>
          <h1 className="text-lg font-bold order__title">Price</h1>
        </div>
      </div>
    </div>
  );
}

export default HeaderOrder;
