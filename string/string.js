let str="hello from java script"
let space=0

for(let i=0;;i++)
{
    if (str[i]==undefined)
    {
        break;
    }
    else if(str[i]==' ')
    {
        space++;
    }   
}  
console.log("number of space= ", space);
console.log("number of words= ", space +1);
  