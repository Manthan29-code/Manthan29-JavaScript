var data=["amit","sumit", "Krishna","ram"];

for(let i=0;i<data.length;i++)
{
    console.log(data[i]);

    
}

data.forEach(
    (e , ind)=>{
        console.log("value at "+ ind+"  "+e);
        
    }
)
// for each 
var upperData =[];
for(let i=0;i<data.length;i++){

    upperData.push(data[i].toUpperCase());
}
console.log(upperData);


// map 
 /* `data.map` is a method in JavaScript that creates a new array by applying a
function to each element of the original array. In this code snippet, `data.map` is
used to create a new array `upper_Data` where each element is the uppercase version
of the corresponding element in the `data` array. */
var upper_Data =data.map((d)=>{
    //d -> "amit"
    return d.length>5?  d.toUpperCase(): d.to;
})
console.log(upper_Data);



var sales=[10,12,10, 14,14,20,10];
saleswithtax=[];
for(let i=0;i<sales.length;i++)
{
    let tax=sales[i]*0.18;
    saleswithtax.push(sales+ tax);
}

console.log(saleswithtax);

var sales_tax=sales.map(
    (e)=>{
        return e*1.18;
    }
)

console.log(sales_tax);

