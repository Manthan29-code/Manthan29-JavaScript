let set=0;

function getimg()
{
    const ele=document.getElementById("picture");
    if(set===0){
        ele.src="https://cdn.pixabay.com/photo/2022/03/21/21/44/file-7084007_1280.png"
        set=1;
    }
    else{
        ele.src="#";
        set=0;
    }
}