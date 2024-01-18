const principal = document.querySelector("#total").value;
let total = principal;
const numberOfTrades = document.querySelector("#number-trades").value; 
const perTrade = document.querySelector("#per-trade").value;
const perTakeProfit = document.querySelector("#per-take-profit").value;
let total_remain = 1 - perTrade;
let totalRemain;

const submitBtn = document.querySelector("#submit-btn");
const Calc = () =>{
  for (let a = 1; a < (numberOfTrades +1); a++){
    let total_perTrade = (total * perTrade);
    totalRemain = (total * total_remain);
    let recuring = total_perTrade * perTakeProfit;
    total = recuring + total;   
  }
  allTotal = total + totalRemain;

  function displayResults(){
    const resultDisplay = document.querySelector(".result-display");
    resultDisplay.innerHTML = `
      <h1>Results</h1>
      <div>
        <p>Principal Amount = ${principal}</p>
        <p>Profit on ${perTrade}% = ${total}</p>
        <p>Profit on remaining ${total_remain}% = ${totalRemain}</p>
        <p>Total Profit: ${allTotal}</p>
      </div>
    `;
  }

  return displayResults();
}
submitBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  Calc()
});