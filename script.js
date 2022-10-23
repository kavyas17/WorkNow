function updateAcc(){
    document.getElementById('test').write(email);
    document.write("bruh help");
    let tempName = accountForm.documentElement.getElementById('name-input');
    let tempUser = accountForm.documentElement.getElementById('user-input');
    let tempEmail = accountForm.documentElement.getElementById('email-input');
    let currPass = accountForm.documentElement.getElementById('pass-input');
    let newPass = accountForm.documentElement.getElementById('new-pass-input');
    let newPass2 = accountForm.documentElement.getElementById('new-pass-input-2');
    if(tempName.value.length!=0){
    name = tempName;
    }
    if(tempUser.value.length!=0){
    username = tempUser;
    }
    if(tempEmail.value.length!=0){
    email = tempEmail;
    }
    if(currPass.value.length!=0 && currPass.value == password && newPass.value.length >= 6 && newPass.value == newPass2.value){
    password = newPass;
    }
  }