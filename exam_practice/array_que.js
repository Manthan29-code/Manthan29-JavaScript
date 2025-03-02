const device=[
    {
      "id": 1,
      "name": "Laptop",
      "category": "Electronics",
      "price": 75000,
      "stock": 15,
      "brand": "Dell",
      "ratings": 4.5,
      "variations": [
        { "ram": "8GB", "storage": "256GB SSD" },
        { "ram": "16GB", "storage": "512GB SSD" }
      ]
    },
    {
      "id": 2,
      "name": "Smartphone",
      "category": "Electronics",
      "price": 40000,
      "stock": 25,
      "brand": "Samsung",
      "ratings": 4.3,
      "variations": [
        { "ram": "6GB", "storage": "128GB" },
        { "ram": "8GB", "storage": "256GB" }
      ]
    },
    {
      "id": 3,
      "name": "Bluetooth Speaker",
      "category": "Accessories",
      "price": 5000,
      "stock": 30,
      "brand": "JBL",
      "ratings": 4.7,
      "variations": [
        { "color": "Black", "battery": "10 Hours" },
        { "color": "Blue", "battery": "12 Hours" }
      ]
    },
    {
      "id": 4,
      "name": "Wireless Headphones",
      "category": "Accessories",
      "price": 8000,
      "stock": 20,
      "brand": "Sony",
      "ratings": 4.6,
      "variations": [
        { "color": "Red", "battery": "15 Hours" },
        { "color": "White", "battery": "20 Hours" }
      ]
    },
    {
      "id": 5,
      "name": "Smartwatch",
      "category": "Wearable",
      "price": 15000,
      "stock": 10,
      "brand": "Apple",
      "ratings": 4.8,
      "variations": [
        { "size": "40mm", "strap": "Silicone" },
        { "size": "44mm", "strap": "Leather" }
      ]
    }
]

// 1)
const productName=device.map((ele)=>{
    return ele.name
})
console.log(productName);

//2)
const productFilter=device.filter((ele)=>{
    return ele.price > 10000
})

console.log(productFilter);

// 3)
const total =device.reduce((sum , ele)=>{
   return  sum + ele.stock
}
, 0)

console.log(total);

// 4))
const findRating =device.find((ele)=>
    {
        return ele.ratings >4.6
})
    
console.log(findRating);

// 5)
const loweThen = device.some((ele)=>{
    return ele.price<5000
})

console.log(loweThen);

// 6))
const greaterThen = device.some((ele)=>{
    return ele.ratings > 4.3
})

console.log(greaterThen);

// 7))
const order=device.sort((a,b)=>
    b.price-a.price
)
console.log(order);

// 8))
const allVariations = device.flatMap(product => product.variations);

console.log(allVariations);


// 9))
const includes=device.map((ele)=>{
    return ele.category
}).includes("Electronics")

console.log(includes);

// 10))
device.forEach((element )=> {
    console.log("product:-", element.name , "price:- " , element.price);      
});



