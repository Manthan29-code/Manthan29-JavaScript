class superHero{
    superHeroName="Silver Surfer";
    location='Earth';

    constructor(location)
    {
        if(location)
        {
            this.location=location;
        }    
    }

    getName()
    {
        // use this when u use class member in method, it's necessary
        return this.superHeroName;
    }

    getLocation()
    {
        return this.location;
    }
}

const Hero=new superHero()
const Hero2=new superHero("Earth213")
console.log(Hero.getName());
console.log(Hero.getLocation());
console.log(Hero2.getName());
console.log(Hero2.getLocation());
