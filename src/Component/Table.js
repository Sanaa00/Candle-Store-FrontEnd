import React from "react";
import { Table } from "antd";
function TableOrder() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      status: "shipping",
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      status: "onway",
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <div className="w-full">
      <p className=" font-semibold">Orders</p>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
}

export default TableOrder;
