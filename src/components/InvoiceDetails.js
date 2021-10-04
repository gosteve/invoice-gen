import React, {useContext} from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import FormInput from "./FormInput";

export default function InvoiceDetails() {
  const {clientName, setClientName, invoiceNumber, setInvoiceNumber} = useContext(InvoiceContext);
  return (
    <>
      <form onsubmit="return false;" className="space-y-6">
        <FormInput name="Client Name" placeholder="Client Name" value={clientName} setValue={setClientName} />
        <FormInput name="Invoice No." placeholder="Invoice No." value={invoiceNumber} setValue={setInvoiceNumber} />
      </form>
    </>
  );
}
