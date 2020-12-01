let form =document.getElementById("sign-in-form"),
     firstName= document.getElementById("firstName"),
     lastName =  document.getElementById("lastName"),
     userName= document.getElementById("userName"),
     formEmail= document.getElementById("email"),
     password= document.getElementById("password"),
     school = document.getElementById("school"),
     department = document.getElementById("department");

function required(field , error, event){
  if (field.value === "") {
    field.nextElementSibling.innerHTML = error;
    event.preventDefault();
    return false;
  }
  else{
        field.nextElementSibling.innerHTML="";
        return true;
  }
 }




function validation(field , regExp, errorMess1 , errorMess2, event){
  if (field.value === "") {
    field.nextElementSibling.innerHTML = errorMess1;
    event.preventDefault();
    return false;
  }
  if (!field.value.match(regExp)) {
    field.nextElementSibling.innerHTML = errorMess2;
    event.preventDefault();
    return false;
  } else {
    field.nextElementSibling.innerHTML = "";
    return true;
  }
}


function formValidation(event) {
  const nameRegex = /^[a-zA-Z]/,
    emailRegex = /^\w+([-]?\w+)@\w+([-]?\w+)(\w{2,10})+$/,
    passwordRegex = /(?=d)(?=.[a-z])(?=.*[a-zA-Z]).{6,}$/;
    required(userName, "Username is required", event);
    required(school, "Name of school is required", event);
    required(department, "Department is required", event);



  validation(
    firstName,
    nameRegex,
    "First Name is required",
    "Enter a valid name",
    event
  );
  validation(
    lastName,
    nameRegex,
    "Last Name is required",
    "Enter a valid Last Name",
    event
  );

  validation(
    formEmail,
    emailRegex,
    "Email is required",
    "Enter a valid email-address",
    event
  );

  validation(
    password,
    passwordRegex,
    "Password is required",
    "Password must not be at least 6 characters",
    event
  );
  
  return true;
}




form.addEventListener("submit", formValidation);


