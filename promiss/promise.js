// console.log("1");
// setTimeout(() => {
//     console.log("2");
    
// }, 3000);

// console.log("3");


//promise...
//javascript Promise class...
//stages of promise.. 3 stages
//pending, resolve, reject

//promise -> object
//new -->keyeword
//Promise -> class
//()=>{}
//(resolve,reject)
//functions


function nameprint()
{
    return "hello ....promise fulfilled";
}

var promise=new Promise((resolve , reject)=>
    {
        setTimeout(()=>
            {
                resolve(nameprint())    
            },3000)
    }
);
// var promise=new Promise((resolve , reject)=>
//     {
//         setTimeout(()=>
//             {
//                 resolve("promise has been resolved..")    
//             },3000)
//     }
// );


console.log(promise);
promise.then((data)=>{
    console.log(data);
    
})

console.log("bye...")

