import { useState } from "react";
import { PopUpData } from "../../../data/PopUpData";

function PopUpMain({ setOpen }) {
  const [payment, setPayment] = useState(0);
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold pay__meth">Payment Method</h1>
      <div className="flex items-center gap-12 mb-2 pay__cards">
        {PopUpData.map((item, index) => {
          if (payment === index) {
            return (
              <div
                key={index}
                className="flex justify-center items-center flex-col border-2 rounded-md border-white bg-gray-600 px-2 text-white
        relative cursor-pointer w-24 pay__card"
              >
                <i className={item.icon + " text-2xl pay__icon"}></i>
                <h1 className="text-sm font-medium pay__title">{item.title}</h1>
                <i className="bi bi-check-circle-fill text-red-400 absolute right-1 top-0 pay__ver"></i>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="flex justify-center items-center flex-col border-2 rounded-md border-gray-500 bg-gray-800 px-2 text-white
        relative cursor-pointer w-24 pay__card"
                onClick={() => setPayment(index)}
              >
                <i className={item.icon + " text-2xl pay__icon"}></i>
                <h1 className="text-sm font-medium pay__title">{item.title}</h1>
              </div>
            );
          }
        })}
      </div>
      <div className="border-b-2 border-gray-400 pb-4 flex flex-col items-start gap-2">
        <div className="flex flex-col">
          <h1 className="text-sm font-medium pb-1 labels">Cardholder Name</h1>
          <input
            type="text"
            className="p-2 rounded-lg bg-gray-600 outline-none text-white pay__input"
          ></input>
        </div>
        <div className="flex flex-col">
          <h1 className="text-sm font-medium pb-1 labels">Card Number</h1>
          <input
            type="number"
            className="p-2 rounded-lg bg-gray-600 outline-none text-white pay__input"
          ></input>
        </div>
        <div className="flex items-center gap-28 card__info">
          <div className="flex flex-col">
            <h1 className="text-sm font-medium pb-1 labels">Expiration Date</h1>
            <input
              type="text"
              className="p-2 rounded-lg bg-gray-600 outline-none text-white pay__input"
            ></input>
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-medium pb-1 labels">CVV</h1>
            <input
              type="number"
              className="p-2 rounded-lg bg-gray-600 outline-none text-white pay__input"
            ></input>
          </div>
        </div>
      </div>
      <div className="flex items-center pb-16 gap-24 thing2">
        <div className="flex flex-col gap-1">
          <h1 className="font-medium text-sm labels">Order Type</h1>
          <select className="p-2 pr-32 border-2 text-white rounded-lg border-gray-400 bg-gray-900 selection">
            <option value="Dine in">Dine in</option>
            <option value="None">None</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-medium text-sm labels">Table no.</h1>
          <input
            type="number"
            className="p-2 rounded-lg bg-gray-600 text-white pay__input2"
          ></input>
        </div>
      </div>
      <div className="flex items-center justify-center gap-20 btns">
        <button
          className="px-4 py-2 border-2 border-red-400 text-red-400 rounded-lg w-52 pay__btn"
          onClick={() => setOpen("right-0")}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 border-2 border-red-400 text-white bg-red-400 rounded-lg w-52 pay__btn"
          onClick={() => {
            setOpen("right-0");
            alert("Your payment has been confirmed");
          }}
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
}
export default PopUpMain;
