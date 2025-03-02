// FIND SUM OF EVEN AND ODD NUMBER IN GIVEN RANGE
var sp=2
let ep=20
let even_sum=0
var odd_sum=0

for (let i = sp ; i<=ep ; i++ )
{
    if (i%2==0)
    {
        even_sum+=i
        console.log(i)
    }
    else{
        odd_sum+=i
    }
}  
console.log(typeof i)
console.log("sum of  number is =", odd_sum+ even_sum)
console.log("sum of even number is =", even_sum)
console.log("sum of odd number is =", odd_sum)

