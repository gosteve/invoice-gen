import React from "react";

function InvoiceRows({ rows }) {
  if (rows.length === 0) {
    return (
      <tr>
        <td className="p-4 px-3 border border-gray-300 text-gray-500 text-center" colSpan="5">
          Add new rows to the invoice
        </td>
      </tr>
    );
  } else {
    return rows.map((row, index) => (
      <tr key={index} className="text-sm">
        <td className="p-4 px-3 border border-gray-300">Development</td>
        <td className="p-4 px-3 border border-gray-300">{row.description}</td>
        <td className="p-4 px-3 border border-gray-300 text-right">{row.quantity}</td>
        <td className="p-4 px-3 border border-gray-300 text-right">{row.unitPrice}</td>
        <td className="p-4 px-3 border border-gray-300 text-right">{row.total}</td>
      </tr>
    ));
  }
}

export default InvoiceRows;
