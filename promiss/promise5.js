
let condition=false;
console.log("let condition is " , condition);

let promise=new Promise((resolve , reject)=>
{
    if (condition) {
        setTimeout(
            () => { resolve("promise resolved") }, 3000
        )
    } else {
        reject("promise not resolved")
    }
        }
)

promise
    .then((data)=>console.log(data))    
    .catch((error)=>console.log(error));

