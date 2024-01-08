// // Écrivez une instruction if...else qui affiche "Bonjour" si heure est inférieure à 12, "Bon après-midi" 
// si heure est comprise entre 12 et 18, et "Bonsoir" sinon.

// var heure = 10;
var heure = prompt("entrée l'heure")

// si heure est inférieur à 12 Bonjour
if (heure < 12) {
   alert("bonjour")
}
// si heure est supérieur à 12 bonne après midi
else if (heure > 12) {
    alert("bonne après-midi")
}
// sinon aucun des deux =12  alors bonsoir
else {
    alert("bonsoir")
}