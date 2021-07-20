const next = document.querySelector(".next")
const next1 = document.querySelector('.next-1')
const prev1 = document.querySelector(".prev-1")
const prev2 = document.querySelector(".prev-2")
const submit = document.querySelector(".submit")
const page1 = document.querySelector(".page")
const page2 = document.querySelector(".page2")
const page3 = document.querySelector(".page3")




next.addEventListener("click", function(event){
event.preventDefault();

input = document.querySelector(".input")
if(input.value ==""){
    alert("Input required: How much do you need to borrow ");
    return false;
}


select = document.getElementById("select")
if(select.value == ''){
    alert("Input required: What type of Bridging Finance do you need? ");
    return false;
}





page1.style.display = "none"
page2.style.display="block"





})


next1.addEventListener("click", function(event){

    event.preventDefault();
 
// Input required 

    input = document.querySelector(".input2")
    if(input.value ==""){
        alert("Input required: Current Property/Land Value ");
        return false;
    }
    
    page2.style.display = "none"
    page3.style.display = "block"



})

// Prev Page
prev1.addEventListener('click', function(event){
    event.preventDefault()
    page2.style.display = "none"
    page1.style.display="block"
})


// Prev Page
prev2.addEventListener('click', function(event){
    event.preventDefault()
    page3.style.display = "none"
    page2.style.display="block"
})


submit.addEventListener("click", function(event){
    event.preventDefault()
// Full name validation 
    input = document.querySelector(".input3")
    if(input.value ==""){
        alert("Input required: Full Name ");
        return false;
    }
    // Phone validation
     input = document.querySelector(".input4")
    if(input.value ==""){
        alert("Input required: Phone Number");
        return false;
    }

// Email validation 
        var inputEmail = document.querySelector(".input5").value
       
        if(inputEmail ==""){
             alert("Input required: Your Email address");
             return false;
        }

        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputEmail.match(regexEmail)){
            alert("Your form was successfully submitted")
            location.reload()
            return true;
           
        }else{
            alert("wrong email address");
            return false;
        }






    
    

    
    

    


})


