console.log("javascript herrrr");

const inntektInput = document.getElementById("inntekt");
const inntektKnapp = document.getElementById("inntektKnapp");
const inntektSum = document.getElementById("inntektSum");

const utgiftInput = document.getElementById("utgift");
const utgiftKnapp = document.getElementById("utgiftKnapp");
const utgiftSum = document.getElementById("utgiftSum");

const saldo = document.getElementById("saldo");

console.log(inntektInput);
console.log(inntektKnapp);

let totalInntekt = 0;
let totalUtgift = 0;

inntektKnapp.addEventListener("click", function () {
  const beløp = Number(inntektInput.value);

  if (inntektInput.value === "") {
    alert("Feltet er tomt");
  }

  totalInntekt += beløp;

  inntektSum.textContent = totalInntekt + " kr";

  const resultat = totalInntekt - totalUtgift;

  saldo.textContent = resultat + "kr";

  if (resultat < 0) {
    saldo.style.color = "red";
  } else {
    saldo.style.color = "";
  }

  inntektInput.value = "";

  console.log(beløp);
});

utgiftKnapp.addEventListener("click", function () {
  const beløp = Number(utgiftInput.value);

  totalUtgift += beløp;

  utgiftSum.textContent = totalUtgift + " kr";

  const resultat = totalInntekt - totalUtgift;

  saldo.textContent = resultat + "kr";
  if (resultat < 0) {
    saldo.style.color = "red";
  } else {
    saldo.style.color = "";
  }

  utgiftInput.value = "";

  console.log(beløp);
});
