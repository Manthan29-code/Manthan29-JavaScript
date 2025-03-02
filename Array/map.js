var user=[["amit",100],["raj",120],["kunal",90]];

var user_data=user.map(
    (u)=>{
        return [u[1]];
    }
)

console.log(user_data);


var user=[["amit",100,80],["raj",120,100],["kunal",90,120]];

var user_score=user.map(
    (u)=>{
        return [u[0], u[1]+u[2]];
    }
)

console.log(user_score);
