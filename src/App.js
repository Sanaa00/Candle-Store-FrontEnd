import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import Favourite from "./Pages/Favourite";
import ShopBag from "./Pages/ShopBag";
import CreateAcount from "./Pages/CreateAcount";
import Footer from "./Component/Footer";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      {/* <Container> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="favourite" element={<Favourite />} />
        <Route path="createAcount" element={<CreateAcount />} />
        <Route path="shopBag" element={<ShopBag />} />
        <Route path="login" element={<Login />} />
      </Routes>{" "}
      <Footer />
      {/* </Container> */}
    </div>
  );
}

export default App;
