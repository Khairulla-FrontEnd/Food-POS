import { useState } from "react";
import { MenuData } from "../../../data/MenuData";

function Menu() {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex items-center gap-16 menu">
      {MenuData.map((item, index) => {
        if (index === hover) {
          return (
            <div key={index}>
              <p
                key={index}
                className="text-red-400 pb-1 font-bold text-nowrap cursor-pointer"
              >
                {item}
              </p>
              <div className="w-10 h-1 rounded-lg bg-red-400"></div>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <p
                key={index}
                className="font-bold cursor-pointer text-nowrap pb-1"
                onClick={() => setHover(index)}
              >
                {item}
              </p>
              <div className="w-10 h-1 rounded-lg bg-[#393c49]"></div>
            </div>
          );
        }
      })}
    </div>
  );
}
export default Menu;
