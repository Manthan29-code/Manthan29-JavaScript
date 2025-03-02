// with parameter // without return type

function add(a,b)
{
    let c = a+b
    console.log("addition is " +c);
    
}

add(47,920)

function getaverage(no1,no2,no3)
{
    console.log("no1="+ no1);
    console.log("no2="+ no2);
    console.log("no3="+ no3);

    let avg = no1 + no2 + no3
    console.log("average "+ avg);
        
}

getaverage(46,893,902)
getaverage()  // it will not throw any error returns NaN

console.log("call by value");

var a=10, b=84 , c=94

getaverage(a,b,c)
