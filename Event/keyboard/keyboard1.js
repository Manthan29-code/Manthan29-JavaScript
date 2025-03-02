const getData=(event)=>{
    // console.log(event.key);
    // console.log('hetData');
    // const txt = document.getElementById('txt').value;
    // console.log(txt); 
    
    const txt = document.getElementById('txt') //<input type="text" id="txt">
    console.log(txt.value);
    
    const nameValue = document.getElementById('nameValue')
    nameValue.innerHTML=txt.value;
    
    const nameError = document.getElementById('nameError')

    if(txt.value.trim().length<=3)
    {
        const nameError= document.getElementById('nameError')
        nameError.innerHTML="Name must be at least 3 characters";
        nameValue.innerHTML = '';
        txt.style.outline='1px solid red'
    }
    else{
        const nameError= document.getElementById('nameError')
        nameError.innerHTML="";
        nameValue.innerHTML =txt.value;
        txt.style.outline='1px solid green';
    }
}