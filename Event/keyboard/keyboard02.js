var emails=["abc@gmail.com", "xyz@gmail.com" , "mno@gmail.com"]


const checkemail = ()=>{
    const input=document.getElementById("email").value;
    console.log(input);
    let key=emails.find((txt)=>
     
        (input===txt)
    )
    console.log(key);
    
    if(key){
        alert("email already available");
    }
    else{
        alert("email not  available");
        alert("new email added");
        emails.push(input)
    }
    emails.forEach(
        (email)=>
            console.log(email)
            
    )     
}


