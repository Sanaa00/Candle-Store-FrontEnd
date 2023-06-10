import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
import {
  useGetProductsForAdminQuery,
  useDeleteProductMutation,
} from "../features/api/productApi";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";

function ProductsForAdmin() {
  const { data: products } = useGetProductsForAdminQuery();

  const [deleteProduct] = useDeleteProductMutation();
  const deleteProductHandler = (id) => {
    deleteProduct(id);
  };
  return (
    <TableContainer>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Details</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.data?.map((row) => (
            <TableRow key={row?._id}>
              <TableCell>{row?.productName}</TableCell>
              <TableCell>{row?.price}</TableCell>
              <TableCell>
                <Link to={`/ProductsForAdmin/${row?._id}`}>View</Link>
              </TableCell>
              <TableCell>
                {" "}
                <button
                  onClick={() => {
                    deleteProductHandler(row?._id);
                  }}
                >
                  <RiDeleteBinLine className="w-5 h-5 text-gray-700" />
                </button>{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductsForAdmin;
