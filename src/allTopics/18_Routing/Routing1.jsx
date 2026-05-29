import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";

const Routing1 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing1;
