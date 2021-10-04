import React, { useState, useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import InvoiceItem from "./InvoiceItem";
import './InvoicePreview.css'
function InvoicePreview() {

  const { invoiceInfo } = useContext(InvoiceContext);
  const [showAddItem, setShowAddItem] = useState(false);

  const onClick = () => setShowAddItem(!showAddItem);

  return (
    <>
      <h1 className="text-3xl py-2 font-bold text-right">{invoiceInfo.clientName}</h1>
      <h2 className="text-xl py-2 font-bold text-right">Invoice No.: #{invoiceInfo.invoiceNumber}</h2>

      <div className="rounded overflow-x-auto min-w-full bg-white mt-5">
        <table className="min-w-full text-sm align-middle whitespace-nowrap mb-4">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="p-3 border border-gray-300 font-bold text-base text-left">Item Type</th>
              <th className="p-3 border border-gray-300 font-bold text-base text-left">Description</th>
              <th className="p-3 border border-gray-300 font-bold text-base text-right">Quantity</th>
              <th className="p-3 border border-gray-300 font-bold text-base text-right">Unit Price</th>
              <th className="p-3 border border-gray-300 font-bold text-base text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-collapse border-gray-100 text-base">
              <td className="p-4 px-3 border border-gray-300">Development</td>
              <td className="p-4 border border-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing</td>
              <td className="p-4 border border-gray-300 text-right">1</td>
              <td className="p-4 border border-gray-300 text-right">1</td>
              <td className="p-4 border border-gray-300 text-right font-bold">R 400.00</td>
            </tr>
            <tr className="border border-collapse border-gray-100 text-base bg-gray-100">
              <td className="p-4 px-3 border border-gray-300">Development</td>
              <td className="p-4 border border-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing</td>
              <td className="p-4 border border-gray-300 text-right">1</td>
              <td className="p-4 border border-gray-300 text-right">1</td>
              <td className="p-4 border border-gray-300 text-right font-bold">R 400.00</td>
            </tr>
            <tr className="border border-collapse border-gray-100 text-base">
              <td className="p-4 px-3 border border-gray-300">Development</td>
              <td className="p-4 border border-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing</td>
              <td className="p-4 border border-gray-300 text-right">1</td>
              <td className="p-4 border border-gray-300 text-right">1</td>
              <td className="p-4 border border-gray-300 text-right font-bold">R 400.00</td>
            </tr>
          </tbody>
        </table>
        {showAddItem ? (
          <form onsubmit="return false;" class="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:space-x-2">
            <div>
              <label for="tk-form-layouts-inline-email" class="sr-only">Email</label>
              <input class="block border border-gray-200 rounded px-3 py-2 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" type="email" id="tk-form-layouts-inline-email" placeholder="Email" />
            </div>
            <div>
              <label for="tk-form-layouts-inline-password" class="sr-only">Password</label>
              <input class="block border border-gray-200 rounded px-3 py-2 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" type="password" id="tk-form-layouts-inline-password" placeholder="Password" />
            </div>
            <button type="submit" class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
              Login
            </button>
        </form>) : 'Nothing!'}
        <button className="bg-green-400 text-white font-bold p-2 rounded" onClick={ onClick }>Add Line</button>
      </div>
    </>
  );
}

export default InvoicePreview;
