course_detail={
    HTML: 1200,
    CSS  : 1400,  
    JS : 1200,
    tailwind : 1400,
    react : 2100,
    "node.js":  1100,
    "express.js" : 1200,
    mongoDB : 1700,


}
const submitHandler=(event)=>{
    
    event.preventDefault()

    console.log("Form Submitted");
    console.log(event.target.elements);
    
    
    const name= document.getElementById("name");
    console.log(name.value);
    const hobbies =document.getElementsByName("enroll");
    console.log("Selected course");
    let total=0;
    for(let i=0; i< hobbies.length ; i++ )
    {
        if(hobbies[i].checked){
            console.log(hobbies[i].value)
            total += course_detail[hobbies[i].value]
        }    
    }   

    console.log("Amount to pay "+ total);
    


}