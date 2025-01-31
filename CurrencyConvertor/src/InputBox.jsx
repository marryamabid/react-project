import React ,{useId} from "react";


function InputBox({ label,
    amount, 
    onAmountChange,
    oncurrencychange,
    currencyOptions={},
    selectCurrency='usd',
    amountDisable=false,
    currencyDisable=false,
    

    className = "" }) 
    {
  const amountInputID= useId()
  return (
    
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block" htmlFor={amountInputID}>{label}</label>
        <input
          id={amountInputID}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e)=>onAmountChange &&
          onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select 
        value={selectCurrency}
        disabled={currencyDisable}
        onChange={(e)=>{
        oncurrencychange &&
        oncurrencychange(e.target.value)
        }}
        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
          {currencyOptions.map((Currency)=>
          <option key={Currency} value={Currency}>
            {Currency}
          </option>
          )}
        </select>
      </div>
    </div>
  );
}
export default InputBox;
