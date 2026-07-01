import "../css/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Navbar from "./Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
