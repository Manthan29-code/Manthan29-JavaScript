function myOwnInheritance(parentObject){
    function f(){};
    f.prototype=parentObject;
    return new f();
}

function createStudent(studentName , studentAge){
    const  obj=myOwnInheritance(studentTask)
    obj.name=studentName;
    obj.age=studentAge;
    return obj;

}

const studentTask={
    checkAge: function (){
        if(this.age >16)
        {
            console.log("yes" , this);
            
        }else{
            console.log("no" , this);
            
        }   
    }
}

const s1=createStudent("Manthan" ,19);
const s2=createStudent("Meet" ,12);

s1.checkAge();
s2.checkAge();