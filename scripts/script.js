//this is my javascript final project.
//this is my button event (event) which also counts as a function without arguements.
function startGame() {




//the main character is created using an object literal
var character = {
    health: 20,
    attack: 20,
    magic: 20,

    name: prompt("welcome to the exciting worl of generic fantasy One... the most... exciting generic fantasy. that is your name?"),

    class: prompt("Ok... so right now your character has base stats of health, magic, and attack all set to 20. we got 3 classes for you to choose from. a wizard, a warrior, and a fat guy. wizard increases magic by an extra 20, warrior increases attack by 20, and fat guy increases health by 30. take ya pick. ")
};
//if statement gives default name and warning of no class
if (!character.name) {
    alert("since you didnt give me a name you are gonna be called Generic fantasy character. oh, c'mon its not so bad! it fits with the theme!");
    character.name = "Generic fantasy character"
};

if(!character.class) {
    alert("YOu didnt pick a class so that meand you are nobody special. ill let you keep going but im warning you, your gonna die out there.");
};

//more if statements for classes that gives perks
if(character.class === "warrior") {
    character.attack += 20;
    console.log(character.attack);
};
if(character.class === "wizard") {
    character.magic += 20;
    alert("sorry, but there is no use for magic in this world, it will benefit you nothing")
    console.log(character.magic);
};
if(character.class === "fat guy") {
    character.health += 30;
    console.log(character.health);
};


//object constructor for enemies. also counts as a function with arguements.

function enemy(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
};

var Narrator = new enemy("Narrator", 30, 5);
alert("ok so for your first battle you get to fight me! lets see what you can do!")
alert("Narrators health is " + Narrator.health);



var killedEnemies = [];

//while loop used for battle
while (true) {
    var hit = prompt("type attack to attack your enemy")
    if (hit === "attack") {
        Narrator.health -= character.attack;
        if (Narrator.health <= 0 ) {break;}
    } else {
        character.health -= Narrator.attack
        alert("you have been attack and recieved " + Narrator.attack + " damage");
    };
    alert("Narrator's health is " + Narrator.health);
        character.health -= Narrator.attack;
        if (character.health <= 0) {break;}


}

if (Narrator.health <= 0) {
    killedEnemies.push("Narrator");
    alert ("the narrator is now dead, he dropped a health potion and you drank it and received 20 more health");
    character.health += 20;

} else {
    alert("You were killed and the game is over. these are the enemies you defeated: " + killedEnemies.toString());
	//No rule that you have to stop the game if you die!!
	alert("YOu are dead but yu may continue to fight with your spirit!! AND THERE IS NO RULE AGASINST THAT!! ")
}


alert(" you travel and there is a wraith in front of you. he says if you solve this riddle he will give you a sword with +20 attack but if you dont guess it he will fight you to the daeth")


var battle2 = false

var riddle = prompt("A man goes out drinking every night, returning to his home in the wee hours of every morning. No matter how much he drinks, he never gets a hangover. This drink is very well known, but is rarely consumed, served warm and taken straight from its source. The man is a sucker for a free drink, especially since he can't live without it. what is his favorite drink??")

switch (riddle) {
    case "Blood":
        alert("thats correct!! here a sword for + 20 damage");
        character.attack += 20;
        break;
    case "blood":
        alert("thats correct!! here a sword for + 20 damage");
        character.attack += 20;
        break;
    default:
        alert("Time to die!! ")
        battle2 = true
        break;
}





//next battle








if(battle2 === true) {

var wraith = new enemy("wraith", 50, 10);

alert("wraith health is " + wraith.health);



//while loop used for battle
while (true) {
    var hit = prompt("type attack to attack your enemy")
    if (hit === "attack") {
        wraith.health -= character.attack;
        if (wraith.health <= 0 ) {break;}
    } else {
        character.health -= wraith.attack
        aler("you have been attack and recieved " + wraith.attack + " damage");
    };
    alert("wraith's health is " + wraith.health);
        character.health -= wraith.attack;
        if (character.health <= 0) {break;}


}

if (wraith.health <= 0) {
    killedEnemies.push("wraith");
    alert ("the wraith is now dead, he dropped a sword and you now have 20 more attack");
    character.attack += 20;

} else {
    alert("You were killed and the game is over. these are the enemies you defeated: " + killedEnemies.toString());
	//No rule that you have to stop the game if you die!!
	alert("YOu are dead but yu may continue to fight with your spirit!! AND THERE IS NO RULE AGASINST THAT!! ")
}
//end of battle2 if statemeent
}










//final battle

alert("you now journey to the king of the witches castle and he is your final boss")

var king = new enemy("king", 100, 20);
alert("prepare to meet your doom " + character.name + "!!!")
alert("king's health is " + king.health);



//while loop used for battle
while (true) {
    var hit = prompt("type attack to attack your enemy")
    if (hit === "attack") {
        king.health -= character.attack;
        if (king.health <= 0 ) {break;}
    } else {
        character.health -= king.attack
        aler("you have been attack and recieved " + king.attack + " damage");
    };
    alert("king's health is " + king.health);
        character.health -= king.attack;
        if (character.health <= 0) {break;}


}

if (king.health <= 0) {
    killedEnemies.push("king");
    alert ("the king is now dead, you win!!");
    character.health += 20;

} else {
    alert("You were killed and the game is over. these are the enemies you defeated: " + killedEnemies.toString());
	//No rule that you have to stop the game if you die!!
	alert("YOu are dead but yu may continue to fight with your spirit!! AND THERE IS NO RULE AGASINST THAT!! ")
}

//for loop to shout huzzah for each enemy you killed
for(var i = 0; i < killedEnemies.length; i++ ) {
    alert("HUZZAH for killing the enemy!")
}
alert("the enemies you killed:" + killedEnemies.toString());

//end of button function
}