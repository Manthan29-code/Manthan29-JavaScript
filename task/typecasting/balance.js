var count=3
var balance=parseInt(prompt("enter amount >= 10000"));
do{
    if(balance>=1000)
    {
      console.log("success")  
      break;
    }  
    count--; 
    console.warn("enter valid amount")
    balance=parseInt(prompt("reenter amount >= 10000"));
}while(count);
if(!count)
{
    console.error("error") ;
}