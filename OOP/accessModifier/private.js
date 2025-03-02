class SuperHero{
    //privete datamember starts with #
    #specialPower="boat";
    #Nname='silverSulfer';

    #getSpacialPower(){
         console.log("Boat")
    }

    getName()
    {
        return this.#Nname
    }
}

//JS DON'T SUPPORT PROTECTED METHOD

const silversurfer = new SuperHero()

// console.log(silversurfer.#getSpacialPower());
// console.log(silversurfer.#specialPower);
console.log(silversurfer.getName());
