const email = document.getElementById('email');
const password = document.getElementById('password');
let validEmail = false;
let validpassword = false;
$('#failure').hide();
$('#success').hide();

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (validEmail && validpassword) {
        let failure = document.getElementById('failure');

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
//the use of jquery is beacse if we do it in normal way then in alert part it is showing downward as the auccess part is already exist there although i
//it is not showing
