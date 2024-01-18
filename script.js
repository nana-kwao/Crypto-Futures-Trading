const submitBtn = document.querySelector("#submit-btn");

const Calc = () => {
  const principal = parseFloat(document.querySelector("#total").value);
  let total = principal;
  const numberOfTrades = parseInt(document.querySelector("#number-trades").value);
  const perTrade = parseFloat(document.querySelector("#per-trade").value);
  const perTakeProfit = parseFloat(document.querySelector("#per-take-profit").value);
  let total_remain = 1 - perTrade;
  let totalRemain;

  for (let a = 1; a < (numberOfTrades + 1); a++) {
    let total_perTrade = (total * perTrade);
    totalRemain = (total * total_remain);
    let recurring = total_perTrade * perTakeProfit;
    total = recurring + total;
  }

  const allTotal = total + totalRemain;

  function displayResults() {
    const resultDisplay = document.querySelector(".result-display");
    resultDisplay.innerHTML = `
      <h1>Results</h1>
      <div>
        <p>Principal Amount = ${principal}</p>
        <p>Profit on ${perTrade}% = ${total}</p>
        <p>Profit on remaining ${total_remain * 100}% = ${totalRemain}</p>
        <p>Total Profit: ${allTotal}</p>
      </div>
    `;
  }

  displayResults();
};

submitBtn.addEventListener("click",Calc);