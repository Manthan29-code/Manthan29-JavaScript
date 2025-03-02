let index="India is democratic country";
let find="i";
let position=-1;
let boundary=7
for (let i=0 ; i<index.length ;i++)
{
     if (find==index[i])
     {
        position=i;
        break;
     }   
}

console.log("index of ", find, " is " ,position);


for (let i=boundary ; i<index.length ;i++)
{
        if (find==index[i])
        {
            position=i;
            break;
        }   
}
    
console.log("index of ", find, " after position ",boundary ," is " ,position);
    



