import React from "react";

function InvoiceItem({ invoiceItem }) {
  return (
    <>
      <tr class="border-b border-gray-200">
        <td class="p-2">
          <p class="font-medium">{invoiceItem.desc}</p>
        </td>
        <td class="p-2 text-gray-500">{invoiceItem.unit}</td>
        <td class="p-2 text-center">
          <div class="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-green-700 bg-green-200">Agency</div>
        </td>
        <td class="p-2 font-bold text-right text-sm text-gray-500">R{invoiceItem.total}</td>
      </tr>
    </>
  );
}

export default InvoiceItem;
