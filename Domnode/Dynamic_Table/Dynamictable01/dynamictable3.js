var employees = [
    {
      id: 101,
      name: "ram",
      age: 23,
      salary: 15000,
      attandance: 22,
    },
    {
      id: 102,
      name: "shyam",
      age: 24,
      salary: 25000,
      attandance: 23,
    },
    {
      id: 103,
      name: "amit",
      age: 26,
      salary: 45000,
      attandance: 20,
    },
  ];
  
  window.addEventListener("DOMContentLoaded", () => {
    
      for (let i = 0; i < employees.length; i++) {
          createRow(employees[i])
          console.log(Object.keys(employees[i]));
          
       }
  });
  
  const createRow = (employee)=>{
  
      const tbody = document.getElementById("tbody");
      const tr = document.createElement("tr"); //<tr>

      for( let key of Object.keys(employee))
      {
        console.log("key-->" , key)
        const TD= document.createElement("td");
        TD.innerHTML=employee[key];
        tr.appendChild(TD);
      }  
  
    //   const idTD = document.createElement("td");
    //   idTD.innerHTML = employee.id;
  
    //   const nameTd = document.createElement("td");
    //   nameTd.innerHTML = employee.name;
  
    //   const ageTd = document.createElement("td");
    //   ageTd.innerHTML = employee.age;
  
    //   const salaryTd = document.createElement("td");
    //   salaryTd.innerHTML = employee.salary;
  
    //   const attandanceTd = document.createElement("td");
    //   attandanceTd.innerHTML = employee.attandance;
  
    //   if (employee.age < 24) {
    //     ageTd.style.color = "green";
    //   }
    //   if (employee.salary < 30000) {
    //     salaryTd.style.backgroundColor = "red";
    //   }
  
    //   tr.appendChild(idTD);
    //   tr.appendChild(nameTd);
    //   tr.appendChild(ageTd);
    //   tr.appendChild(salaryTd);
    //   tr.appendChild(attandanceTd);
  
      tbody.appendChild(tr);
  
  }