//count no of digit number
var no = 647
let count=0;
while(no>0)
{
    no=Math.floor(no/10)
    console.log("no...",no)
    count++
}    
console.log("count...",count)