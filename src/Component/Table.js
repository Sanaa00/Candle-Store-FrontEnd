import React from "react";
import { Table } from "antd";
import { useGetOrderQuery } from "../features/api/cart";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
function TableOrder() {
  const { data: order } = useGetOrderQuery();
  console.log("order", order?.data);
  return (
    <TableContainer
    //  sx={{ maxHeight: "300px" }}
    >
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>address</TableCell>
            <TableCell>total price</TableCell>
            {/* <TableCell align="center">Email</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {order?.data?.map((row) => (
            <TableRow
              key={row?._id}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {console.log("row", row)}
              <TableCell>{row?.user?.fisrtName}</TableCell>
              <TableCell>{row?.address[0]?.city}</TableCell>
              <TableCell>{row?.totalPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableOrder;
