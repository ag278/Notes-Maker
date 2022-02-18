//var config = require('../../config');
const name1 = document.getElementById('firstname');
const name2 = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirm-password');
let validEmail = false;
let validUser1 = false;
let validUser2 = false;
let validPassword = false;
let validPassword2 = false;
$('#failure').hide();
$('#success').hide();
name1.addEventListener('blur', () => {
    //console.log("name is blurred");

    let regex = /^[a-zA-Z]{1,20}$/; //it means that name can start only from a-z or A-Z and length of name can be from 0-10 and apart from first letter other letter can be others
    let str = name1.value;
    //console.log(regex, str);
    if (regex.test(str)) {
        //console.log("name is ok");
        name1.classList.remove('is-invalid');
        validUser1 = true;
    }
    else {
        //console.log("name is not ok");
        name1.classList.add('is-invalid');
        validUser1 = false;
        //adding another class in the name class
    }


})

name2.addEventListener('blur', () => {
    //console.log("name is blurred");

    let regex = /^[a-zA-Z]{1,20}$/; //it means that name can start only from a-z or A-Z and length of name can be from 0-10 and apart from first letter other letter can be others
    let str = name2.value;
    //console.log(regex, str);
    if (regex.test(str)) {
        //console.log("name is ok");
        name2.classList.remove('is-invalid');
        validUser2 = true;
    }
    else {
        //console.log("name is not ok");
        name2.classList.add('is-invalid');
        validUser2 = false;
        //adding another class in the name class
    }

})
email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    let str = email.value;
    //console.log(regex, str);
    if (regex.test(str)) {
        //console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        //console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

password.addEventListener('blur', () => {
    //console.log("phone is blurred");
    let regex = /^([0-9a-zA-Z]){5,20}$/;
    let str = password.value;
    console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your phone is valid');
        password.classList.remove('is-invalid');
        validPassword = true;
    }
    else {
        //console.log('Your phone is not valid');
        password.classList.add('is-invalid');
        validPassword = false;

    }
})
confirmpassword.addEventListener('blur', () => {
    //console.log("phone is blurred");
    let regex = /^([0-9a-zA-Z]){5,20}$/;
    let str = confirmpassword.value;
    console.log(regex, str);
    if (regex.test(str) && str == password.value) {
        // console.log('Your phone is valid');
        confirmpassword.classList.remove('is-invalid');
        validPassword2 = true;
    }
    else {
        //console.log('Your phone is not valid');
        confirmpassword.classList.add('is-invalid');
        validPassword2 = false;

    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (validEmail && validUser1 && validUser2 && validPassword && validPassword2) {
        let failure = document.getElementById('failure');

        
        let myObj={
            username: email.value,
            password:password.value,
            firstname: name1.value,
            lastname:name2.value,
        };
        //console.log(myObj);
        axios.post( '/user/signup/',   myObj    )
            .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error.response);
        });
        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();

    }
    else {
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
    }
})