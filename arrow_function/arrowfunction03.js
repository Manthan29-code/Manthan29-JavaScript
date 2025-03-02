const checknum=(num)=>
{
    if (num%2==0)
    {
        return "even";
    }
    else if (num%3==0)
    {
        return "multiple of 3";
    }
    else if (num%5==0)
    {
        return "multiple of 5";
    }
    else
    {
        return "odd";
    }
}

const check = (no)=> checknum(no);

console.log(check(123))