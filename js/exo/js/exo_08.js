/*  do{
    var nb = parseInt(prompt("Entrez un nb entre 50 et 100"));
        var verif = nb > 50 || nb < 100;
        if (verif){
        console.log("Votre nombre est " + nb);
    }
}while(!verif);  */
/*  var text = prompt("ça vas ?");
text = text.toLowerCase();
while(text != "oui" && text != "non"){
    text = prompt("ça vas ?");
    if(text == 'oui' && text =='non'){
        alert("Perdu ! Looser !");
    }else if(text == "elies"){
        alert("Bien jouer Champion ! ");
    }
} */

/* var text = "";
var i = 0;
while( i < 8) {
    console.log(text += "#");
    i++;
} */
var nb1 = getRandomInt(100);
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
var i = 0;
var plus = "C'est plus";
var moin = "c'est moin";
while(i < 6){
    var nb2 = parseInt(prompt('Nombre : '));
    if(nb2 > nb1){
        console.log(moin += " ");
    }else if(nb2 < nb1){
        console.log(plus += " ");
    }else{
        console.log("gagner!");
        break;
    }
    i++;
}
console.log("fini " + " Le nombre était " + nb1);