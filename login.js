const urlLogin = "http://localhost:3000/login";
const urlRegister = "http://localhost:3000/register";
let activeUser = "";
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
        activeUser=data.name;
        welcome(activeUser);
        enableButtons();
    }).catch(error => console.log('error', error));
}
addUser = (name, email, password) => {
    fetch(urlRegister,
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
        backToLogin();
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
const newUser = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (email && password) {
        addUser(name, email, password);
    } else {
        console.log('please enter email and password');
    }

}