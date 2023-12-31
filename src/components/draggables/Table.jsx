import React from "react";

const Table = () => {
  return (
    <table className="w-full text-sm text-left bg-slate-300 rounded-md">
      <thead className="text-xs text-gray-700 uppercase">
        <tr>
          <th scope="col" className="px-6 py-3">
            Product name
          </th>
          <th scope="col" className="px-6 py-3">
            Color
          </th>
          <th scope="col" className="px-6 py-3">
            Category
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b rounded-md">
          <th
            scope="row"
            className="px-6 py-4 font-medium whitespace-nowrap"
          >
            Apple MacBook Pro 17"
          </th>
          <td className="px-6 py-4">Silver</td>
          <td className="px-6 py-4">Laptop</td>
          <td className="px-6 py-4">$2999</td>
        </tr>
        <tr className="bg-white border-b rounded-md bg-slate-50">
          <th
            scope="row"
            className="px-6 py-4 font-medium whitespace-nowrap"
          >
            Microsoft Surface Pro
          </th>
          <td className="px-6 py-4">White</td>
          <td className="px-6 py-4">Laptop PC</td>
          <td className="px-6 py-4">$1999</td>
        </tr>
        <tr className="bg-white border-b rounded-md">
          <th
            scope="row"
            className="px-6 py-4 font-medium whitespace-nowrap"
          >
            Magic Mouse 2
          </th>
          <td className="px-6 py-4">Black</td>
          <td className="px-6 py-4">Accessories</td>
          <td className="px-6 py-4">$99</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
