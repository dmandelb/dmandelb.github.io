

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
var getHit = function () {
	if ((Math.random()*20)+1 >= rileyJones.Defense) {
		rileyJones.HP -= jerkFace.Damage;
		document.getElementById("text_box").innerHTML += (jerkFace.name + " has hit you! You are down to " + rileyJones.HP + " ")
	} 
	else{
		document.getElementById("text_box").innerHTML += (jerkFace.name + " has missed you! Ballet school has paid off! ")
	};
	if (rileyJones.HP <= 0) {
		document.getElementById("text_box").innerHTML += ("You have died. " + jerkFace.name + " is now doing a very lewd victory dance on your corpse. ")
	};
}
var attack = function() {
	if (jerkFace.HP <= 0) {
		jerkFace.dead = true;
		document.getElementById("text_box").innerHTML = ("You already defeated " + jerkFace.name + ". Beating a defeated enemy is a war crime. Don't be that person. ")
	}
	else if ((Math.random()*20)+1 >= jerkFace.Defense) {
		jerkFace.HP -= rileyJones.Damage;
		document.getElementById("text_box").innerHTML = "You have hit " + jerkFace.name + "! " + jerkFace.name + " is now at " + jerkFace.HP + "! "
	} 
	else{
		document.getElementById("text_box").innerHTML = ("You have missed " + jerkFace.name + "! Whoops! ")
	};
	if (jerkFace.HP <= 0) {
		document.getElementById("text_box").innerHTML += ("You have beaten " + jerkFace.name + "! Great songs will be sung of your victory this day! ");
	}
	else {
		getHit();
	};
}

var heal = function() {
	if ((Math.random()*20)+1 >= rileyJones.Healing) {
		rileyJones.HP += 30;
		document.getElementById("text_box").innerHTML = ("Your HP has increased to " + rileyJones.HP + ". You feel a bit better. ")
	} else{
		document.getElementById("text_box").innerHTML = ("You have failed to heal yourself. Maybe you should have paid better attention during Medic training. ")
	};
	document.getElementById("text_box").innerHTML += (jerkFace.name + " is now attacking! You'd better be ready! ")
	getHit();
}

var offense = document.getElementById('attack_button');
var defense = document.getElementById('heal_button');
offense.onclick = attack;
defense.onclick = heal;