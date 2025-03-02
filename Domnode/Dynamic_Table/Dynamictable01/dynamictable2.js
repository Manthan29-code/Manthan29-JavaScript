// var employees = [
//   {
//     id: 101,
//     name: "ram",
//     age: 25,
//     salary: 15000,
//     attendance: 22,
//   },
//   {
//     id: 102,
//     name: "shyam",
//     age: 24,
//     salary: 25000,
//     attendance: 23,
//   },
//   {
//     id: 103,
//     name: "amit",
//     age: 26,
//     salary: 45000,
//     attendance: 20,
//   },
// ];

let employees = [
  { id: 101, name: "Ram", age: 25, salary: 15000, attendance: 22 },
  { id: 102, name: "Shyam", age: 28, salary: 18000, attendance: 20 },
  { id: 103, name: "Sita", age: 30, salary: 20000, attendance: 24 },
  { id: 104, name: "Gopal", age: 26, salary: 17000, attendance: 21 },
  { id: 105, name: "Lakshmi", age: 24, salary: 16000, attendance: 23 },
  { id: 106, name: "Mohan", age: 27, salary: 19000, attendance: 19 },
  { id: 107, name: "Radha", age: 29, salary: 21000, attendance: 25 },
  { id: 108, name: "Krishna", age: 31, salary: 23000, attendance: 22 },
  { id: 109, name: "Arjun", age: 32, salary: 25000, attendance: 20 },
  { id: 110, name: "Karan", age: 23, salary: 14000, attendance: 18 },
  { id: 111, name: "Esha", age: 26, salary: 18000, attendance: 24 },
  { id: 112, name: "Ravi", age: 28, salary: 20000, attendance: 22 },
  { id: 113, name: "Kavya", age: 27, salary: 19000, attendance: 23 },
  { id: 114, name: "Ramesh", age: 29, salary: 22000, attendance: 20 },
  { id: 115, name: "Suresh", age: 30, salary: 24000, attendance: 21 },
  { id: 116, name: "Maya", age: 25, salary: 16000, attendance: 22 },
  { id: 117, name: "Anita", age: 24, salary: 15000, attendance: 19 },
  { id: 118, name: "Rahul", age: 28, salary: 17000, attendance: 23 },
  { id: 119, name: "Pooja", age: 29, salary: 20000, attendance: 25 },
  { id: 120, name: "Vikram", age: 30, salary: 23000, attendance: 21 },
  { id: 121, name: "Tina", age: 31, salary: 21000, attendance: 22 }
];


window.addEventListener("DOMContentLoaded", () => {

  for (let i = 0; i < employees.length; i++) {
    createRow(employees[i])
  }
});

const createRow = (employee) => {

  const tbody = document.getElementById("tbody");
  const tr = document.createElement("tr"); //<tr>

  const idTd = document.createElement("td");
  idTd.innerHTML = employee.id;

  const nameTd = document.createElement("td");
  nameTd.innerHTML = employee.name;

  const ageTd = document.createElement("td");
  ageTd.innerHTML = employee.age;

  if (employee.age < 28) {
    ageTd.style.color = "green";
  }

  const salaryTd = document.createElement("td");
  salaryTd.innerHTML = employee.salary;

  if (employee.salary < 18000) {
    salaryTd.style.backgroundColor = "red";
  }

  const attendanceTd = document.createElement("td");
  attendanceTd.innerHTML = employee.attendance;

  const actionTd = document.createElement("td");

  // to create detail button
  const detailButton = document.createElement("Button");
      detailButton.innerHTML = "Detail"
      detailButton.className="btn btn-info"
      detailButton.addEventListener("click",()=>{
      alert(employee.name)
  })
  //attach detailButton
  actionTd.appendChild(detailButton)
  

  //to create delete bu
  const deleteButton = document.createElement("button")
  deleteButton.innerHTML = "Delete"
  deleteButton.className="btn btn-danger"
  deleteButton.style.marginLeft="10px"
  
  //attach deleteButton
  actionTd.appendChild(deleteButton)
 

  deleteButton.addEventListener("click",()=>{
     tr.remove()  // it remove entire row
  })
    


  // create content ofr one row of table
  tr.appendChild(idTd);
  tr.appendChild(nameTd);
  tr.appendChild(ageTd);
  tr.appendChild(salaryTd);
  tr.appendChild(attendanceTd);
  tr.appendChild(actionTd);
  
 // append row in table
  tbody.appendChild(tr);

};

const sortData = () => {
  const tbody = document.getElementById("tbody");
  console.log(tbody);
  tbody.innerHTML = "";


  console.log("Before sorting");  
  console.log(employees)
  employees = employees.sort((a, b) => a.age - b.age);
  console.log("After sorting");  
  console.log(employees)

  for (let i = 0; i < employees.length; i++) {
    createRow(employees[i]);
  }
};


const searchByName =()=>{
  const searchTxt = document.getElementById("searchTxt");
  const tbody= document.getElementById("tbody");
  tbody.innerHTML = "";
  //to filter data by name
  console.log(searchTxt.value);
  let empsearch = employees.filter((emp)=>{
    return emp.name.includes(searchTxt.value)
  })
  console.log(employees);
  
  console.log("employees , you are looking for.....");
  console.log(empsearch);
  
  //to generate rows
  for (let i = 0; i < empsearch.length; i++) {
    createRow(empsearch[i]);
  }

}