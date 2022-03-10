import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import OrderDetails from "./components/OrderDetails";
import HomePage from "./components/HomePage";
import FillDetails from "./components/FillMyDetails";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/form" element={<FillDetails />} />
      </Routes>
    </>
  );
}

export default App;
