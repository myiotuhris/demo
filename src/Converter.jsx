import React,{Component, useState,useMemo} from "react";
import './App.css';
export default function Converter(){
    const [value,setValue]=useState(0);
    const [fromCurrency, setFromCurrency] = useState("INR");
    const [toCurrency, setToCurrency] = useState("USD");
    const [currencies] = useState(["EUR", "USD","XCD","GEL","HTG","INR","ILS","KZT","KWD","LSL"]);
    // const [curr_dicts]=useState([{"currency":"XCD","name":"East Caribbean dollar","symbol":"$"},{"currency":"EUR","name":"European euro","symbol":"€"},
    // {"currency":"GEL","name":"Georgian lari","symbol":"₾"},{"currency":"HTG","name":"Haitian gourde","symbol":"G"},
    // {"currency":"INR","name":"Indian rupee","symbol":"₹"},{"currency":"ILS","name":"Israeli new sheqel","symbol":"₪"},{"currency":"KZT","name":"Kazakhstani tenge","symbol":"лв"},
    // {"currency":"KWD","name":"Kuwaiti dinar","symbol":"د.ك"},{"currency":"LSL","name":"Lesotho loti","symbol":"L"},
    // {"currency":"USD","name":"U.S. Dollar","symbol":"$"}]);
    const [result, setResult] = useState(0);
    const fromCurrencies = useMemo(() => {
      return currencies;
    }, [currencies, toCurrency]);
  
    const toCurrencies = useMemo(() => {
      return currencies;
    }, [currencies, fromCurrency]);
    const convert = async (e) => {
      e.preventDefault();
      const formValid = +value >= 0 && fromCurrency && toCurrency;
      if (!formValid) {
        return;
      }
      const res = await fetch(
        `https://free.currconv.com/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=dd8e835c3d0a875afe5e`
      );
      const data= await res.json();
      let rate=data[`${fromCurrency}_${toCurrency}`];
      console.log(data);
      setResult(value * rate);
      
    };
    
    return (
      <div style={{marginLeft: "25px"}}>
        <form onSubmit={convert}>
          <div>
            <label style={{paddingRight:"30px",}}>Enter a value in {fromCurrency}</label>
            <input style={{paddingLeft:"10px",width:"70px",}}value={value} onChange={(e) => setValue(e.target.value)} />
          </div>
          <div style={{marginTop:"20px"}}>
            <label style={{paddingRight:"30px",}}>Convert From </label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {fromCurrencies.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div style={{marginTop:"20px"}}>
            <label style={{paddingRight:"30px",}}>Convert To </label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {toCurrencies.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div >
          <button style={{marginTop:"20px",alignItems:"center"}}type="submit">Convert</button>
        </form>
        <div style={{textAlign:"center"}}>
          {value} {fromCurrency} is {result.toFixed(2)} {toCurrency}
        </div>
      </div>
    );
  }