var x=100

console.log("value of x outside block =",x);
{
    // block
    
    console.log("value of x inside block =",x);
    var y=29;
    console.log("value of y inside block =",y);
    
}
//console.log("value of y  outside block =",y);    note accesable

let p=29
console.log("value of p =",p);
//varp=29   compile time error
console.log("value of p =",p);

let e=29
console.log("value of e =",e);
//var e=29 not allowed
