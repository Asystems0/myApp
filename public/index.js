// if ('geolocation' in navigator){
//     console.log('avilable');
//     navigator.geolocation.getCurrentPosition(async position => {
//         const lat = position.coords.latitude;
//         const lon = position.coords.longitude;
//         document.getElementById('latitude').textContent = lat;
//         document.getElementById('longitude').textContent = lon;

//         // console.log(lat, lon);

//         const data = {lat, lon};
//         const options = {
//             method: 'POST',
//             Headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         };
//         const res = await fetch('/api', options);
//         // console.log(res);
//         const json = await res.json();
//         console.log(json);
//     });

// } else{
//     console.log('not avilable');
// }

getData();

async function getData(){
    const res = await fetch('/api');
    const data = await res.json();
    
    for (item of data) {
        
        console.log(item);
        
        const root = document.createElement('div');
        const user_id = document.createElement('div');
        const userId = document.createElement('div');
        const firstName = document.createElement('div');
        const lastName = document.createElement('div');
        const email = document.createElement('div');
        const phoneNumber = document.createElement('div');
        const password = document.createElement('div');
        const credit = document.createElement('div');
        const birthday = document.createElement('div');
        const age = document.createElement('div');
        const joined = document.createElement('div');

        
        user_id.textContent = item._id;
        userId.textContent = item.id;
        firstName.textContent = item.firstName;
        lastName.textContent = item.lastName;
        email.textContent = item.email;
        phoneNumber.textContent = item.phoneNumber;
        password.textContent = item.password;
        credit.textContent = item.credit;
        birthday.textContent = item.birthday;
        age.textContent = item.age;
        joined.textContent = item.joined;
        
        root.append(user_id, userId, firstName, lastName, email, phoneNumber, password, credit, birthday, age, joined)
        
        document.body.append(root);

    }
}