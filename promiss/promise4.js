const bookTicket =()=>{
    console.log("Booking ticket...");
    var promise= new Promise((resolve , reject)=>
        {
            setTimeout(()=>{
                resolve({id:"1001" , price:100 , Status:"success"})
                // reject({id:"1001" , price:100 , Status:"success"})
            }, 3000)
        }
    
    )

    return promise;
    
}

// const printTicket = ()=>{

//     var x = bookTicket()
//     x.then((data)=>{
//         console.log(data)
//         console.log("ticket has been booked successfully...")
//     })
//     x.catch((err)=>{
//         console.log(err)
//     })
// }


const printTicket = async()=>
{
    var x =await bookTicket()
    console.log(x);
    
}
printTicket()