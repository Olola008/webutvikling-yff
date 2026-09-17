console.log("javascript herrrr");

const inntektInput = document.getElementById("inntekt");
const inntektKnapp = document.getElementById("inntektKnapp");
const inntektSum = document.getElementById("inntektSum");
const inntektType = document.getElementById("inntektType");

const utgiftInput = document.getElementById("utgift");
const utgiftKnapp = document.getElementById("utgiftKnapp");
const utgiftSum = document.getElementById("utgiftSum");
const utgiftType = document.getElementById("utgiftType");

const saldo = document.getElementById("saldo");
const skrivUt = document.getElementById("skrivUt");

console.log(inntektInput);
console.log(inntektKnapp);

let totalInntekt = 0;
let totalUtgift = 0;

let inntekter = [];
let utgifter = [];

const lagredeInntekter = localStorage.getItem("inntekter");
const lagredeUtgifter = localStorage.getItem("utgifter");

if (lagredeInntekter) {
  inntekter = JSON.parse(lagredeInntekter);
}
if (lagredeUtgifter) {
  utgifter = JSON.parse(lagredeUtgifter);
}

for (let inntekt of inntekter) {
  totalInntekt += inntekt.beløp;
}

for (let utgift of utgifter) {
  totalUtgift += utgift.beløp;
}

inntektSum.textContent = totalInntekt + " kr";
utgiftSum.textContent = totalUtgift + " kr";

const resultat = totalInntekt - totalUtgift;

saldo.textContent = resultat + " kr";

if (resultat < 0) {
  saldo.style.color = "red";
} else {
  saldo.style.color = "";
}

inntektKnapp.addEventListener("click", function () {
  const beløp = Number(inntektInput.value);
  const type = inntektType.value;
  const nyPost = document.createElement("li");

  nyPost.textContent = type + ": " + beløp + " kr";
  document.getElementById("postListe").appendChild(nyPost);

  console.log(inntektType.value);

  if (inntektInput.value === "") {
    alert("Feltet er tomt");
  }

  totalInntekt += beløp;

  inntekter.push({
    type: type,
    beløp: beløp,
  });

  localStorage.setItem("inntekter", JSON.stringify(inntekter));

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
  const type = utgiftType.value;
  const nyPost = document.createElement("li");

  nyPost.textContent = type + ": " + beløp + " kr";
  document.getElementById("postListe").appendChild(nyPost);

  totalUtgift += beløp;

  utgifter.push({
    type: type,
    beløp: beløp,
  });

  localStorage.setItem("utgifter", JSON.stringify(utgifter));

  utgiftSum.textContent = totalUtgift + " kr";

  const resultat = totalInntekt - totalUtgift;

  if (utgiftInput.value === "") {
    alert("Feltet er tomt");
  }

  saldo.textContent = resultat + "kr";
  if (resultat < 0) {
    saldo.style.color = "red";
  } else {
    saldo.style.color = "";
  }

  utgiftInput.value = "";

  console.log(beløp);
});
skrivUt.addEventListener("click", function () {
  window.print();
});
