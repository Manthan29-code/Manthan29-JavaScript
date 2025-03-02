const user=
[
    { id: 2 , Name:"Mohan" , age:45},
    { id: 5 , Name:"jeet" , age:67},
    { id: 7 , Name:"megh" , age:34},
    { id: 3 , Name:"raj" , age:89},
    { id: 4 , Name:"meet" , age:23},
]

const search=(event)=>{

   // var text=document.getElementById("value").value;
   // console.log("finding.... ");
    console.log("value entered== " , event.target.value);
    
    const output = document.getElementById("result");
    output.innerHTML = "searching..."
    var promise= new Promise((resolve , reject )=>
    {
            setTimeout(()=>{
                resolve(
                    user.find((user)=>{
                        return user.Name==event.target.value;
                    }
                   )
                )
            },3000)
    })
    promise.then((data)=>{
        console.log(data);
        const output=document.getElementById("result");
        if(data != undefined)
        {
            output.innerHTML="user found--->" + data;
            
        } else{
            
            output.innerHTML="user not found";
        }  
    })
    

}
// const search=(event)=>{

   
//     console.log("found ")
//     var promise= new Promise((resolve , reject )=>
//     {
//             setTimeout(()=>{
//                 resolve(event.value)
//             },2000)
//     })
//     promise.then((data)=>{
//         console.log(data)
//     })
    

// }


