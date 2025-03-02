// map -> returns all element
// filter-> return only that elemet ehich satisfies condition

var user=["amit","raj","parth","anaya","akshit","hunal"]



var filluser=user.filter(
    (user)=>{
        return user.startsWith('a');
    }
)

console.log(filluser);


var filluser1=user.filter(
    (user)=>{
        return user.length > 5;
    }
)

console.log(filluser1);


var sales=[123, 345, 567 , 988, 6545];

var filsales=sales.filter(
    (sale)=>{
        return sale>500;
    }
)

console.log(filsales);
