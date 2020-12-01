let form =document.getElementById("sign-in-form"),
 password = document.getElementById("password"),
 userName = document.getElementById("userName"),
 errorfunct = document.querySelector(".error"),
 passwordRegex = /(?=d)(?=.[a-z])(?=.*[a-zA-Z]).{6,}$/;

function required(UserName, e){
  if (UserName.value === ""){
    errorfunct.innerText = 'Username or Email is required'
  return false;
  e.preventDefault()
  }
else{
      field.errorfunct.innerText="";
      return true;
}
}



 function validateForm(e){
   
  if((password.value === "")){
      document.querySelector(".error-block").innerHTML = "Password is required";
      e.preventDefault();
      return false;
  }
   else if(!password.value.match(passwordRegex)){
      document.querySelector(".error-block").innerHTML = "Password must not be at least 6 characters";
      e.preventDefault();
      return false;
  }else{
      document.querySelector(".error-block").innerHTML = "";
      return true;
  }

}
function userNameVal (e){
required(userName, e)
}




form.addEventListener('submit', validateForm, userNameVal);



