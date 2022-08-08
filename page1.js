//form
let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("UserId");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let mobilesEl = document.getElementById("mobile");
let mobilesErrMsgEl = document.getElementById("mobileErrMsg");


let otpEl = document.getElementById("otps");
let otpErrMsgEl = document.getElementById("otpErrMsg");

nameEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
  }
});

mobilesEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
      mobilesErrMsgEl.textContent = "Required*";
    } else {
      mobilesErrMsgEl.textContent = "";
    }
  });

  otpEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
      otpErrMsgEl.textContent = "Required*";
    } else {
      otpErrMsgEl.textContent = "";
    }
  });
let code1=Math.floor(Math.random() * 10000);
function otp()
{
  
  console.log(length);
  if(UserId.value===""){
    alert("Please Enter the Name");
  }
  else if(mobile.value===""){
    alert("Please Enter the Number");
  }
  else{
    alert(code1);
  }
}
function submit()
{
  if(UserId.value===""){
    alert("Please Enter the Name");
  }
  else if(mobile.value===""){
    alert("Please Enter the Number");
  }

  else if(otps.value===""){
    alert("Please Enter the otp");
  }
 
  else if(code1!=otps.value){
    alert("Wrong OTP");
  }
  
else{
  alert("Sucessful");

let numberEl = document.getElementById("number");
let enterEl = document.getElementById("enter");
let headerEl = document.getElementById("header");
numberEl.textContent=UserId.value;
enterEl.textContent="Get Started";
headerEl.textContent="Welcome";
}
}
