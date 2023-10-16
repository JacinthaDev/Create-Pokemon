class Pokemon{
    constructor(name, type, specialMove, specialMoveDamage, health){

        this.name = name
        this.type = type
        this.specialMove = specialMove
        this.specialMoveDamage = specialMoveDamage
        this.health = health
        this.xp = 0
    }

    attack(target){
        if(this.health > 0 && target.health > 0){
            console.log(`${this.name} is about to attack ${target.name} whose type is ${target.type}, special move is ${target.specialMove}, and health is ${target.health}.`)
            target.health -= this.specialMoveDamage
            console.log(`${this.name} hit ${target.name} with ${this.specialMove} and caused ${this.specialMoveDamage} damage.`)
            if (target.health <=0){
                target.health = 0
                console.log(`${target.name} has ${target.health} health. ${this.name} defeated ${target.name}. `)
                this.xp += 50
            }
        } else if (this.health <= 0){
            console.log(`${this.name} has no health and can't attack ${target.name}`)
        } else if (target.health <= 0){
            console.log(`${target.name} has already been defeated`)
        }
    }

    describe(){
        console.log(`You have selected ${this.name}. Type: ${this.type}, Special Move: ${this.specialMove}, Health: ${this.health}.`)
    }


}

//Declare Pokemon
let pikachu = new Pokemon("Pikachu", 'Electric', 'Lightning Strike', 50, 250);
let squirtle = new Pokemon("Squirtle", 'Water', 'Splash', 40, 200)
let weedle = new Pokemon("Weedle", 'Poison', 'Poison Sting', 100, 120)

//Describe the Pokemon
console.log(pikachu.describe());
console.log(squirtle.describe());

//Battle moves
weedle.attack(pikachu);
weedle.attack(squirtle);
pikachu.attack(weedle);
squirtle.attack(weedle);

//Describe Pokemon after the attack
console.log(pikachu.describe());
console.log(squirtle.describe());