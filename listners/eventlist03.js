window.addEventListener("DOMContentLoade" , ()=>
{
    console.log("html page is loaded");
    
})

window.addEventListener("resize" , ()=>{
    console.log("window resize to " , window.innerHeight , "and " , window.innerWidth);
    
})

// window.addEventListener("online",()=>{
//     console.log('user isonline...')
// })

window.addEventListener("load" ,()=>{
    console.log("onload........");
    
})

window.addEventListener("copy",()=>{
    console.log("dont copy...")
})
let first=true
window.addEventListener("scroll" , ()=> {
    console.log("dont scroll me");
    if(first){
        let img=document.getElementById("img_scroll");
        img.src="https://cdn.pixabay.com/photo/2022/05/13/16/45/rose-7194127_1280.jpg"
        first=false
    }else{
        console.log("image already loded");
        
    }

    
})