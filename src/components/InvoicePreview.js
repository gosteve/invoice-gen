import React, { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import InvoiceItem from "./InvoiceItem";
import './InvoicePreview.css'
function InvoicePreview() {
  const { invoiceInfo } = useContext(InvoiceContext);
  return (
    <>
      <h1 className="text-gray-500 text-3xl py-2 font-bold text-right">{invoiceInfo.clientName}</h1>
      <h2 className="text-gray-500 text-xl py-2 font-bold text-right">Invoice No.: #{invoiceInfo.invoiceNumber}</h2>

      <div class="border border-gray-200 rounded overflow-x-auto min-w-full bg-white mt-5">
        <table class="min-w-full text-sm align-middle whitespace-nowrap">
          <thead>
            <tr class="border-b border-gray-200">
              <th class="p-3 text-gray-500 bg-gray-100 font-bold text-sm uppercase text-left">Name</th>
              <th class="p-3 text-gray-500 bg-gray-100 font-bold text-sm uppercase text-left">Email</th>
              <th class="p-3 text-gray-500 bg-gray-100 font-bold text-sm uppercase text-center">Plan</th>
              <th class="p-3 text-gray-500 bg-gray-100 font-bold text-sm uppercase text-right">Total</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </>
  );
}

export default InvoicePreview;
