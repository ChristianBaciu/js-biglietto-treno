let nKM = prompt ("Numero Km");
let passeggero = prompt ("Età del passeggero");
let biglietto = 0.21;
let totale = nKM * biglietto;

if(passeggero < 18){
    totale = (totale * 0.2).toFixed(2)
}
else if(passeggero > 65){
    totale = (totale * 0.4).toFixed(2)
}

document.writeln("il costo totate del biglietto è di" + " " + totale + "€")
console.log("nKM")
console.log("passeggero")
console.log("0.21")