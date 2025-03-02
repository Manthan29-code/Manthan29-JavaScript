var lang=["Hindi", "Bengali", "Telugu", "Marathi", "Tamil", "Urdu","Gujarati", "Malayalam","Kannada",]


var flag_1=lang.every((m)=>m.length>=6);
var flag_3=lang.some((m)=>m.length>=4);

console.log("value of flag  ",flag_1);
console.log("value of flag  ",flag_3);



var flag_2=lang.some((str)=>str.includes("h"))
console.log("value of flag  ",flag_2);
