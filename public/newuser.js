console.log("HI");

var valid = true;
sendData();

function sendData(){

    var data;

    const form = document.getElementById('form');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const mail = document.getElementById('mail');
    const phoneNumber = document.getElementById('phoneNumber');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const credit = document.getElementById('credit');
    const userId = document.getElementById('userId');
    const birthday = document.getElementById('birthday');

    form.addEventListener('submit', async event => {
        event.preventDefault();

        data = checkInputs();

        console.log("Valid: " ,valid);
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
            if (res.status === 200){
                console.log("OK");
                document.body.innerHTML = json;

            } else {

                } if (json === "email") {
                    setErrorFor(mail, "The email is in used");
                    console.log("sdsdsd");
                } else if (json === 'age under 18'){
                    setErrorFor(birthday, "Age cannot be under 18");
                } else {
                    // console.log(res.status, json, res);
                    console.log(json);
                }
            
        } else {
            valid = true;
        }
        
    });

    // console.log(data);
}

const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)


function checkInputs() {

    var listData = {};
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const mailValue = mail.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const creditValue = credit.value.trim();
    const userIdValue = userId.value.trim();
    const birthdayValue = birthday.value.trim();

    const age = getAge(birthdayValue);
    console.log(age);


    if(firstNameValue === ''){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        // show error
        // add error class
        setErrorFor(firstName, "First name cannot be blank")
    } else {
        // add success class
        setSuccessFor(firstName);
    }

    if(lastNameValue === ''){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;
        // show error
        // add error class
        setErrorFor(lastName, "Last name cannot be blank")
    } else {
        // add success class
        setSuccessFor(lastName);
    }
    
    if(mailValue === '')
    {
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        setErrorFor(mail, "Email cannot be blank")
    } else if (!isEmail(mailValue)){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;


        setErrorFor(mail, "Email is not valid")
    } else {
        // add success class
        setSuccessFor(mail);
    }

    if(phoneNumberValue === ''){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        // show error
        // add error class
        setErrorFor(phoneNumber, "Phone number cannot be blank")
    } else {
        // add success class
        setSuccessFor(phoneNumber);
    }

    if(passwordValue === ''){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        // show error
        // add error class
        setErrorFor(password, "psssword cannot be blank")
    } else {
        // add success class
        setSuccessFor(password);
    }

    if(password2Value === '')
    {
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        setErrorFor(password2, "Password check cannot be blank")
    } else if (password2Value !== passwordValue){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        setErrorFor(password2, "Passwords does not match")
    } else {
        // add success class
        setSuccessFor(password2);
    }

    if(creditValue === ''){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        // show error
        // add error class
        setErrorFor(credit, "Credit card cannot be blank")
    } else {
        // add success class
        setSuccessFor(credit);
    }

    if(userIdValue === ''){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        // show error
        // add error class
        setErrorFor(userId, "User id cannot be blank")
    } else {
        // add success class
        setSuccessFor(userId);
    }

    if(birthdayValue === ''){
        // If valid === True --> req.body is OK and can send to api.
        valid = false;

        // show error
        // add error class
        setErrorFor(birthday, "Birthday cannot be blank")
    
    // } else if (age < 18){
    //     // If valid === True --> req.body is OK and can send to api.
    //     valid = false;

    //     // show error
    //     // add error class
    //     setErrorFor(birthday, "Age cannot be under 18")
    }
     else {
        // add success class
        // listData.push(birthday);
        setSuccessFor(birthday);
    }

    listData = {id: userIdValue, firstName: firstNameValue, lastName: lastNameValue, email: mailValue, phoneNumber: phoneNumberValue, password: passwordValue, credit: creditValue, birthday: birthdayValue};
    console.log(listData);
    return listData;

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


// function isBlank(value, value2, message){
//     if(value === ''){
//         // show error
//         // add error class
//         setErrorFor(value2, message)
//     } else {
//         // add success class
//         setSuccessFor(value2);
//     }
// };

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
