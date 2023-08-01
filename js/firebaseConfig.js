// config for firebase database
const firebaseConfig = {
    apiKey: "AIzaSyCzfXEU_5miwdCDAHswtiHUn2DLmwf0sJk",
    authDomain: "ib-codeacademy-users.firebaseapp.com",
    databaseURL: "https://ib-codeacademy-users-default-rtdb.firebaseio.com",
    projectId: "ib-codeacademy-users",
    storageBucket: "ib-codeacademy-users.appspot.com",
    messagingSenderId: "727243353790",
    appId: "1:727243353790:web:629e8cd644a39781de78ef",
    measurementId: "G-YH477FC3ZZ"
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);

  // reference of database
  var UsersDataDB = firebase.database().ref('ib-codeacademy-users');

  // form id's 
  let name_form = document.getElementById("name-form");
  let gender_form = document.getElementById("dob-form");
  let education_form = document.getElementById("edu-form");
  let contact_form = document.getElementById("contact-form");
  
  // for users name form 
  name_form.addEventListener('submit', submitFunctionForName);
  // for gender form
  gender_form.addEventListener('submit', submitFunctionForGender);
  // for education form
  education_form.addEventListener('submit', submitFunctionForEducation);
  // for contact form
  contact_form.addEventListener('submit', submitFunctionForContact)

  // submit functon for users name
  function submitFunctionForName(e) {
    e.preventDefault();
    var fname = getElemetVal('fname');
    var lname = getElemetVal('lname');

    // call the function for submit user data
    saveUsersName(fname, lname);
  }
  // function for save user fname or lname
const saveUsersName = (fname, lname) => {
    var newFormData = UsersDataDB.push();

    newFormData.set({
        fname: fname,
        lname: lname,
    });
};

  // submit function for users gender or dob
  function submitFunctionForGender(e) {
    e.preventDefault();
    var dob = getElemetVal('dob');
    var gender = getElemetVal('gender');

    // call the function for save the user data
    saveUsersDoBorGender(dob, gender);
  }
// function for save users dob or gender
const saveUsersDoBorGender = (dob, gender) => {
    var newFormData = UsersDataDB.push();

    newFormData.set({
        dob: dob,
        gender: gender,
    });
}

  // submit function for users profession or education
  function submitFunctionForEducation(e) {
    e.preventDefault();
    var profession = getElemetVal('profession');
    var education = getElemetVal('study');

    // call the funciton that is save the user data
    saveUsersProfessionOrEducation(profession, education);
  }
// function for save users professtion or education
const saveUsersProfessionOrEducation = (profession, education) => {
    var newFormData = UsersDataDB.push();

    newFormData.set({
        profession: profession,
        education: education,
    });
}
  // submit function for users contact form
  function submitFunctionForContact(e) {
    e.preventDefault();
    var email = getElemetVal('email');
    var phone = getElemetVal('phone');

    // call the function that is save the user data into firebase database
    saveUsersEmailOrPhone(email, phone);
  }
// function for save users email or phone number
const saveUsersEmailOrPhone = (email, phone) => {
    var newFormData = UsersDataDB.push();

    newFormData.set({
        email: email,
        phone: phone,
    });
}

// function for return value of input fields
const getElemetVal = (id) => {
    return document.getElementById(id).value;
};