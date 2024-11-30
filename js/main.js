//Move from login to signup
var goToSignup=document.querySelector("#goToSignup");
var goToSignin=document.querySelector("#goToSignin");
var windowSignup=document.querySelector("#windowSignup");
var windowSignin=document.querySelector("#windowSignin");

goToSignup?.addEventListener("click" , function(){
    windowSignup.classList.remove("d-none")
    windowSignin.classList.add("d-none")
})
goToSignin?.addEventListener("click" , function(){
    windowSignin.classList.remove("d-none")
    windowSignup.classList.add("d-none")
})

///////////////////start of signup form//////////////////////

//Variables for signup
var signupName=document.querySelector("#signupName");
var signupEmail=document.querySelector("#signupEmail");
var signupPassword=document.querySelector("#signupPassword");
var signupButton=document.querySelector("#signup");
var nameError=document.querySelector("#nameError");
var emailError=document.querySelector("#emailError");
var passwordError=document.querySelector("#passwordError");
var nameExisting=document.querySelector("#nameExisting");
var emailExisting=document.querySelector("#emailExisting");
var toggleVisibility = document.querySelector("#toggle-visibility");
var nameInput=/^[a-zA-Z]{3,}[1-9]*$/
var emailInput=/^[a-zA-Z0-9._%+-]{1,}@.{1,}\.[a-zA-Z]{2,}$/
var passwordInput = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@]).{8,}$/;
var signupContainer=[];
if (localStorage.getItem("signupData")!==null) {
    signupContainer=JSON.parse(localStorage.getItem("signupData"))
}

//add event listener to signup button
signupButton?.addEventListener("click", function(){

    var name=signupName.value;
    var email=signupEmail.value;
    var password=signupPassword.value;

    //name error && email error && password error
        if (!nameInput.test(name)) {
            signupName.classList.add("is-invalid")
            signupName.classList.remove("is-valid")
            nameError.classList.remove("d-none")
        }
        else{
            signupName.classList.remove("is-invalid")
            signupName.classList.remove("is-valid")
            nameError.classList.add("d-none")
            
        }
    
    
        if (!emailInput.test(email)) {
            signupEmail.classList.add("is-invalid")
            signupEmail.classList.remove("is-valid")
            emailError.classList.remove("d-none")
        }
        else{
            signupEmail.classList.remove("is-invalid")
            signupEmail.classList.remove("is-valid")
            emailError.classList.add("d-none")
            
        }
    
    
        if (!passwordInput.test(password)) {
            signupPassword.classList.add("is-invalid")
            signupPassword.classList.remove("is-valid")
            passwordError.classList.remove("d-none")
        }
        else{
            signupPassword.classList.remove("is-invalid")
            signupPassword.classList.remove("is-valid")
            passwordError.classList.add("d-none")
            
        }

    if ((!nameInput.test(name))||(!emailInput.test(email))||(!passwordInput.test(password))) {
        return;
    }
    // Check if the form has been submitted
        if (signupContainer.some(signupData => signupData.name === name )) {
            signupName.classList.add("is-invalid")
            signupName.classList.remove("is-valid")
            nameExisting.classList.remove("d-none")
        }
        else{
            signupName.classList.remove("is-invalid")
            signupName.classList.remove("is-valid")
            nameExisting.classList.add("d-none")
        }
        if (signupContainer.some(signupData => signupData.email === email )) {
            signupEmail.classList.add("is-invalid")
            signupEmail.classList.remove("is-valid")
            emailExisting.classList.remove("d-none")
        }
        else{
            signupEmail.classList.remove("is-invalid")
            signupEmail.classList.remove("is-valid")
            emailExisting.classList.add("d-none")
        }
    if ((signupContainer.some(signupData => signupData.name === name ))||(signupContainer.some(signupData => signupData.email === email ))) {
        return;
    }

    

    var signupData = {
        name : name,
        email : email,
        password : password
    }

    signupContainer.push(signupData);
    console.log(signupContainer);
    localStorage.setItem("signupData",JSON.stringify(signupContainer))
    clearForm()
    windowSignin.classList.remove("d-none")
    windowSignup.classList.add("d-none")

})

