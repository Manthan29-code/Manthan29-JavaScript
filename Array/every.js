//every

var marks = [21,22,23,22,24,19]

var flag = true;
//method 1
for(let i=0;i<marks.length;i++){
    if(marks[i]<10){
        flag = false;
        break;
    }
}

//method 2
var flag=mark.every(
    (m)=>m>20
)

console.log(flag);
