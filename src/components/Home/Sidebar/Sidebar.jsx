import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SidebarIcons } from "../../../data/SidebarIcons";
import Logo from "../../../../site icons/Logo.svg";
import Icons from "./Icons";

function Sidebar(props) {
  const [bg, setBg] = useState(props.link);
  const [style, setStyle] = useState("w-20 flex-col h-screen");
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 995) {
      setStyle("w-full h-[100px] z-[100] left-0 bottom-0");
    } else {
      setStyle("w-20 flex-col h-screen inset-0");
    }
  });
  useEffect(() => {
    if (window.innerWidth <= 995) {
      setStyle("w-full h-[100px] z-[100] left-0 bottom-0");
    } else {
      setStyle("w-20 flex-col h-screen inset-0");
    }
  }, []);

  return (
    <div
      className={`rounded-xl bg-gray-800 flex justify-around items-center fixed ${style}`}
    >
      <Link to="/Home">
        <div className="w-14 h-14 cursor-pointer logo">
          <img
            src={Logo}
            alt="SiteLogo"
            className="w-full h-full object-cover"
          ></img>
        </div>
      </Link>
      <Link to="/Home">
        <Icons
          icons={SidebarIcons[0].icon}
          bg={bg}
          index={0}
          setBg={() => setBg(0)}
        />
      </Link>
      <Icons
        icons={SidebarIcons[1].icon}
        bg={bg}
        index={1}
        setBg={() => setBg(1)}
      />
      <Link to="/Dashboard">
        <Icons
          icons={SidebarIcons[2].icon}
          bg={bg}
          index={2}
          setBg={() => setBg(2)}
        />
      </Link>
      <Icons
        icons={SidebarIcons[3].icon}
        bg={bg}
        index={3}
        setBg={() => setBg(3)}
      />
      <Icons
        icons={SidebarIcons[4].icon}
        bg={bg}
        index={4}
        setBg={() => setBg(4)}
      />
      <Link to="/Settings">
        <Icons
          icons={SidebarIcons[5].icon}
          bg={bg}
          index={5}
          setBg={() => setBg(5)}
        />
      </Link>
      <Icons
        icons={SidebarIcons[6].icon}
        bg={bg}
        index={6}
        setBg={() => setBg(6)}
      />
    </div>
  );
}
export default Sidebar;
