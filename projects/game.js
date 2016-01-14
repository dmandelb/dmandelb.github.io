

var rileyJones = {
	name: "Riley Jones",
	HP: 100,
	Damage: 19,
	Defense: 12,
	Healing: 7
}

var jerkFace = {
	name: "Jerkface McNastypants",
	HP: 100,
	Damage: 24,
	Defense: 9,
	dead: false
}
var game = {
	over: false,
	reset: function() {
		rileyJones.HP = 100;
		jerkFace.HP = 100;
		jerkFace.dead = false;
		game.over = false;
		$("#text_box").text("Are you ready?");
	},

}
var getHit = function () {
	if ((Math.random()*20)+1 >= rileyJones.Defense) {
		rileyJones.HP -= jerkFace.Damage;
		$("#text_box").append(jerkFace.name + " has hit you! You are down to " + rileyJones.HP + " ");
	} 
	else{
		$("#text_box").append(jerkFace.name + " has missed you! Ballet school has paid off! You are still at " + rileyJones.HP + ".");
	};
	if (rileyJones.HP <= 0) {
		game.over = true;
		$("#text_box").append("You have died. " + jerkFace.name + " is now doing a very lewd victory dance on your corpse. ");
	};
}
var attack = function() {
	if (game.over == true) {
		$("#text_box").append("The game is over. Please reset. ");
	}
	else if ((Math.random()*20)+1 >= jerkFace.Defense) {
		jerkFace.HP -= rileyJones.Damage;
		$("#text_box").text("You have hit " + jerkFace.name + "! " + jerkFace.name + " is now at " + jerkFace.HP + "! ");
	} 
	else{
		$("#text_box").text("You have missed " + jerkFace.name + "! His HP is still at " + jerkFace.HP + ". Whoops! ");
	};
	if (jerkFace.HP <= 0 && game.over == false) {
		jerkFace.dead = true;
		game.over = true;
		$("#text_box").text("You have beaten " + jerkFace.name + "! Great songs will be sung of your victory this day! ");
	}
	else if (jerkFace.HP > 0 && game.over == false) {
		getHit();
	};
}

var heal = function() {
	if (game.over) {
		$("#text_box").append("The game is already over. Please reset.")
	}
	else if ((Math.random()*20)+1 >= rileyJones.Healing) {
		rileyJones.HP += 30;
		$("#text_box").text("Your HP has increased to " + rileyJones.HP + ". You feel a bit better. ");
	} else{
		$("#text_box").text("You have failed to heal yourself. You are still at " + rileyJones.HP + ". Maybe you should have paid better attention during Medic training. ");
	};
	if (game.over == false) {
		$("#text_box").append(jerkFace.name + " is now attacking! You'd better be ready! ");
		getHit();
	};
}

// var offense = $("#attack_button");
// var defense = $("#heal_button");
// offense.onclick = attack;
// defense.onclick = heal;
$(document).ready(function(){
	$("#attack_button").click(function(e){
		e.preventDefault;
		attack();
	});
	$("#heal_button").click(function(d){
		d.preventDefault;
		heal();
	});
	$("#reset_button").click(function(x){
		x.preventDefault;
		game.reset();
	});
});