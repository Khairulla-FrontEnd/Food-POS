import { useMemo } from "react";

function OrderCard(props) {
  const sum = useMemo(() => {
    return props.price * props.ordered;
  }, [props.ordered]);
  return (
    <div className="text-white flex justify-center gap-10 text-nowrap order__card">
      <div className="flex flex-col justify-center gap-3">
        <div className="flex items-center w-[450px] justify-between order__card2">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full order__card__img">
              <img
                src={props.imgSrc}
                alt="orderImg"
                className="w-full h-full object-cover"
              ></img>
            </div>
            <div>
              <h1 className="text-lg order__card__title">{props.title}</h1>
              <p className="text-gray-300 order__card__title">
                $ {props.price}
              </p>
            </div>
          </div>
          <div>
            <button className="bg-[#393c49] text-white border-2 border-gray-500 border-solid rounded-lg py-2 px-4 ordered">
              {props.ordered}
            </button>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Order Note..."
            className="p-3 rounded-lg w-full bg-[#393c49] outline-none order__input"
          ></input>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-xl order__card__title">$ {sum}</h1>
        <button className="text-xl py-2 px-3 text-red-400 border-2 border-red-400 border-solid rounded-lg order__delete" onClick={() => props.onCardClick()}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
}
export default OrderCard;
