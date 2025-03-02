var marks = [21,22,23,19,24,21]

console.log(marks)
console.log("insert new iteam....");

function insert_first(a){
    marks.splice(0,0,a)
    return marks.length
}

var new_length=insert_first(48)
console.log("new_length", new_length)
console.log(marks);

console.log("delete first iteam");

function remove_first(a){
    marks.splice(0,1,a)
    return marks.length
}

var new_length=remove_first(48)
console.log("new_length", new_length);
console.log(marks);

