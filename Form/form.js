const submitHandler=(event)=>{
    //when form was submitted action attribute called.. 
    //action attribute is expecting a URL to send the data to
    //so we need to prevent that default behavior
    event.preventDefault(); //this will prevent the default behavior of the form
    console.log("Form Submitted");

    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const email = document.getElementById("email");
    const country = document.getElementById("country");
    const favColor = document.getElementById("favColor");
    const gender = document.getElementsByName("gender");  // getelement's'byname()
    console.log(gender);
    console.log(gender[0]);
    console.log(gender[0].checked);
    console.log(gender[1]);
    console.log(gender[1].checked);
    
    const result= document.getElementById("result")
    result.style.color=favColor.value

    let nameValue= document.getElementById("nameValue");
    nameValue.innerHTML=name.value

    const ageValue= document.getElementById("ageValue");
    ageValue.innerHTML=age.value

    const emailValue= document.getElementById("emailValue");
    emailValue.innerHTML=email.value
    
    const countryValue= document.getElementById("countryValue");
    countryValue.innerHTML=country.value
    
    const genderValue= document.getElementById("genderValue");

    // for(let i = 0 ; i<gender.length ; i++)
    // {
    //     if(gender[i].checked){
    //         genderValue.innerHTML=gender[i].value;
    //     }
    // }   
    gender.forEach((g)=>{
        if(g.checked){
            genderValue.innerHTML=g.value;
           }  
    });


    
}