import React, { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import InvoiceItem from "./InvoiceItem";
import './InvoicePreview.css'
function InvoicePreview() {
  const { invoiceInfo } = useContext(InvoiceContext);
  return (
    <>
      <h1 className="text-3xl py-2 font-bold text-right">{invoiceInfo.clientName}</h1>
      <h2 className="text-xl py-2 font-bold text-right">Invoice No.: #{invoiceInfo.invoiceNumber}</h2>

      <div className="border border-gray-200 rounded overflow-x-auto min-w-full bg-white mt-5">
        <table className="min-w-full text-sm align-middle whitespace-nowrap">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="p-3 bg-gray-100 font-bold text-base text-left">Item Type</th>
              <th className="p-3 bg-gray-100 font-bold text-base text-left">Description</th>
              <th className="p-3 bg-gray-100 font-bold text-base text-center">Quantity</th>
              <th className="p-3 bg-gray-100 font-bold text-base text-right">Unit Price</th>
              <th className="p-3 bg-gray-100 font-bold text-base text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-collapse border-gray-100 text-base">
              <td className="p-1 px-3 border border-gray-300">Development</td>
              <td className="p-1 border border-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing</td>
              <td className="p-1 border border-gray-300">1</td>
              <td className="p-1 border border-gray-300 text-right">1</td>
              <td className="p-1 border border-gray-300 text-right font-bold">R 400.00</td>
            </tr>
            <tr className="border border-collapse border-gray-100 text-base bg-gray-100">
              <td className="p-1 px-3 border border-gray-300">Development</td>
              <td className="p-1 border border-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing</td>
              <td className="p-1 border border-gray-300">1</td>
              <td className="p-1 border border-gray-300 text-right">1</td>
              <td className="p-1 border border-gray-300 text-right font-bold">R 400.00</td>
            </tr>
            <tr className="border border-collapse border-gray-100 text-base">
              <td className="p-1 px-3 border border-gray-300">Development</td>
              <td className="p-1 border border-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing</td>
              <td className="p-1 border border-gray-300">1</td>
              <td className="p-1 border border-gray-300 text-right">1</td>
              <td className="p-1 border border-gray-300 text-right font-bold">R 400.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InvoicePreview;
