//some 

var marks=[21,22,23,22,24,19]
var flag =false;
//method 1
for (var i=0;i<marks.length;i++)
    {
        if(marks[i]>=25)
            {
                flag=true;
                break;
            }
        }
        
//method 2
var flag=marks.some(function(m)
    {
        return m>=25
    })

//method 3
var flag=marks.some((m)=>{
    return m>=25;
})  

//method 4
var flag = marks.some((m)=>m>=24)
console.log(flag);

