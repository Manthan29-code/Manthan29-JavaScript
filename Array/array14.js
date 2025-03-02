var users =[["sachin",78.89],["raj",80],["parth",73],["ajay",92]]


var filUsers = users.filter((user)=>{

    return user[1]>=80;
})
console.log(filUsers);


var users =[["sachin",90,78,67],["raj",90,78,78],["parth",89,76,90],["ajay",89,90,91]]

var percentage= users.filter((user)=>{

    return (user[1]+user[2]+user[3])/3 >=0.70;
})


console.log(percentage);


var result = users.map(
    (user)=>{
        return [ user[0] , (user[1]+user[2]+user[3])/3]
    }
)

console.log(result);

