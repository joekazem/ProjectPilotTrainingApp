const urlLogin = "http://localhost:3000/login";
const urlRegister = "http://localhost:3000/register";

getUser = (email, password) => {
    fetch( urlLogin,
        {
            method: 'POST',
            body: JSON.stringify({email: email, password: password}),
            headers: {
                'Content-Type': 'application/json'
              },
        }
    ).then((response)=> {
        console.log(response);
        return response.json();
    }).then((data)=> {
        console.log(data);
    }).catch(error => console.log('error', error));
}
addUser = (name, email, password) => {
    fetch(urlLogin,
    {
        method: 'POST',
        body: JSON.stringify({email: email, password: password, name: name }),
headers: {
'Content-Type': 'application/json'
    },
    }
).then((response)=> {
        console.log(response);
        return response.json();
    }).then((data)=> {
        console.log(data);
    }).catch(error => console.log('error', error));
}
const checkInfo = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (email && password) {
        getUser(email, password);
    } else {
        console.log('please enter email and password');
    }

}