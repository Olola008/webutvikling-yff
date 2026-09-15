console.log("javascript herrrr");

const inntektInput = document.getElementById("inntekt");
const inntektKnapp = document.getElementById("inntektKnapp");
const inntektSum = document.getElementById("inntektSum");

const utgiftInput = document.getElementById("utgift");
const utgiftKnapp = document.getElementById("utgiftKnapp");
const utgiftSum = document.getElementById("utgiftSum");

console.log(inntektInput);
console.log(inntektKnapp);

let totalInntekt = 0;
let totalUtgift = 0;

inntektKnapp.addEventListener("click", function () {
  const beløp = Number(inntektInput.value);

  totalInntekt += beløp;

  inntektSum.textContent = totalInntekt + " kr";

  inntektInput.value = "";

  console.log(beløp);
});

utgiftKnapp.addEventListener("click", function () {
  const beløp = Number(utgiftInput.value);

  totalUtgift += beløp;

  utgiftSum.textContent = totalUtgift + " kr";

  utgiftInput.value = "";

  console.log(beløp);
});
