let submit=()=>{
    let inpname=document.querySelector("#name").value
    let inpemail=document.querySelector("#email").value

    let formname=document.querySelector("#formname")
    let formemail=document.querySelector("#formemail")
    if(inpname ==""){
        formname.innerHTML="Please enter name"
        let a = document.querySelector("#name")
        return false 
    }
    else if (inpname.match ([/a-z/]) 
        && inpname.match([/A-Z/])){
            formname.innerHTML = "Enter Valid name";
            return false
        }





    if (inpemail ==="") {
        formemail.innerHTML = "Please enter EMAIL";
        return false
    }

    else if ( !(inpemail.includes("@"))){
        formemail.innerHTML = "please enter valid email"
        

        return false

    }
}