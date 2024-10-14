import React, { useMemo } from "react";
import { useTable } from "react-table";
import Sidebar from "../Components/SideBar";

function Usermanagement() {
  const data = useMemo(
    () => [
      { id: 1, name: "Apples", category: "Fruits", supplier: "FreshFarms" },
      { id: 2, name: "Milk", category: "Dairy", supplier: "DairyBest" },
      { id: 3, name: "Bread", category: "Bakery", supplier: "BakeHouse" },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Product Name", accessor: "name" },
      { Header: "Category", accessor: "category" },
      { Header: "Supplier", accessor: "supplier" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <Sidebar>
      <div className="overflow-x-auto">
        <table {...getTableProps()} className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-100 border-b">
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    className="text-left p-2 text-gray-600 uppercase tracking-wider text-sm" // Reduced padding and font size
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="even:bg-gray-50 hover:bg-gray-100">
                  {row.cells.map(cell => (
                    <td
                      {...cell.getCellProps()}
                      className="p-2 text-gray-700 border-t text-sm" // Reduced padding and font size
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Sidebar>
  );
}

export default Usermanagement;
