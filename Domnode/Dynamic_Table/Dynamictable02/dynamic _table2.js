var smartPhones=[
  { id: 1, brand: "Apple", model: "iPhone 14", price: 79920, storage: "128", battery: 3200 },
  { id: 2, brand: "Samsung", model: "Galaxy S23", price: 71920, storage: 256, battery: 4000 },
  { id: 3, brand: "Google", model: "Pixel 7", price: 63920, storage: "128", battery: 4350 },
  { id: 4, brand: "OnePlus", model: "11 Pro", price: 55920, storage: 256, battery: 5000 },
  { id: 5, brand: "Xiaomi", model: "Mi 13", price: 47920, storage: "128", battery: 4500 },
  { id: 6, brand: "Realme", model: "GT Neo 5", price: 39920, storage: 256, battery: 4600 },
  { id: 7, brand: "Sony", model: "Xperia 5 IV", price: 79920, storage: "128", battery: 5000 },
  { id: 8, brand: "Oppo", model: "Find X6", price: 63920, storage: 512, battery: 4700 },
  { id: 9, brand: "Vivo", model: "X90", price: 71920, storage: "128", battery: 4870 },
  { id: 10, brand: "Motorola", model: "Edge 40", price: 55920, storage: 256, battery: 4400 },
  { id: 11, brand: "Asus", model: "ROG Phone 7", price: 87920, storage: 512, battery: 6000 },
  { id: 12, brand: "Nokia", model: "X30", price: 39920, storage: "128", battery: 4200 },
  { id: 13, brand: "Huawei", model: "P60 Pro", price: 79920, storage: 256, battery: 4800 },
  { id: 14, brand: "Honor", model: "Magic5", price: 63920, storage: "128", battery: 5100 },
  { id: 15, brand: "LG", model: "Velvet", price: 47920, storage: "128", battery: 4300 },
  { id: 16, brand: "Poco", model: "F5 Pro", price: 43920, storage: 256, battery: 5000 },
  { id: 17, brand: "Nothing", model: "Phone 1", price: 55920, storage: "128", battery: 4500 },
  { id: 18, brand: "ZTE", model: "Axon 40", price: 71920, storage: 512, battery: 4900 },
  { id: 19, brand: "Lenovo", model: "Legion Y70", price: 51920, storage: 256, battery: 5100 },
  { id: 20, brand: "Micromax", model: "In Note 2", price: 23920, storage: "128", battery: 5000 }

]

let totalamount=0;

function createTable(table_info) {

  for (let phone of table_info) {

    // console.log("phone-->" , phone)
    const tbody = document.getElementById("tbody");
    const tr = document.createElement("tr"); //<tr>

    for (let key of Object.keys(phone)) {
      //   console.log("key-->" , key)
      const TD = document.createElement("td");
      TD.innerHTML = phone[key];
      tr.appendChild(TD);
    }

    const btn = document.createElement("button")
    btn.innerHTML = "Purchase";
    btn.style.borderRadius = "10%"
    btn.style.background = "red"
    tr.appendChild(btn)
    btn.addEventListener("click", () => {
      totalamount += phone.price;
      alert("Your total purchase is " + totalamount);

    })

    tbody.appendChild(tr)
  }
}

createTable(smartPhones);

const storage=document.getElementById("storage")
storage.addEventListener('click' , ()=>{
    
    console.log("select" , storage.value);
    console.log("select" , typeof storage.value);
    const tbody = document.getElementById("tbody");
    tbody.innerHTML="";
   if(storage.value != "All")
   {
        
        let new_table=smartPhones.filter((phone)=>{
        return phone.storage==storage.value;
      })
        console.log(new_table)
        createTable(new_table)
   }
  else{
    createTable(smartPhones);
  }    


})

