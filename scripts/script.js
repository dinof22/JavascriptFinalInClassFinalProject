//this is my javascript final project.

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
    console.log(character.magic);
};
if(character.class === "fat guy") {
    character.health += 30;
    console.log(character.health);
};


//object constructor for enemies.

function enemy(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
};

var Narrator = new enemy("Narrator", 30, 5);
alert("ok so for your first battle you get to fight me! lets see what you can do!")
alert("Narrators health is " + Narrator.health);

var battle1 = true


