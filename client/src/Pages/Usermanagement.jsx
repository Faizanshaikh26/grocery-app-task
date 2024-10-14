import React, { useMemo } from "react";
import { useTable } from "react-table";
import Sidebar from "../Components/SideBar";

function Usermanagement() {
  // Sample data for the grocery table (you can replace this with dynamic data)
  const data = useMemo(
    () => [
      {
        id: 1,
        name: "Apples",
        category: "Fruits",
        stock: 50,
        price: "$2.50",
        supplier: "FreshFarms",
      },
      {
        id: 2,
        name: "Milk",
        category: "Dairy",
        stock: 30,
        price: "$1.20",
        supplier: "DairyBest",
      },
      {
        id: 3,
        name: "Bread",
        category: "Bakery",
        stock: 20,
        price: "$0.99",
        supplier: "BakeHouse",
      },
    ],
    []
  );

  // Define table columns
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id", // accessor is the "key" in the data
      },
      {
        Header: "Product Name",
        accessor: "name",
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Stock",
        accessor: "stock",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Supplier",
        accessor: "supplier",
      },
    ],
    []
  );

  // Use the `useTable` hook to define the table instance
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (

    <>

    <Sidebar>
    
    <div className="overflow-x-auto">
      <table
        {...getTableProps()}
        className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg"
      >
        <thead className="bg-gray-100 border-b">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="text-left p-4 text-gray-600 uppercase tracking-wider"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="even:bg-gray-50 hover:bg-gray-100"
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="p-4 text-gray-700 border-t"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </Sidebar>
    </>
    
  );
}

export default Usermanagement;
