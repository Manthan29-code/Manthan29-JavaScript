const student_data = (event) => {
    event.preventDefault()
    console.log("Form Submitted");

    const fname=document.getElementById("fname");
    const lname = document.getElementById("lname");
    const cname = document.getElementById("cname");
    const er_number = document.getElementById("er_number");
    const ph_number = document.getElementById("ph_number");
    const year = document.getElementById("year");
    const cgpi = document.getElementById("cgpi");
    const gender=document.getElementsByName("gender"); 
    
//    document.getElementById("table").style.display="flex";
   document.getElementById("table").removeAttribute("hidden")
    const fullname= document.getElementById("fullname");
    fullname.innerHTML=fname.value + " " + lname.value ;

    const college_name = document.getElementById("college_name");
    college_name.innerHTML = cname.value;

    const enrollment_number = document.getElementById("Enrollment_number");
    enrollment_number.innerHTML = er_number.value;

    const phone_number = document.getElementById("phone_number");
    phone_number.innerHTML = ph_number.value;

    const gendervalue = document.getElementById("gender");
    gender.forEach((g)=>{
        if(g.checked){
            gendervalue.innerHTML=g.value;
           }  
    });

    // Update Year
    const yearvalue = document.getElementById("Year");
    yearvalue.innerHTML = year.value;

    // Update CGPI
    const cgpivalue = document.getElementById("CGPI");
    cgpivalue.innerHTML = cgpi.value;
}