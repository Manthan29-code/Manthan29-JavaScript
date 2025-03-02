var lang =["gujarati","hindi","english","marathi","tamil"];
console.log(lang)
lang.splice(1,1)//1st index and remove 1 element

//make first letter capital

function capitalize(list) {
    return list.map((ele) => {
        return ele.at(0).toUpperCase() + ele.slice(1);
    });
}

const answer=capitalize(lang)

console.log( answer)

console.log(lang)
lang.splice(1,2)//1st index and remove 2 element

console.log(lang)
lang.splice(2,0,"telugu")//2nd index and add telugu remove 0 element

console.log(lang)
lang.splice(2,2,"telugu","punjabi","sanscrit")//2nd index and add telugu remove 0 element
console.log(lang)