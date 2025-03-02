var images=[
    {
        Name: "google",
        link: "https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png"
    }
    ,
    {
        Name: "facebook",
        link: "https://i.pinimg.com/474x/57/89/43/578943fe258769a4d9e457ea0809a22d.jpg"
    }
    ,
    {
        Name: "amazon",
        link: "https://i.pinimg.com/474x/53/75/3f/53753f5440c5a69e6ae39cbec27dccf7.jpg"
    },
    {
        Name: "microsoft",
        link: "https://i.pinimg.com/474x/b9/3f/8d/b93f8dd20cb32a7561b4c215a486c3eb.jpg"
    }
    
]

// let txt="microsoft"

// var img_link1= images.find((img_name) =>
//     img_name.Name==txt
// )

// var img_link2= images.find((img_name)=>
//     {
//         if(img_name.Name==txt)
//             {
//                 console.log(img_name);
                
//                 return img_name;
//             }
//     })


// console.log(img_link1);
// console.log(img_link2);

const getData=()=>{
    var txt=document.getElementById("txt").value;
    console.log(txt);
    console.log(typeof txt)
    
    var img_link= images.find((img_name) =>
        img_name.Name==txt
    )
    console.log(img_link);
    
    document.getElementById("image").src=img_link.link;

}