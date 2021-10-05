import React, { useState, useEffect, useContext } from "react";
import { useReducer } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import "./InvoicePreview.css";
import InvoiceRows from "./InvoiceRows";

const initialFormState = {
  description: "",
  quantity: 0,
  unitPrice: 0,
};

const initialItemsState = [];

function lineReducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "SUB":
      return 0;
    default:
      return state;
  }
}

function InvoicePreview() {
  const { invoiceInfo, setInvoiceInfo } = useContext(InvoiceContext);
  const [newInvoiceLine, setNewInvoiceLine] = useState(initialFormState);
  const [state, dispatch] = useReducer(lineReducer, initialItemsState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  function changeInvoiceLine(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === "number" ? parseInt(target.value) : target.value;
    setNewInvoiceLine((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function addToInvoice(e) {
    e.preventDefault();
    console.log(invoiceInfo);
    setInvoiceInfo({ ...invoiceInfo }, { invoiceItems: [...invoiceInfo.invoiceItems, newInvoiceLine] });
    dispatch({ type: "ADD", payload: newInvoiceLine });
    setNewInvoiceLine({ ...initialFormState });
  }

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
            <InvoiceRows rows={state} />
          </tbody>
        </table>
        <form class="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:space-x-2 p-2 mb-5">
          <div>
            <label for="tk-form-layouts-inline-email" class="sr-only">
              Item Type
            </label>
            <select name="" id="" className="form-select block">
              <option>Development</option>
            </select>
          </div>
          <div>
            <label for="tk-form-layouts-inline-email" class="sr-only">
              Description
            </label>
            <input
              class="block border border-gray-200 rounded px-3 py-2 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              type="text"
              id="tk-form-layouts-inline-desc"
              placeholder="Description"
              name="description"
              onChange={changeInvoiceLine}
              value={newInvoiceLine.description}
            />
          </div>
          <div>
            <label for="tk-form-layouts-inline-password" class="sr-only">
              Quantity
            </label>
            <input
              class="block border border-gray-200 rounded px-3 py-2 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              type="number"
              id="tk-form-layouts-inline-qty"
              name="quantity"
              placeholder="Quantity"
              onChange={changeInvoiceLine}
              value={newInvoiceLine.quantity}
            />
          </div>
          <div>
            <label for="tk-form-layouts-inline-password" class="sr-only">
              Unit Price
            </label>
            <input
              class="block border border-gray-200 rounded px-3 py-2 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              type="number"
              id="tk-form-layouts-inline-unit-price"
              name="unitPrice"
              placeholder="Unit Price"
              onChange={changeInvoiceLine}
              value={newInvoiceLine.unitPrice}
            />
          </div>

          <button
            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-green-400 bg-green-400 text-white hover:text-white hover:bg-green-400 hover:border-green-400 focus:ring focus:ring-green-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
            onClick={addToInvoice}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default InvoicePreview;
