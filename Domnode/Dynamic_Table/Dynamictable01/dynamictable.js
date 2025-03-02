var employees = [
    {
        id:101,
        name:"ram",
        age:23,
        salary:15000,
        attandance:22
    },
    {
        id:102,
        name:"shyam",
        age:24,
        salary:25000,
        attandance:23
    },
    {
        id:103,
        name:"amit",
        age:26,
        salary:45000,
        attandance:20
    }
]

const tbody = document.getElementById("tbody");

for (i=0 ; i< employees.length ; i++)
{
    const tr=document.createElement('tr');

    const idTD = document.createElement('td');
    idTD.innerHTML =employees[i].id

    const nameTD = document.createElement('td');
    nameTD.innerHTML =employees[i].name

    const ageTD = document.createElement('td');
    ageTD.innerHTML =employees[i].age
    if(employees[i].age<=25){
        ageTD.style.color="green";
    }

    const salaryTD = document.createElement('td');
    salaryTD.innerHTML =employees[i].salary
    if(employees[i].salary <=30000){
        salaryTD.style.color="red";
    }

    const attandanceTD = document.createElement('td');
    attandanceTD.innerHTML =employees[i].attandance


    tr.appendChild(idTD);
    tr.appendChild(nameTD);
    tr.appendChild(ageTD);
    tr.appendChild(salaryTD);
    tr.appendChild(attandanceTD);
    tbody.appendChild(tr)
}    