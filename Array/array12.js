var users = [["amit",100],["raj",120],["kunal",98]]

for(let i=0;i<users.length;i++)
{
    console.log(users[i]);
    for(let j=0;j<users[i].length;j++){

         console.log(users[i][j]);
    }
}

users.forEach((u)=>
   {
    u.forEach(
        (u_m)=>{
            console.log(u_m);
            
        }
    )
   }
)