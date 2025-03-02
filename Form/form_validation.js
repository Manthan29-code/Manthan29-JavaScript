const submitHandler= (event)=>
{
    event.preventDefault();
    const name= document.getElementById("name")
    var error= document.getElementById("name_error")
    console.log(name.value)
    console.log(name.value.length)
    if(name.value.length<=0)
    {
        error.innerHTML="Name required*";
        error.style.color="red";
    }    
   else{
    error.innerHTML="";
   }
}