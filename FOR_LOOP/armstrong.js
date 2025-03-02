let number= 5478
let armstrong=0
let check_number = number
let count =0

while(number>0)
{
    number=Math.floor(number/10) 
    count++
}
console.log(count)
number=check_number
while(number>0)
{
   let temp=number%10
   armstrong += temp**count
   number=Math.floor(number/10) 
}  

if(armstrong==check_number)
{
    console.log(check_number ," is armstrong number")
}
else{
    console.log(check_number, " is not armstrong number")
}    
