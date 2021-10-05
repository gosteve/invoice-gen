import React, { useContext, useRef, useEffect, useReducer } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import "./InvoiceDetails.css";

const initialState = { count: 0 };

function invoiceReducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + action.payload };
    case "sub":
      return { count: state.count - action.payload };
    default:
      break;
  }
}

export default function InvoiceDetails() {
  const { invoiceInfo, setInvoiceInfo } = useContext(InvoiceContext);
  const [state, dispatch] = useReducer(invoiceReducer, initialState);
  function changeInvoice(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInvoiceInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <>
      <form>
        <div className="space-y-1">
          <label className="font-bold text-sm">Client Name</label>
          <input className="w-full block border text-sm border-gray-400 rounded px-3 py-2 leading-6 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50" type="text" placeholder="Client Name" name="clientName" onChange={changeInvoice} value={invoiceInfo.clientName} />
        </div>
        <div className="space-y-1">
          <label className="font-bold text-sm">Invoice No.:</label>
          <input className="w-full block border text-sm border-gray-400 rounded px-3 py-2 leading-6 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50" type="text" placeholder="Client Name" name="invoiceNumber" onChange={changeInvoice} value={invoiceInfo.invoiceNumber} />
        </div>
        <div className="space-y-1">
          <label className="font-bold text-sm">Total Invoice Items: {invoiceInfo.invoiceItems.length}</label>
        </div>
      </form>
    </>
  );
}
