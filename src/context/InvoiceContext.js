import React, {useState, createContext} from 'react';

export const InvoiceContext = createContext();

export function InvoiceProvider(props) {

    const [invoiceInfo, setInvoiceInfo] = useState({
        clientName: "",
        invoiceNumber: "",
        invoiceItems: [
        ]
    })

    return (
        <InvoiceContext.Provider value={{invoiceInfo, setInvoiceInfo}}>
            {props.children}
        </InvoiceContext.Provider>
    );
}