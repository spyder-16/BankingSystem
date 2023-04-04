var namePointer = document.querySelector('#namePointer');
var emailPointer = document.querySelector('#emailPointer');
var mobilePointer = document.querySelector('#mobilePointer');
var accountPointer = document.querySelector('#accountPointer');
var usernamePointer = document.querySelector('#usernamePointer');
var passwordPointer = document.querySelector('#passwordPointer');
var repasswordPointer = document.querySelector('#repasswordPointer');


namePointer.style.display = 'none';
emailPointer.style.display = 'none';
mobilePointer.style.display = 'none';
accountPointer.style.display = 'none';
usernamePointer.style.display = 'none';
passwordPointer.style.display = 'none';
repasswordPointer.style.display = 'none';

window.onload = function (event) {

  // Simulate login click when user presses Enter/Return key
  document.querySelector('#mainForm').addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      document.querySelector('#nextButton').click();
    }
  });

  // function isValidEmailAddress(emailAddress) {
  //   var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  //   return pattern.test(emailAddress);
  // }
  function isValidName(name) {
    //var pattern = /^[a-zA-Z]+(?:-[a-zA-Z]+)*\s+[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
    var pattern=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    return pattern.test(name);
  }

  function isValidEmail(email) {
    var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    return pattern.test(email);
  }

  function isValidMobile(mobile) {
    var pattern = /^[0-9]{10}$/;
    return pattern.test(mobile);
  }

  function isValidAccount(account) {
    var pattern = /^[0-9]{12}$/;
    return pattern.test(account);
  }
  

  function isValidUsername(username) {
    //var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var pattern = /^[a-zA-Z][a-zA-Z0-9_]{5,19}$/; 
    return pattern.test(username);
  }


  function validateCredentialsFormat(loginCreds) {
    var passedCheck = true;
    var passwordField = document.querySelector('#passwordField');
    var userField = document.querySelector('#userField');
    //checking pass length
    if (loginCreds.password.length < 6) {

      passwordPointer.style.display = '';

      passwordField.classList.add('error');
      passedCheck = false;
    } else {
      passwordField.classList.remove('error');
      passwordPointer.style.display = 'none';
    }
    //cross verifying pass
    if (loginCreds.repassword != loginCreds.password) {

      repasswordPointer.style.display = '';

      repasswordField.classList.add('error');
      passedCheck = false;
    }
    else {
      repasswordPointer.style.display = 'none';
      repasswordField.classList.remove('error');
    }
    //checking user name
    if (!isValidUsername(loginCreds.username)) {
      usernamePointer.style.display = '';

      userField.classList.add('error');
      passedCheck = false;
    }
    else {
      usernamePointer.style.display = 'none';
      userField.classList.remove('error');
    }
    //checking name
    if (!isValidName(loginCreds.name)) {
      namePointer.style.display = '';

      userField.classList.add('error');
      passedCheck = false;
    }
    else {
      namePointer.style.display = 'none';
      userField.classList.remove('error');
    }
    //checking email
    if (!isValidEmail(loginCreds.email)) {
      emailPointer.style.display = '';

      userField.classList.add('error');
      passedCheck = false;
    }
    else {
      emailPointer.style.display = 'none';
      userField.classList.remove('error');
    }
    //checking mobile
    if (!isValidMobile(loginCreds.mobile)) {
      mobilePointer.style.display = '';

      userField.classList.add('error');
      passedCheck = false;
    }
    else {
      mobilePointer.style.display = 'none';
      userField.classList.remove('error');
    }
    //checking account number
    if (!isValidAccount(loginCreds.account)) {
      accountPointer.style.display = '';

      userField.classList.add('error');
      passedCheck = false;
    }
    else {
      accountPointer.style.display = 'none';
      userField.classList.remove('error');
    }

    // console.log("passCheck : ", passedCheck)
    return passedCheck;
  }

  document.querySelector('#nextButton').addEventListener('click', function () {
    var nm = document.querySelector('input[name="name"]').value;
    var em = document.querySelector('input[name="email"]').value;
    var mob = document.querySelector('input[name="mobile"]').value;
    var ac = document.querySelector('input[name="account"]').value;
    var us = document.querySelector('input[name="username"]').value;
    var pass = document.querySelector('input[name="password"]').value;
    var repass = document.querySelector('input[name="repassword"]').value;
   

    var loginCreds = {
      name: nm,
      email: em,
      mobile: mob,
      account: ac,
      username: us,
      password: pass,
      repassword: repass
    };

    if (validateCredentialsFormat(loginCreds)) {
      console.log("Valid Credentials have been entered ...\n Proceeding to sending data");

      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
          console.log("(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)")
          window.location.href = '/voice';
        }
      }

      xhr.open("POST", "/enroll", true);
      xhr.setRequestHeader("Content-type", "application/json");

      xhr.send(JSON.stringify(loginCreds));

      console.log("Your http message has been sent.");
    }
    else {
      console.log("Invalid credentials have been entered ...\nPlease try again ...");
    }

    console.log("username : ", us)
    console.log("password : ", pass)
    console.log("password : ", repass)

    console.log("You clicked the login Next button");
  });

};
