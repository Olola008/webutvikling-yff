console.log("javascript herrrr");
//Henter HTML elementene vi trenger
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
const tømBudsjett = document.getElementById("tømBudsjett");

console.log(inntektInput);
console.log(inntektKnapp);
//Lager variabler for total inntekt og total utgift
let totalInntekt = 0;
let totalUtgift = 0;
//Liste som lagrer alle inntekter og utgifter
let inntekter = [];
let utgifter = [];
//Henter tidligere lagrede inntekter og utgifter fra localstorage
const lagredeInntekter = localStorage.getItem("inntekter");
const lagredeUtgifter = localStorage.getItem("utgifter");
//Hvis det finnes lagrede inntekter, hentes de inn igjen
if (lagredeInntekter) {
  inntekter = JSON.parse(lagredeInntekter);
}
//Hvis det finnes lagrede utgifter, hentes de inn igjen
if (lagredeUtgifter) {
  utgifter = JSON.parse(lagredeUtgifter);
}
//Regner sammen alle lagrede inntekter
for (let inntekt of inntekter) {
  totalInntekt += inntekt.beløp;
}
//Regner sammen alle lagrede utgifter
for (let utgift of utgifter) {
  totalUtgift += utgift.beløp;
}

inntektSum.textContent = totalInntekt + " kr";
utgiftSum.textContent = totalUtgift + " kr";
//Regner ut saldo ved å trekke utgifter fra inntekter
const resultat = totalInntekt - totalUtgift;

saldo.textContent = resultat + " kr";
//Gjør saldoen rød hvis den er negativ
if (resultat < 0) {
  saldo.style.color = "red";
} else {
  saldo.style.color = "";
}
//Kjører når brukeren trykker "Legg til inntekt"
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
  //Lagrer inntektene slik at de beholdes etter refresh
  localStorage.setItem("inntekter", JSON.stringify(inntekter));

  inntektSum.textContent = totalInntekt + " kr";

  const resultat = totalInntekt - totalUtgift;

  saldo.textContent = resultat + " kr";

  if (resultat < 0) {
    saldo.style.color = "red";
  } else {
    saldo.style.color = "";
  }

  inntektInput.value = "";

  console.log(beløp);
});
//Kjører når brukeren trykker "Legg til utgift"
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

  saldo.textContent = resultat + " kr";
  if (resultat < 0) {
    saldo.style.color = "red";
  } else {
    saldo.style.color = "";
  }

  utgiftInput.value = "";

  console.log(beløp);
});
//Åpner utskfriftfunksjon
skrivUt.addEventListener("click", function () {
  window.print();
});
//Tømmer lagrede data og setter alle summer tilbake til 0
tømBudsjett.addEventListener("click", function () {
  localStorage.removeItem("inntekter");
  localStorage.removeItem("utgifter");

  totalInntekt = 0;
  totalUtgift = 0;

  inntektSum.textContent = "0 kr";
  utgiftSum.textContent = "0 kr";
  saldo.textContent = "0 kr";

  alert("Budsjettet skal tømmes");
});
