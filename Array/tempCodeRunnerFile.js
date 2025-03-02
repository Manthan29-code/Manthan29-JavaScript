var marks=[10,37,92,30,80]

var total=marks.reduce(
    (sum,mark)=>{
        return sum + mark
    }
)

console.log(total);

//use with object 
const users = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
    { id: 3, name: "Charlie", role: "admin" },
    { id: 4, name: "David", role: "user" },
  ];
    
  const groupByRole = users.reduce((acc, user) => {
    acc[user.role] = acc[user.role] || [];
    acc[user.role].push(user);
    return acc;
  }, {});
  
  console.log(groupByRole);
  /* Output:
  {
    admin: [{ id: 1, name: "Alice" }, { id: 3, name: "Charlie" }],
    user: [{ id: 2, name: "Bob" }, { id: 4, name: "David" }]
  }
  */
  