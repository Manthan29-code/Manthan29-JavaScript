const employee_detail = (event) => {

    event.preventDefault()
    console.log("form submitted")

    const formElements=event.target.elements;

    console.log(event.target.elements);
    

    for (let element of formElements) {
          // Check if the element has a 'name' attribute
    console.log(element.id + ": " + element.value);  // Display name and value of each input
        
    }            
    const fname = document.getElementById("fname"); // First Name
    const lname = document.getElementById("lname"); // Last Name
    const cname = document.getElementById("cname"); // Company Name
    const country = document.getElementById("year"); // Country (Select Dropdown)
    const email = document.getElementById("email"); // Email
    const salary = document.getElementById("salary"); // Salary

    const fnameValue = document.getElementById("fnameValue");
    fnameValue.innerHTML = fname.value;      // First Name
   
    const lnameValue = document.getElementById("lnameValue");
    lnameValue.innerHTML = lname.value;      // Last Name
   
    const cnameValue = document.getElementById("cnameValue");
    cnameValue.innerHTML = cname.value;      // Company Name
   
    const countryValue = document.getElementById("countryValue");
    countryValue.innerHTML = country.value;  // Country
   
    const emailValue = document.getElementById("emailValue");
    emailValue.innerHTML = email.value;      // Email
   
    const salaryValue = document.getElementById("salaryValue");
    salaryValue.innerHTML = salary.value;    // Salary
}