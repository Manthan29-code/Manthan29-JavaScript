// function createStudent(name , age)
// {
//     const obj={};
//     obj.name=name;
//     obj.age=age;
//     return obj;
// }

// const s1=createStudent("Manthan" ,19);
// const s2=createStudent("Meet" ,19);

function createStudent(name , age)
{
    const obj=Object.create(studentTask);
    obj.name=name;
    obj.age=age;
    return obj;
}

const studentTask=
{
    checkAge: function()
    {
        if(this.age>17)
        {
            console.log("Yes", this);            
        }else{
            console.log("No" , this);            
        }   
    }
}
const s1=createStudent("Manthan" ,19);
const s2=createStudent("Meet" ,12);

s1.checkAge();
s2.checkAge();

console.dir(createStudent);
console.log(createStudent.hasOwnProperty(studentTask));
// console.log(createStudent.hasOwnProperty(checkAge()));
// console.log(studentTask.hasOwnProperty(createStudent ));
console.log(s1.__proto__);
console.log(s1.prototype);
console.log(studentTask.__proto__);
console.log(studentTask.prototype);

console.log(s1.__proto__.__proto__);

