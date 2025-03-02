var str="manthan"
console.log(str)

// rrepeat()
let ans_str=''
for(let i =0 ; i<3 ; i++)
{
    ans_str+=str 
}   

console.log(ans_str)


console.log(str.repeat(3))


var address = "Surbhi Complex, 2nd and 3rd floor, Chimanlal Girdharlal Rd, Opposite Municipal Market, Vasant Vihar, Navrangpura, Ahmedabad, Gujarat 380009";
let addressWord=address.split(" ").map((word)=> word.slice(0,1).toLowerCase() + word.slice(1)).join(' ');
console.log(address);
console.log(addressWord);
console.log(' '.);



