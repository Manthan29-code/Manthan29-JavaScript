const btn=document.querySelector("#btn")
const list =document.querySelector(".list")
let flag=true
btn.addEventListener("click", ()=>{

    console.log("clicked"); 
    if(flag)
    {
       btn.innerHTML="click to hide";
       list.hidden=false;  
       flag=false
    }
    else{
        btn.innerHTML="click to show";
       list.hidden=true;  
       flag=true;
    }

})

