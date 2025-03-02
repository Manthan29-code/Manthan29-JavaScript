// money distrubution using while and if else
let amount=578

while (amount>0)
{
    if(amount>=500)
    {
           let num=Math.floor(amount/500);
           console.log("500 rs", num , "note" );
           amount -= 500*num      
    }
    else if(amount>=200)
    {
            let num=Math.floor(amount/200);
            console.log("200 rs", num , "note" );
            amount -= 200*num      
    }else if(amount>=100)
    {
            let num=Math.floor(amount/100);
            console.log("100 rs", num , "note" );
            amount -= 100*num      
    }else if(amount>=50)
    {
            let num=Math.floor(amount/50);
            console.log("50 rs", num , "note" );
            amount -= 50*num      
    }else if(amount>=50)
    {
            let num=Math.floor(amount/50);
            console.log("50 rs", num , "note" );
            amount -= 50*num      
    }else if(amount>=20)
    {
            let num=Math.floor(amount/20);
            console.log("20 rs", num , "note" );
            amount -= 20*num      
    }else if(amount>=10)
    {
            let num=Math.floor(amount/10);
            console.log("10 rs", num , "note" );
            amount -= 10*num      
    }else if(amount>=5)
    {
            let num=Math.floor(amount/5);
            console.log("5 rs", num , "note" );
            amount -= 5*num      
    }else if(amount>=2)
    {
            let num=Math.floor(amount/2);
            console.log("2 rs", num , "coins" );
            amount -= 2*num      
    }else
    {
            let num=Math.floor(amount/1);
            console.log("1 rs", num , "coins" );
            amount -= 1*num  
    }

}    

    