var afficheCombat = document.getElementById('elies');

var war = {
    atk: 16,
    vie: 100,
    attaque: function(cible){
        var degat = cible.vie - this.atk 
        cible.vie = degat
        if (cible.vie <= 0) {
        	cible.vie = 0
        	console.log('Vous n\'avez plus de pv, vous ete mort')
        }else{
        	console.log('Le guarrier attaque !')
       		 console.log('il reste au voleur ' + cible.vie + ' pdv')
        }  
    },
    isalive: function(){
    	if (this.vie <= 0) {this.vie = 0}
    } 
}

var rogue = {
    atk: 18,
    vie: 100,
    potion: 1,
    attaque: function(cible){
        console.log('Le rogue attaque !')
        var degat = cible.vie - this.atk 
        cible.vie = degat
        if (cible.vie <= 0) {
        	cible.vie = 0
        }else{
       		 console.log('il reste au guerrier ' + cible.vie + ' pdv')
        }        
    },
    regen: function(){
        if(this.potion == 0){
            console.log('il ne vous reste plus de potion.')
        }else{
            this.potion = this.potion - 1
            console.log('Vous utiliser une potion.')
            console.log('Vous avez ' + this.vie + ' pdv')
            this.vie = this.vie + 20
            console.log('Votre potion fait monté vos pv à ' + this.vie)
            if(this.vie > 100){
                this.vie = 100
            }


            console.log('Vous avez maintenant ' + this.vie + ' pdv')
        }
    },
    isalive: function(){
    	if (this.vie <= 0) {this.vie = 0}
    } 
}
var life = document.getElementById('life');

var potion = document.getElementById('potion');
var element = document.getElementById('attaque');
element.onclick = function () {
    war.attaque(rogue)
    life.style.width = rogue.vie+"px";
};

potion.onclick = function() {
	rogue.regen()
    life.style.width = rogue.vie+"px";
};