const num=[,4,5,34,89,77,21,748,926,930]
// quwstion 1
var result=num.filter(
    (n)=>{
        return (n/3==0 &&  n/7==0)
    }
)


console.log(result);


// question 2
var result02=num.filter(num => num >= 10).map(num => num * num);
console.log(result02);


//question 3
const name_age=[["sachin",15],["raj",21],["parth",67],["ajay",33]];

var Name=name_age.filter(
    data=> {
        return data[1]>=18
    }
)
console.log(Name);


const employeename=[["sachin",7,4500],["raj",4,8900],["parth",5,9800],["ajay",8,5500]];

var result03=employeename.filter(
    (employee)=>{
        return employee[1]>5
    }
).map(
    emp=>{
        emp[2]+ 5500
    })

console.log(result03);



var num=[35,78,99,27,78,930,88];

num.forEach(
    number=>()
)




