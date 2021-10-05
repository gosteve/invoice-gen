import React, {useContext} from "react";
import { InvoiceContext } from "../context/InvoiceContext";

function InvoiceRows({ rows }) {
const { invoiceInfo, setInvoiceInfo } = useContext(InvoiceContext);
  if (rows.length === 0) {
    return (
      <tr>
        <td className="p-4 px-3 border border-gray-300 text-gray-500 text-center" colSpan="5">
          Add new rows to the invoice
        </td>
      </tr>
    );
  } else {

    function removeRow(id) {
      invoiceInfo.invoiceItems.splice(id, 1);
      setInvoiceInfo(invoiceInfo);
    }

    return rows.map((row, index) => (
      <tr key={index} className="text-sm">
        <td className="p-4 px-3 border border-gray-300">Development</td>
        <td className="p-4 px-3 border border-gray-300">{row.description}</td>
        <td className="p-4 px-3 border border-gray-300 text-right">{row.quantity}</td>
        <td className="p-4 px-3 border border-gray-300 text-right">{row.unitPrice}</td>
        <td className="p-4 px-3 border border-gray-300 text-right">{row.total}</td>
        <td className="p-4 px-3 border border-gray-300 text-right">
          <button onClick={() => removeRow(index)}>❌</button>
        </td>
      </tr>
    ));
  }
}

export default InvoiceRows;
