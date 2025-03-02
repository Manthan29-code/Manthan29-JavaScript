const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
let word = document.getElementById("random_word");
let char = document.getElementById("random_char");
let result = document.getElementById("result");

let random_word='';
let random_char='';
let temp_result=[];
btn1.addEventListener("click", () => {
    console.log("Button 1 clicked");
    random_word= word.value;
    console.log(random_word);
    for (let i=0; i<random_word.length; i++){
        temp_result[i]='_';
    }
    word.value = '';
    word.disabled=true;
});



btn2.addEventListener("click", () => {
    console.log('Button 2 clicked');
    console.log(random_word);
    console.log(random_word.length);
    random_char= char.value;
    console.log(random_char);
    char.value='';
    console.log(temp_result);
    
    for (let i=0; i<random_word.length; i++){
        if (random_word[i]===random_char ){
            temp_result[i]=random_char;
        }
    }
    result.innerHTML = temp_result.join('');
}
);

