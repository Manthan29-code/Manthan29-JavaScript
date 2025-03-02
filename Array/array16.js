var marks=[10,37,92,30,80]

var total=marks.reduce(
    (sum,mark)=>{
        return sum + mark
    }
)

console.log(total);


var users = ["ram","shyam","seeta","hari","geeta"];

/* The line `var data = users.reduce((x,u)=>x+","+u,"");` is using the `reduce` method on the `users`
array to concatenate all the elements with a comma separator. */
var data = users.reduce((x,u)=>x+","+u,"");
console.log(data); 