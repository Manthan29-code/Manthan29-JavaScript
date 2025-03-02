console.log("1) addition");
console.log("2) subtraction");
console.log("3) multiplication");
console.log("4) division");

var choice=parseInt(prompt("Enter your choice"))
var no1=parseInt(prompt("Enter number1"))
var no2=parseInt(prompt("Enter number2"))

function add(a,b)
{
    let c = a+b
    console.log("addition is " +c);
    
}
function sub(a,b)
{
    let c = a-b
    console.log("subtraction is " +c);
    
}
function mul(a,b)
{
    let c = a*b
    console.log("multiplication is " +c);
    
}
function div(a,b)
{
    let c = math.floor(a/b)
    console.log("divison is " +c);
    
}

switch(choice)
{
    case 1:
        add(no1,no2)
        break;
    case 2:
        sub(no1,no2)
        break;
    case 3:
        mul(no1,no2)
        break;
    case 4:
        div(no1,no2)
        break;
    default: 
        console.log("Invalid choice");
        break;
            
}