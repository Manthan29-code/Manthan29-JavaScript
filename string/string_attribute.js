//to find length of string


let str="hello this is java script"


console.log(typeof str);
console.log("length of string is ",str.length);

for (let i =0;i<str.length ; i++ )
{
    console.log(str[i])
}


// find whether a string is pallindron or not 

let str2="india"
let last=str.length
for(let i=0; i<length/2;i++)
{
    if(str[i]!=str[last-i])
    {
        console.log("not pallindron")
    }   
}
if(i==length/2)
{
    console.log(" pallindron")
}    

