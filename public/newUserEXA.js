console.log("HI");

var valid = true;

sendData();

function sendData(){

    var data;

    const formBody = document.getElementById('form');
    const firstNameBody = document.getElementById('firstName');
    const lastNameBody = document.getElementById('lastName');
    const mailBody = document.getElementById('mail');
    const phoneNumberBody = document.getElementById('phoneNumber');
    const passwordBody = document.getElementById('password');
    const password2Body = document.getElementById('password2');
    const creditBody = document.getElementById('credit');
    const userIdBody = document.getElementById('userId');
    const birthdayBody = document.getElementById('birthday');

    formBody.addEventListener('submit', async event => {
        event.preventDefault();

        data = checkInputs();

        if (valid === true){

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            
            };

            const res = await fetch('/api', options);
            const json = await res.json();
        } 
        
    });

    // console.log(data);
}

function checkInputs() {

    var listData = {};
    const firstName = firstNameBody.value.trim();
    const lastName = lastNameBody.value.trim();
    const mail = mailBody.value.trim();
    const phoneNumber = phoneNumberBody.value.trim();
    const password = passwordBody.value.trim();
    const password2 = password2Body.value.trim();
    const credit = creditBody.value.trim();
    const userId = userIdBody.value.trim();
    const birthday = birthdayBody.value.trim();


    if(firstName === ''){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        // show error
        // add error class
        setErrorFor(firstNameBody, "First name cannot be blank")
    } else {
        // add success class
        setSuccessFor(firstNameBody);
    }

    if(lastName === ''){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;
        // show error
        // add error class
        setErrorFor(lastNameBody, "Last name cannot be blank")
    } else {
        // add success class
        setSuccessFor(lastNameBody);
    }
    
    if(mail === '')
    {
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        setErrorFor(mailBody, "Email cannot be blank")
    } else if (!isEmail(mail)){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;


        setErrorFor(mailBody, "Email is not valid")
    } else {
        // add success class
        setSuccessFor(mailBody);
    }

    if(phoneNumber === ''){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        // show error
        // add error class
        setErrorFor(phoneNumberBody, "Phone number cannot be blank")
    } else {
        // add success class
        setSuccessFor(phoneNumberBody);
    }

    if(password === ''){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        // show error
        // add error class
        setErrorFor(passwordBody, "psssword cannot be blank")
    } else {
        // add success class
        setSuccessFor(passwordBody);
    }

    if(password2 === '')
    {
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        setErrorFor(password2Body, "Password check cannot be blank")
    } else if (password2 !== password){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        setErrorFor(password2Body, "Passwords does not match")
    } else {
        // add success class
        setSuccessFor(password2Body);
    }

    if(credit === ''){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        // show error
        // add error class
        setErrorFor(creditBody, "Credit card cannot be blank")
    } else {
        // add success class
        setSuccessFor(creditBody);
    }

    if(userId === ''){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        // show error
        // add error class
        setErrorFor(userIdBody, "User id cannot be blank")
    } else {
        // add success class
        setSuccessFor(userIdBody);
    }

    if(birthday === ''){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        // show error
        // add error class
        setErrorFor(birthdayBody, "Birthday cannot be blank")
    } else {
        // add success class
        // listData.push(birthday);
        setSuccessFor(birthdayBody);
    }

    listData = {firstName, lastName, mail, phoneNumber, password, credit, userId, birthday};
    console.log(listData);
    return listData;

};

function isBlank(value, value2, message){
    if(value === ''){
        // show error
        // add error class
        setErrorFor(value2, message)
    } else {
        // add success class
        setSuccessFor(value2);
    }
};

function setErrorFor(input, message){
    const formControl = input.parentElement; //form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
};

function setSuccessFor(input){
    const formControl = input.parentElement; //form-control
    formControl.className = 'form-control success';
};

function isEmail(email) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
}




    // isBlank(firstNameValue, firstName, "First name cannot be blank");
    // isBlank(lastNameValue, lastName, "Last name cannot be blank");
    
    // if(mailValue === '')
    // {
    //     setErrorFor(mail, "Email cannot be blank")
    // } else if (!isEmail(mailValue)){
    //     setErrorFor(mail, "Email is not valid")
    // } else {
    //     listData.push(mail);
    //     setSuccessFor(mail);
    // }

    // isBlank(phoneNumberValue, phoneNumber, "Phone number cannot be blank");
    // isBlank(passwordValue, password, "psssword cannot be blank");

    // if(password2Value === '')
    // {
    //     setErrorFor(password2, "Password check cannot be blank")
    // } else if (password2Value !== passwordValue){
    //     setErrorFor(password2, "Passwords does not match")
    // } else {
    //     listData.push(password);
    //     setSuccessFor(password2);
    // }

    // isBlank(creditValue, credit, "Credit card cannot be blank");
    // isBlank(userIdValue, userId, "User id cannot be blank");
    // isBlank(birthdayValue, birthday, "Birthday cannot be blank");

    // listData = {firstNameValue, lastNameValue, mailValue, phoneNumberValue, passwordValue, creditValue, userIdValue, birthdayValue};
