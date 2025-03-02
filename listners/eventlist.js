const mydiv=document.getElementById("mydiv")
console.log(mydiv);

mydiv.addEventListener("mouseenter" , function(){
    mydiv.style.backgroundColor="red"
})  
mydiv.addEventListener("mouseleave" , function(){
    mydiv.style.backgroundColor="black"
})  
mydiv.addEventListener("click" , function(){
    mydiv.style.height="400px"
    mydiv.style.width="400px"
})  
mydiv.addEventListener("dblclick" , function(){
    mydiv.style.height="200px"
    mydiv.style.width="200px"
})  


const btn= document.getElementById("btn")
console.log(btn);

btn.addEventListener("click" , ()=>
{
    alert("button clicked...")
})

btn.addEventListener("mouseenter" , ()=>{
    btn.style.backgroundColor="red"
}
)

btn.addEventListener("mouseleave",()=>{
    btn.disabled = true
    alert("button disabbled...")


})

// Arrow functions:

// Are anonymous (unless explicitly named).
// Do not have their own this context, instead inheriting it from the surrounding scope.
// Regular functions:

// Can be named and have their own this context (which may differ in some situations, especially when dealing with event handlers).