const submitBtn = document.querySelector("#submit-btn");

const Calc = () => {
  const principal = parseFloat(document.querySelector("#total").value);
  let total = principal;
  const numberOfTrades = parseInt(document.querySelector("#number-trades").value);
  let perTrade = parseFloat(document.querySelector("#per-trade").value);
  perTrade = parseFloat(perTrade / 100);
  let perTakeProfit = parseFloat(document.querySelector("#per-take-profit").value);
  perTakeProfit = parseFloat(perTakeProfit / 100);
  let total_remain = 1 - perTrade;
  total_remain = parseFloat(total_remain.toFixed(2));
  let totalRemain;
  let leverage = parseFloat(document.querySelector("#leverage").value);

  for (let a = 1; a < (numberOfTrades + 1); a++) {
    let total_perTrade = (total * perTrade);
    totalRemain = (total * total_remain);
    let recurring = (total_perTrade * leverage) * perTakeProfit;
    total = recurring + total;
  }

  const allTotal = parseFloat(total);

  function displayResults() {
    const resultDisplay = document.querySelector(".result-display");
    resultDisplay.innerHTML = `
      <h1 id="result-h1">Results</h1>
      <div class="result-p">
        <p>Principal Amount = ${principal}</p>
        <p>Profit on ${perTrade}% = ${total}</p>
        <p>Profit on remaining ${total_remain}% = ${totalRemain}</p>
        <p>Total Profit: ${allTotal}</p>
      </div>
    `;
  }

  displayResults();
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  Calc();
});