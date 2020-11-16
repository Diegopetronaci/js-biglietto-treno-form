var btnGenera = document.getElementById("btn_genera");
var btnAnnulla = document.getElementById("btn_annulla");

btnGenera.addEventListener("click", function () {
  console.log("Genera il ticket");


  var fullNameImput = document.getElementById("full_name");
  var kmImput = document.getElementById("km_totali");
  var fasciaImput = document.getElementById("fascia")

  //per collegare bottoni a js
  var fullName = fullNameImput.value;
  var km = kmImput.value;
  var fascia = fasciaImput.value;
  console.log(fullName, km, fascia);

  //calcolo biglietto treno
  var costPerKm = 0.21;
  var ticketPrice = costPerKm * km;
  console.log(ticketPrice);

  if (fascia == "Minorenne") {
    console.log("Applica 20% di sconto");
    offer = "Sconto Minorenne";

  } else if (fascia == "over_65") {
    console.log("Applica 40% di sconto");
    offer = "Sconto Silver";
  }

  //Seleziona Elementi del BIGLIETTO
  var elName = document.getElementById("nome-passeggero")
  var elSconto = document.getElementById("sconto");
  var elCarrozza = document.getElementById("carrozza");
  var elCodiceCp = document.getElementById("codice_cp");
  var elCostoBiglietto = document.getElementById("costo_biglietto");

  //generatore numero Carrozza
  var numberCarrozza = Math.floor(Math.random() * 9) + 1;
  var codiceCp = Math.floor(Math.random() * (100000 - 90000) + 1)
  //dati biglietto
  elName.innerHTML = fullName;
  elSconto.innerHTML = offer;
  elCostoBiglietto.innerHTML = "€ " + ticketPrice;
  elCarrozza.innerHTML = numberCarrozza;
  elCodiceCp.innerHTML = codiceCp;
  document.getElementById("biglietto").style.display = "block"
});


btnAnnulla.addEventListener("click", function () {
  console.log("Annulla operazione");
  document.getElementById("biglietto").style.display = "none";
  var fullNameImput = document.getElementById("full_name");
  var kmImput = document.getElementById("km_totali");
  var fasciaImput = document.getElementById("fascia");
});
