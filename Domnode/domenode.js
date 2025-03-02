const root = document.getElementById("root");

const titleh1=document.createElement("h1");
titleh1.innerHTML="INDIA";

root.appendChild(titleh1);

var users = ["ram","shyam","seeta","geeta","hari","krishna","ok","yes"]

for(let i=0;i<users.length;i++){

    //h2
    var userH2 = document.createElement("h2") //<h2><h2><h2><h2>
    userH2.innerHTML = users[i] //<h2>ram</h2> <h2>shyam<h2>
    root.appendChild(userH2) //<div><h2>...</h2>....</div>
}

const addButton = document.createElement("button");
addButton.innerHTML= "Click me";

addButton.addEventListener("click" , ()=>
{
    alert("button clicked   ")
})

root.appendChild(addButton);




