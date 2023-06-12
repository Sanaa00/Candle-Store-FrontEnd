import React from "react";
import { useGetOrderQuery } from "../features/api/cart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
function TableOrder() {
  const { data: order } = useGetOrderQuery();

  return (
    <TableContainer>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>address</TableCell>
            <TableCell>total price</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order?.data?.map((row) => (
            <TableRow key={row?._id}>
              <TableCell>{row?.user?.firstName}</TableCell>
              <TableCell>{row?.address[0]?.city}</TableCell>
              <TableCell>{row?.totalprice}</TableCell>
              <TableCell>{row?.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableOrder;
