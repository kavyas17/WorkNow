window.onload = function() {
  if (localStorage.getItem("name").length==0) {
    localStorage.setItem("name", "First Last");
  } else {
    localStorage.setItem("name", localStorage.getItem("name"));
  }
  if (localStorage.getItem("user").length == 0) {
    localStorage.setItem("user", "username");
  } else {
    localStorage.setItem("user", localStorage.getItem("user"));
  }
  if (localStorage.getItem("email").length == 0) {
    localStorage.setItem("email", "example@blank.com");
  } else {
    localStorage.setItem("email", localStorage.getItem("email"));
  }
  if (localStorage.getItem("password").length == 0) {
    localStorage.setItem("password", "password");
  } else {
    localStorage.setItem("password", localStorage.getItem("password"));
  }  if (localStorage.getItem("option").length == 0) {
    localStorage.setItem("option", "All application updates.");
  } else {
    localStorage.setItem("option", localStorage.getItem("option"));
  }
document.getElementById("name").innerHTML = localStorage.getItem("name");
document.getElementById("user").innerHTML = localStorage.getItem("user");
document.getElementById("email").innerHTML = localStorage.getItem("email");
document.getElementById("emailprefs").innerHTML = localStorage.getItem("option");
document.getElementById("hello").innerHTML = localStorage.getItem("name");
}

document.getElementById("hello").innerHTML = localStorage.getItem("name");


function updateAcc() {
  let tempName = document.getElementById("name-input");
  let tempUser = document.getElementById("user-input");
  let tempEmail = document.getElementById("email-input");
  let currPass = document.getElementById("pass-input");
  let newPass = document.getElementById("new-pass-input");
  let newPass2 = document.getElementById("new-pass-input-2");

  if (tempName.value.length != 0) {
    localStorage.setItem("name", tempName.value);
  }
  if (tempUser.value.length != 0) {
    localStorage.setItem("user", tempUser.value);
  }
  if (tempEmail.value.length != 0) {
    localStorage.setItem("email", tempEmail.value);
  }

  if (currPass.value.length != 0) {
    if (currPass.value != localStorage.getItem("password")) {
      alert("The password you entered does not match your current password.");
    } else if (newPass.value.length < 6) {
      alert("The password you entered is less than 6 characters long.");
    } else if (newPass.value == localStorage.getItem("password")) {
      alert("The password you entered is the same as your current password.");
    } else if (newPass.value != newPass2.value) {
      alert("Your new password does not match the confirm password field.");
    } else {
      localStorage.setItem("password", newPass.value);
      alert("Your password was successfully changed.");
    }
  }
}

function emailAlert() {
    let ele = document.getElementsByName('email-pref');
    for(i = 0; i < ele.length; i++) {
    if(ele[i].checked){
      if(ele[i].id == "option1"){
        localStorage.setItem("option", "All application updates.");
      } else if(ele[i].id == "option2"){
        localStorage.setItem("option", "Only action needed items.");
      } else{
        localStorage.setItem("option", "Never.");
      }
    }
  }
  document.getElementById("emailprefs").innerHTML = localStorage.getItem("option");
  alert("Your email preferences have been updated.");
}

function login() {
  let tempUser = document.getElementById("user-login").value;
  localStorage.setItem("user", tempUser.value);
  
  if (localStorage.getItem("name").length==0)) {
    localStorage.setItem("name", tempUser.value);
  }
}