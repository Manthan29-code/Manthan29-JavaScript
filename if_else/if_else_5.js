// print greatest among 3 number
var a1=6;
var a2=9;
var a3=7;

if(a1>=a2)
{
    if(a1>a3)
    {
        console.log("a1 is greatest");
    }
    else
    {
        console.log("a3is greatest");
    
    }   
}
else
{
    if(a2>=a3)
    {
        console.log("a2 is greatest");
    }
    else
    {
        console.log("a3 is greatest");
    
    }   
    
}


// check type of character

var ch='@';

if(ch>='0' && ch<='9')
{
    console.log("character is number");
}
else if((ch>='a' && ch<='z') || (ch>='A' && ch<='A'))
{
    console.log("character is alphbate");
}
else
{
    console.log("special character");
}

// check wheather a year is leap year or not

var year=2000

if((year%4)==0)
{
    console.log("leap year");
}
else
{
    console.log(" not leap year");

}

// what is output of following 

var a=10;
var b=30;

if((a==10) || (b=40, console.log("value of b is ",b)) )
{
    console.log("value of b is ",b);
}
else{
    console.log("value of b is ",b);
} 

// even or odd


var no=10
if(no%2==0)
{
    console.log("even number");
}
else
{
    console.log("odd number");
}

