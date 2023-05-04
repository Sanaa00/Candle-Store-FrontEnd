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
import AdminPanel from "./Pages/AdminPanel";
import AddProductsForm from "./Component/AddProductsForm";
import Table from "./Component/Table";
import Dashboard from "./Component/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { useGetCurrentUserQuery } from "./features/api/auth";
import { useEffect } from "react";
import { addUser } from "./features/user.slice";
// import Shipping from "./Component/Shipping";

function App() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  console.log("user", user);

  const { data, isError, isSuccess, isLoading } = useGetCurrentUserQuery();
  console.log("data", data);

  useEffect(() => {
    if (isSuccess && data) {
      if (isSuccess && data) {
        dispatch(addUser(data.data.user));
      }
      // console.log(data?.data?.user);
    }
  }, [data]);
  return (
    <div>
      {/* <Container> */}
      {/* {(!user || user.role === "user") && <p className="text-3xl">hello</p>} */}
      {/* {if } */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:_id" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="favourite" element={<Favourite />} />
        <Route path="createAcount" element={<CreateAcount />} />
        <Route path="shopBag" element={<ShopBag />} />
        <Route path="login" element={<Login />} />
        <Route path="shippingAndPayment" element={<ShippingAndPayment />} />
        <Route path="payment" element={<Payment />} />
        <Route path="adminPanel" element={<AdminPanel />}>
          <Route path="form" element={<AddProductsForm />} />
          <Route path="table" element={<Table />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>{" "}
      <Footer />
      {/* </Container> */}
    </div>
  );
}

export default App;
// to={`/hotel/${hotel.id}`}
// const { id } = useParams();
