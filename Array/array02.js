var marks=[21,34,29,30,20]

console.log(marks)

/* `var x=marks.unshift(22)` is adding the element `22` to the beginning of the `marks` array and
storing the new length of the array in the variable `x`. */
var x=marks.unshift(22)
console.log("new len...", x);
console.log(marks);

/* `var remove= marks.shift()` is removing the first element from the `marks` array and storing that
removed element in the variable `remove`. */
var remove= marks.shift()
console.log("removed element..",remove)
console.log(marks);


