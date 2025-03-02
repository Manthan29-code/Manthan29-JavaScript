const buttonClick=()=>{
    console.log("Button Clicked");
    console.log(document.getElementById("txt")); //<h1 id="txt">Hello</h1>
    console.log(document.getElementById("txt").innerHTML);//Hello
    const txt=document.getElementById("txt").innerHTML;
    console.log(txt);
    const msg=document.getElementById("txt");
    msg.innerHTML = "Hello World";
    msg.style.color = "red";
    
}

const buttonDoubleClick=()=>{
    alert("Button double clicked")
    const link = document.getElementById("link");
    console.log(link);//<a id="link" href="https://www.google.com">Google</a>
    console.log(link.href);

    //change link
    link.href = "https://www.hotstar.com";
    link.innerHTML = "Hotstar";
    
}