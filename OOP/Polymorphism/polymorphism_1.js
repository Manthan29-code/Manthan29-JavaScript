class silverSurfer{
    fly(place)
    {
        console.log("flying");
        
        if(place)
        {
            console.log("flying above" , place);
            
        }    
    }

// js don't support overloading of function  unlike other language
// we have to define one function with all necessary parameter and by 
// if else condition we have to decide which action to be performed by that function
    
}

const silversurfer =new silverSurfer()
silversurfer.fly();   
silversurfer.fly('India');