import { useState, useContext } from "react";
import OrderCard from "./OrderCard";
import { CardContext } from "../../../context/CardProvider";

function OrderMain() {
  const { removeCard,data } = useContext(CardContext);
  return (
    <div className="flex flex-col justify-center items-start gap-10">
      {data.length ? data.map((item, index) => {
        return (
          <div key={index}>
            <OrderCard
              imgSrc={item.imgSrc}
              title={item.title}
              price={item.price}
              ordered={item.ordered}
              onCardClick={() => removeCard(index)}
            />
          </div>
        );
      }) : <p>No Order!</p>}
    </div>
  );
}
export default OrderMain;
