import React from "react";
import ProductsPagination from "../Component/ProductsPagination";
import Container from "../Component/Container";
import Recomendation from "../Component/Recomendation";
import ProductsNavbar from "../Component/ProductsNavbar";
import Search from "../Component/Search";
function Products() {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <ProductsNavbar />
        <Search />
      </div>
      <p className="text-2xl font-semibold text-greeen my-5">Candles</p>
      <ProductsPagination />
      <Recomendation />
    </Container>
  );
}

export default Products;
