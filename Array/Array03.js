const marks=[10,20,30,40]

console.log(marks)
console.log(marks.length)
var removedElm = marks.pop()
console.log(marks.length)
console.log("removed element..",removedElm)

/* `marks.length = marks.length-1` is reducing the length of the `marks` array by 1. This operation
effectively removes the last element from the array without actually using any array method like
`pop()`. */
marks.length = marks.length-1 
console.log(marks.length)
console.log(marks)
console.log("removed element..",removedElm)


/* `marks.length = marks.length + 4` is increasing the length of the `marks` array by 4. This operation
effectively adds 4 undefined elements to the end of the array. It does not change the actual
elements in the array, but it increases the length property of the array by 4. */
marks.length = marks.length+4 
console.log(marks.length)
console.log(marks)

function removeEla(){
    var x=marks[marks.length]
    marks.length-=1;
    return x
}

var removedElm = removeEla()
console.log("removed element..",removedElm)


console.log(marks)