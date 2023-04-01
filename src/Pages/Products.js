import React from "react";
import ProductsPagination from "../Component/ProductsPagination";
import Container from "../Component/Container";
import Recomendation from "../Component/Recomendation";
import FilterButtons from "../Component/FilterButtons";
import Search from "../Component/Search";
function Products() {
  return (
    <div className="bg-gray-50">
      <Container>
        {/* <div className=" mt-5 flex flex-col-reverse xl:flex-row justify-between items-center"> */}
        <FilterButtons />
        {/* <Search /> */}
        {/* </div> */}
        <p className="text-2xl font-semibold text-greeen my-5">Candles</p>
        <ProductsPagination />
        {/* <Recomendation /> */}
      </Container>
    </div>
  );
}

export default Products;
