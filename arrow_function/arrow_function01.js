//this is normal add function
function add()
{
    console.log("this is add function");
}


// this is arrow function
const add1=()=>
{
    console.log("this is add function");
    
}
add();

const sum=(a,b)=>
{
    console.log("this is sum =" + (a+b));
    
}


// const mul=(a,b,c)=>
// {
//     return a*b*c;

// }    

// without return 


const mul=(a,b,c)=>a*b*c;

var ans = mul(3,5,7);
console.log(ans);


const getname=(fname , lname)=> fname + " " + lname;

var fullName = getname("manthan","Movaliya")
console.log(fullName)
