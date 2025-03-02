const form_feedback=(event)=>{
    event.preventDefault()
    console.log("Form submited")
    const spans = document.querySelectorAll("span");
    spans.forEach(span => {
        span.style.color = "red";
    });
    const name= document.getElementById("name")
    if(name.value.length<=0)
    {
        const name_error= document.getElementById("name_error")
        name_error.innerHTML="name required"
        
    }
    else{
        name_error.innerHTML=""

    } 
    const email= document.getElementById("email")
    if(email.value.length<=0)
    {
        const email_error= document.getElementById("email_error")
        email_error.innerHTML="email required"
        
    }
    else{
        email_error.innerHTML=""

    } 
    const feedback=document.getElementById("feedback")
    const rate_value=document.getElementsByName("rate_us")
    let get_rate_value=-1
    rate_value.forEach((val ,i)=>{
        if(val.checked)
        {
           get_rate_value=i+1;
        }
    }
    )
    console.log("rate:-" + get_rate_value);
    
    if(get_rate_value==-1)
    {
        const rating_error= document.getElementById("rating_error")
        rating_error.innerHTML="rating required"
        
    }
    else{
        
        rating_error.innerHTML=""
    }
    
    if(get_rate_value<2 && feedback.value.length<=0){
         const feedback_error=document.getElementById("feedback_error")
         feedback_error.innerHTML="feedback requried"
         
    }
    else{
        feedback_error.innerHTML=""

    }

}