class SuperHero{
    name ="Noren Red";
    power ="fly"

    constructor(villainName)
    {
        this.villainName=villainName;
    }

    fightWithVillain()
    {
          console.log("fight with ", villainName);         
    }
}

class SilverSurfer extends SuperHero{
    constructor()
    {
        super("Galactus")
    }

    getDetails()
    {
        console.log(this.name);
        console.log(this.power);
        console.log(this.villainName);       
    }

    fightWithVillain()
    {
        super.fightWithVillain()      
    }
}

const silverSurfer = new SilverSurfer()

console.log(silverSurfer.name);
silverSurfer.getDetails();
