var address = "Surbhi Complex, 2nd and 3rd floor, Chimanlal Girdharlal Rd, Opposite Municipal Market, Vasant Vihar, Navrangpura, Ahmedabad, Gujarat 380009"

let substr=address.slice(0,5) + " "+  address.slice(10,15);
console.log(address);
console.log(substr);

let str = "Welcome!";
let withoutFirst = str.slice(0,3)
console.log(str);
console.log( typeof withoutFirst);
console.log(withoutFirst.length);
