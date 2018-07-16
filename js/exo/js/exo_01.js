var prix = Number.parseInt(prompt("Entrez un chiffre."));
if (Number.isInteger(prix)){
    console.log("Votre article vaux " + prix + " HT et " + prix * 1.20 + " TTC.");
}else{
    console.log("Tu veux faire ton Malin ?");
}