// without parameter // without return type

function add()
{
    let a=40,b=67;
    let c = a+b
    console.log("addition is " +c);
    
}

add()

function greeting()
{
    var time="22:00"
    if(time>="00:00" && time<="12:00")
    {
        console.log("Good Morning");
        
    }else if(time>"12:00" && time<="16:00")
    {
        console.log("Good Afternoon");
        
    }  
    else if(time>"16:00" && time<="21:00")
    {
        console.log("Good Evening");
        
    }
    else{
        console.log("Good Night");
        
    }
}

greeting()