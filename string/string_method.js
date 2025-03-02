var str1="abc@gmail.com";
var flag = str1.includes('@');
console.log("flag....." ,flag)
var find='@';

for(var i=0; i<str1.length;i++)
{
    if(str1[i]==find)
    {
       console.log("flag.....true")
       break; 
    }
}


var str2="  abc   "
console.log(str2.trim())
console.log(str2.trimStart())
console.log(str2.trimEnd())


// wap to remove spave from between


var str3="India is great country"
var newstr3=''
for(let i=0; i<str3.length; i++)
{
    if(str3[i]!=' ')
    {
        newstr3+=str3[i]
    }    
}

console.log(newstr3)





