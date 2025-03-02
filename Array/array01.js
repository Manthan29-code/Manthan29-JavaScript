var users=["ram","shyam","hary","seeta","geeta"]
console.log(users)


/* The line `var x=users.push("khush");` is adding the element "khush" to the end of the `users` array
and storing the new length of the array in the variable `x`. */
var x=users.push("khush");

console.log(users);

/* The line `var remove=users.pop()` is removing the last element from the `users` array and storing
that removed element in the variable `remove`. The `pop()` method in JavaScript removes the last
element from an array and returns that element. */
var remove=users.pop()

console.log("removed element..",remove);
console.log(users);

