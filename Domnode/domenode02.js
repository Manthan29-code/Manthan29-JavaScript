const root = document.getElementById("root");

const balldiv=document.createElement("div");

balldiv.style.height="300px";
balldiv.style.width="300px";
balldiv.style.borderRadius = "50%";
balldiv.style.backgroundColor = "green";

balldiv.addEventListener("mouseenter", () => {
    balldiv.style.height = "150px";
    balldiv.style.width = "150px";
    balldiv.style.backgroundColor = "red";
});

balldiv.addEventListener("mouseleave", () => {
    balldiv.style.height = "300px";
    balldiv.style.width = "300px";
    balldiv.style.backgroundColor = "green";
});

root.appendChild(balldiv);