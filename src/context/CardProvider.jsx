import { createContext, useState, useMemo } from "react";
import {OrderData} from "../data/OrderData";

export const CardContext = createContext();

function CardProvider({children}) {
    const [data, setData] = useState(OrderData);

    const removeCard = (cardIndex) => {
        const undeleted = data.filter((item, index) => index !== cardIndex);
        setData(undeleted);
    }
    const total = useMemo(() => {
        let sumArr = data.map((item) => item.price * item.ordered);
        if (data.length) {
    return sumArr.reduce((a, b) => a + b).toFixed(2);            
        } else {
            return 0;
        }
    }, [data]);
    
   return <CardContext.Provider value = {
        {
        removeCard,total,data
        }
    }>
        {children}
    </CardContext.Provider>
}
export default CardProvider;