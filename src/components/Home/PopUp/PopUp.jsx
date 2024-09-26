import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import PopUpMain from "./PopUpMain";

function PopUp({ open, setOpen }) {
  const [pos, setPos] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    
    function handleResize() {
      if (window.innerWidth <= 520) {
        setPos(true);
      } else {
        setPos(false);
      }
    }
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  },[])
  return (
    open !== "right-0" && (
      <div className="absolute inset-0 pop__main1 z-[100]">
        <div className="fixed inset-0 pop__main2">
          <div
            className={
              open === "right-[590px]"
                ? "w-full h-screen bg-[rgba(0,0,0,0.30)] absolute inset-0 pop__main3"
                : ""
            }
            onClick={() => setOpen("right-0")}
          ></div>
          <motion.div
            initial={{
              position: "absolute",
              right: "0px",
            }}
            animate={
              !pos ?
                {
                  position: "absolute",
                  right: "590px",
                } : {
                  position: "absolute",
                  left: "-50px",
                }}
          >
            <div className={`absolute top-0 pop__up__main`}>
              <div
                className={`absolute top-0 h-screen bg-gray-800 text-white px-5 w-[592px] flex items-center overflow-y-scroll pop__main4`}
              >
                <div>
                  <div className="border-b-2 border-gray-400 leading-10 pb-5 mb-5 titles">
                    <h1 className="text-2xl font-bold popup__title">Payment</h1>
                    <p className="font-medium text-gray-500 popup__subtitle">
                      3 payment method available
                    </p>
                  </div>
                  <PopUpMain setOpen={setOpen} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  );
}
export default PopUp;
