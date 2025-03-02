const getData =()=>{

    var promise= new Promise((resolve , reject )=>
    {
        setTimeout(()=>{
            resolve("promise has been resolved..")
        },2000)
    })
    return promise
}

var x= getData()
console.log(x);

x.then((data)=>{
    console.log(data)
})