//clear
function clearForm() {
    signupName.value=null;
    signupEmail.value=null;
    signupPassword.value=null;
}

//Name Test
function nameTest (nameValue){
    if (nameInput.test(nameValue)) {
        signupName.classList.add("is-valid");
        signupName.classList.remove("is-invalid")
        
    }
    else{
        signupName.classList.add("is-invalid");
        signupName.classList.remove("is-valid")
    }
}


//Email Test
function EmailTest (emailValue){
    if (emailInput.test(emailValue)) {
        signupEmail.classList.add("is-valid");
        signupEmail.classList.remove("is-invalid")
        
    }
    else{
        signupEmail.classList.add("is-invalid");
        signupEmail.classList.remove("is-valid")
    }
}

//Password Test
function passwordTest (passwordValue){
    if (passwordInput.test(passwordValue)) {
        signupPassword.classList.add("is-valid");
        signupPassword.classList.remove("is-invalid")
    }
    else{
        signupPassword.classList.add("is-invalid");
        signupPassword.classList.remove("is-valid")
    }
}

//Show password sign up
toggleVisibility?.addEventListener("click", function() {
    if (signupPassword.type === "password") {
        signupPassword.type = "text";
        toggleVisibility.textContent = "😑";
    } else {
        signupPassword.type = "password";
        toggleVisibility.textContent = "👁️";
    }
})

/////////////////////end of signup form validation/////////////////////

/////////////////////start login///////////////////////////

//Variables for login
var signinEmail=document.querySelector("#signinEmail");
var signinPassword=document.querySelector("#signinPassword");
var signinEmail=document.querySelector("#signinEmail");
var signinPassword=document.querySelector("#signinPassword");
var incorrect=document.querySelector("#incorrect");
var emptyFields=document.querySelector("#empty-fields");
var loginButton=document.querySelector("#login");
var toggleVisibility2=document.querySelector("#toggle-visibility2");

//show password login
toggleVisibility2?.addEventListener("click", function(){
    if (signinPassword.type === "password") {
        signinPassword.type = "text";
        toggleVisibility2.textContent = "😑";
    }
    else{
        signinPassword.type = "password";
        toggleVisibility2.textContent = "👁️";
    }
})
//Login
document.addEventListener("DOMContentLoaded" , function(){
loginButton?.addEventListener("click" ,function(){
    var logEmail=signinEmail.value
    var logpass=signinPassword.value

    var loginData = {
        logEmail : logEmail,
        logPass : logpass
    }
    var getData=JSON.parse(localStorage.getItem("signupData"))
    for (let i = 0 ; i < getData.length ; i++){
        if (getData[i].email === loginData.logEmail && getData[i].password === loginData.logPass) {
            localStorage.setItem("username" , getData[i].name)
            console.log("Login successful!");
            window.location.href = "./home/home.html";
            return;
        }
        else if (loginData.logEmail === "" || loginData.logPass === "") {
            emptyFields.classList.remove("d-none")
            signinEmail.classList.add("is-invalid")
            signinPassword.classList.add("is-invalid")
            return;
        }
        else{
            emptyFields.classList.add("d-none")
            incorrect.classList.remove("d-none")
            signinEmail.classList.add("is-invalid")
            signinPassword.classList.add("is-invalid")
        }
    }
});
});
var username = localStorage.getItem("username");
document.querySelector("#username").innerHTML= "welcome " + username
//////////////end of login///////////////////

//////////////start of signup///////////////////

var logOut = document.querySelector("#logout");

logOut?.addEventListener("click" , function(){
    localStorage.removeItem('username')
})

/////////////end of logout///////////////////