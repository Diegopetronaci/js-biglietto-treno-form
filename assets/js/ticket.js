var btnGenera = document.getElementById("btn_genera");
var btnAnnulla = document.getElementById("btn_annulla");

btnGenera.addEventListener("click", function () {
  console.log("Genera il ticket");
});
btnAnnulla.addEventListener("click", function () {
  console.log("Annulla operazione");
});

var fullNameImput = document.getElementById("full_name");
var kmImput = document.getElementById("km_totali");
var fasciaImput = document.getElementById("fascia")

//per collegare bottoni a js
var fullName = fullNameImput.value;
var km = kmImput.value;
