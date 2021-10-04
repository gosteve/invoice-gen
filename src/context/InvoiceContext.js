import React, {useState, createContext} from 'react';

export const InvoiceContext = createContext();

export function InvoiceProvider(props) {
    const [clientName, setClientName] = useState("Demo Company")
    const [invoiceNumber, setInvoiceNumber] = useState("00001")

    /**
     * Add dummy data for the invoice items for now.
     */
    const [invoiceItems, setInvoiceItems] = useState([
        {"id": 1, "desc": "Develop something", "unit": 300, "total": 300},
        {"id": 2, "desc": "Develop something", "unit": 300, "total": 2300}
    ])

    return (
        <InvoiceContext.Provider value={{clientName, setClientName, invoiceNumber, setInvoiceNumber, invoiceItems, setInvoiceItems}}>
            {props.children}
        </InvoiceContext.Provider>
    );
}