const form=document.getElementById("form");
const username=document.querySelector("#username");
const password=document.querySelector("#password");
const genderRadioButtons = document.querySelectorAll('input[name="gender"]');
const checkbox=document.querySelector("#course");
const html=document.querySelector("#html");
const css=document.querySelector("#css");
const js=document.querySelector("#js");

const username_error=document.getElementById("username_error");

const password_error=document.getElementById("password_error");

const selectedgender = genderRadioButtons.value;

const gender_error=document.getElementById("gender_error");

const checkbox_error=document.getElementById("checkbox_error");

form.addEventListener('submit',(e)=> 
{
    var username_check=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!username.value.match(username_check))
    {
        e.preventDefault();
        username_error.innerHTML="*invalid email";
    }
    if(password.value.length<=6)
    {
        e.preventDefault();
        password_error.innerHTML="*password must contain more than 6 characters";
    }
    if(password.value.length>=15)
    {
        e.preventDefault();
        password_error.innerHTML="*password must contain less than 15 characters";
    }
    let selectedgender;
    for (const radioButton of genderRadioButtons) {
     if (radioButton.checked) {
       selectedgender = radioButton.value;
      break;
  }
}
console.log(selectedgender);

if(selectedgender==null){
    e.preventDefault();
    gender_error.innerHTML="*select your gender";
}
let html=document.getElementById("html");
let css=document.getElementById("css");
let js=document.getElementById("js");
if (html.checked || js.checked || css.checked){
    
}
else{
    e.preventDefault();
    checkbox_error.innerHTML="*Select atleast one programming language";
}
if(domain===""){
    document.getElementById("checkbox_error").innerHTML="*select any course";
}
else{
    document.getElementById("checkbox_error").innerHTML="";
}
})
