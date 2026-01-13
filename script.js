const creditsInput = document.getElementById("credits");
const moneyInput = document.getElementById("money");
const resultText = document.getElementById("resultText");

const PRICE_PER_CREDIT = 100 / 470; // ≈ 0.2128

function formatBR(value) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

creditsInput.addEventListener("input", () => {
  if (creditsInput.value === "") {
    resultText.innerText = "Digite um valor para calcular";
    return;
  }

  const credits = Number(creditsInput.value);
  const total = credits * PRICE_PER_CREDIT;

  moneyInput.value = "";
  resultText.innerHTML = `
    🎯 <strong>${credits} créditos</strong><br>
    💰 Valor: <strong>R$ ${formatBR(total)}</strong>
  `;
});

moneyInput.addEventListener("input", () => {
  if (moneyInput.value === "") {
    resultText.innerText = "Digite um valor para calcular";
    return;
  }

  const money = Number(moneyInput.value);
  const credits = money / PRICE_PER_CREDIT;

  creditsInput.value = "";
  resultText.innerHTML = `
    💰 <strong>R$ ${formatBR(money)}</strong><br>
    🎯 Créditos: <strong>${Math.floor(credits)} créditos</strong>
  `;
});
