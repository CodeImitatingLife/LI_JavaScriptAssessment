// Your code here!
    class Pokemon{ // class declaration

	    /* class data members (object properties).
	    name;
	    attack;
	    defense;
	    initHP
	    health;
	    type;*/

	    constructor(name, attack, defense, health, type)// creates objs
	    {
		    this.name = name;
		    this.attack = attack;
		    this.defense = defense;
		    this.initHP = health;
		    this.health = health;
		    this.type=type;
	    }

	    takeDamage(hp_lost) //member function or method
	    {
		    if(this.health > hp_lost)
			    this.health -= hp_lost; //lose hit points.
		    else
			    this.health = 0; //all health lost; pokemon fainted.
	    }

	    attackOpponent(Pokemon){

		   var damage = this.attack-Pokemon.defense;
		   
		    if(damage < 1)
			    damage = 1;
		
		    Pokemon.takeDamage(damage);
	    }

	    display(){

		    const str1 = (this.name).toUpperCase();
		    const str2 = " (" +(this.type).toUpperCase()+ ") ";
		    const str3 = (this.health).toString()
			         +"/"+this.initHP.toString();

		    const fullStr = str1+str2+str3;
		    console.log(fullStr);

		    return fullStr;
	    }


 }

   const charmander = new Pokemon("charmander", 12, 8, 30, "fire");

   console.log(charmander.name);
   console.log(charmander.attack);
   console.log(charmander.defense); 
   console.log(charmander.health);
   console.log(charmander.type);

   charmander.takeDamage(5);
   console.log(charmander.health);
   charmander.takeDamage(2000);
   console.log(charmander.health);

   const bulbasaur = new Pokemon("bulbasaur", 7, 9, 35, "grass/poison");
   console.log(bulbasaur.name);
   console.log(bulbasaur.health);
   charmander.attackOpponent(bulbasaur);
   console.log(bulbasaur.health);


   const pikachu = new Pokemon("pikachu", 9, 10, 25, "electric");
   pikachu.display();

   pikachu.health = 12;
   pikachu.display();

   console.log(bulbasaur.display());

// Don't edit this line!
module.exports = Pokemon;
