import React from "react";

import ProductsPagination from "../Component/ProductsPagination";
import Container from "../Component/Container";
import FilterButtons from "../Component/FilterButtons";

function Products() {
  return (
    <div className="bg-gray-50 pt-16">
      <Container>
        <FilterButtons />
        <ProductsPagination />
      </Container>
    </div>
  );
}

export default Products;
