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
import ShippingAndPayment from "./Component/ShippingAndPayment";
import Product from "./Pages/Product";
import Payment from "./Component/Payment";
// import Shipping from "./Component/Shipping";

function App() {
  return (
    <div>
      {/* <Container> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="favourite" element={<Favourite />} />
        <Route path="createAcount" element={<CreateAcount />} />
        <Route path="shopBag" element={<ShopBag />} />
        <Route path="login" element={<Login />} />
        <Route path="shippingAndPayment" element={<ShippingAndPayment />} />
        <Route path="payment" element={<Payment />} />
      </Routes>{" "}
      <Footer />
      {/* </Container> */}
    </div>
  );
}

export default App;
// to={`/hotel/${hotel.id}`}
// const { id } = useParams();
