import React, {useState, createContext} from 'react';

export const InvoiceContext = createContext();

export function InvoiceProvider(props) {

    const [invoiceInfo, setInvoiceInfo] = useState({
        clientName: "",
        invoiceNumber: "",
        invoiceItems: [
            {"id": 1, "desc": "Develop something", "unit": 300, "total": 300},
            {"id": 2, "desc": "Develop something", "unit": 300, "total": 2300}
        ]
    })

    return (
        <InvoiceContext.Provider value={{invoiceInfo, setInvoiceInfo}}>
            {props.children}
        </InvoiceContext.Provider>
    );
}