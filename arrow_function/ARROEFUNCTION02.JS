const findmax =(a,b)=> a>b?a:b;

var max=findmax(10,20);
console.log(max);

const isvalid =(str)=> 
{
    if(str.trim().lebght>=3 && str.trim().lebght<=10)
     {   
        return true
     }  
     return false
}
    
const checkstr=(data)=> isvalid(data)? "valid":"invalid";


console.log(checkstr(" hi"));
