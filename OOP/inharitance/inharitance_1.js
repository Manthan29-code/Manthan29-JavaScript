class SuperHero{
    name ="Noren Red";
    power ="fly"

    fightWithVillain(villainName)
    {
          console.log("fight with ", villainName);         
    }
}

class SilverSurfer extends SuperHero{}

const silverSurfer = new SilverSurfer()

console.log(silverSurfer.name);
console.log(silverSurfer.fightWithVillain('Galactus'));
