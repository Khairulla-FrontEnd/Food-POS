import { Routes, Route, Navigate } from "react-router-dom";
import FoodHome from "./pages/FoodHome.jsx";
import Sidebar from "./components/Home/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Navigate to={`/Home`} replace />} />
        <Route path={"/Home"} element={<FoodHome />} />
        <Route path={"/Dashboard"} element={<Sidebar link={2} />} />
        <Route path={"/Settings"} element={<Sidebar link={5} />} />
      </Routes>
    </div>
  );
}

export default App;
