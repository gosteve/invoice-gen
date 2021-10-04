import React, { useEffect } from "react";
export default function FormInput({ name, placeholder = "", value, setValue }) {

    function changeInvoice(e){
        setValue(e.target.value)
    }

    return (
    <>
      <div className="space-y-1">
        <label className="font-bold text-sm">{name}</label>
        <input className="w-full block border text-sm border-gray-400 rounded px-3 py-2 leading-6 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50" type="text" placeholder={placeholder} onChange={changeInvoice} value={value}/>
      </div>
    </>
  );
}
