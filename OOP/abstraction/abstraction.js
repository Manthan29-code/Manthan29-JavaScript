class DeveloperWork{
    finfishWork(){
        throw new Error("Implement finisWork");
    };
    shareUpdate(){};
}

class forDeveloper extends DeveloperWork{}

const dev=new DeveloperWork();
dev.finfishWork();