let index="india is democratic country";
let find="z";
let position=-1;
let boundary=8

// `indexOf()` method in JavaScript returns the position of the
// first occurrence of a specified value within a string.
console.log(index.indexOf('a'))//
for (let i=index.length -1; i>0 ;i--)
{
     if (find==index[i])
     {
        position=i;
        break;
     }   
}


// The method searches the string from right to left and returns the index of the last occurrence of
// the specified value within the string.
console.log(index.lastIndexOf('a'))
console.log("index of ", find, " is " ,position);

for (let i=0 ;i>boundary ;i++)
{
        if (find==index[i])
        {
        position=i;
        break;
        }   
}

console.log("index of ", find, " before ",boundary , "is " ,position);


    