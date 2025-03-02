var users = [
    {
            id:1,
            name:"John",
    },
    {
            id:2,
            name:"Peter",
    },
    {
            id:3,
            name:"Sally",
    }
]


var userName= users.map(
    (user)=>
        user.name   
)

console.log(userName);


var newuser=users.map(
    (user)=>(
        {                    
            id:user.id + 1000,
            uName: user.name.toUpperCase()           
       }
    )
)
// var newuser=users.map(
//     (user)=>{
//      return   {
//             id:user.id + 1000,
//             uName: user.name.toUpperCase()
//         }
//     }
// )

console.log(newuser);

number=67;
console.log("number" , number);

