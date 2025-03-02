var num=[1,2,3,4,5,6,7,8,9]

var res=num.map(
    (a)=>{
        return a*a
    }
).filter(
    (a)=>{
        return a>50
    }
)

console.log(res);


var names=["naman","ankit", "madam"]

var pallindron=names.filter(
    (Name)=>{
        return Name === Name.split('').reverse().join('');
    }
)

console.log(pallindron);

      

