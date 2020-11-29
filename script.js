function switchtab(tab) {
    var informationcontainer = document.getElementById("tabinformationcontainer");
    var tabinformation = document.getElementById("tabinformation");
    switch (tab) {
        case "welcome":
            informationcontainer.className = "";
            informationcontainer.classList.add("container", "welcome");
            tabinformation.innerHTML = `<Div class="welcome-header">
                <img src="./logo.png"><h1>Welcome to AvTrain</h1>
                
            </Div>
            <div class="welcome-info">
                <p><span class="goal">Our #1 goal since 2020</span> is to offer the most extensive aviation resource to worldwide professional
                    Airline Pilots. We desire to spread the undeniable ideas that ‘knowledge is useless unless you share
                    it’ and ‘more aviation knowledge means less accidents’. We strongly encourage aviation safety,
                    strong C.R.M practices and good pilot decision making!
                </p>
                <br>
                <h2 class="welcome-name">AvTrain.com</h2>
                <p>is a tremendous free online aviation library, where anyone can obtain specific information on
                    virtually any aviation topic. We will be adding more topics every week. If you have any knowledge, experience or comments to add please contact us. We will answer any technical & aviation related question regarding this site, please click the 'contact tab' and we will answer your email.</p>
            <br>
              <p class="add">NOTE: Only the Boeing 737 NG is active at this time. We will be adding more content soon...</p></span>
            </div>
            <div class="welcome-start">
                <p>To begin your  Aviation training journey please click the "Sign-On" tab and register for a free account</p>
            </div>`
            break
            case "aircraft":
                informationcontainer.className = "";
                informationcontainer.classList.add("container", "aircraft");
                tabinformation.innerHTML = `<div class="inputgroupone">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Please Choose the Aircraft make and Model
                        You Wish to Start Training</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Choose Aircraft Manufacturer </option>
                    <option value="1">Boeing</option>
                    <option value="2">Airbus</option>
                    <option value="3">Bombardier</option>
                    <option value="4">Embraer</option>
                    <option value="5">Beechcraft</option>
                </select>


                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01"></label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Choose Aircraft Model </option>
                    <option value="1">737-300/400</option>
                    <option value="2">737-800/900</option>
                    <option value="3">767-200</option>
                    <option value="4">767-300</option>
                    <option value="5">757-200</option>
                    <option value="6">747-200/300</option>
                    <option value="7">747-400</option>
                </select>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Submit</button>
                </div>
            </div>`
             break   
        case "performance":
            informationcontainer.className = "";
            informationcontainer.classList.add("container", "performance");
            tabinformation.innerHTML = `<div class="logo3"><img src="./logo.png"></div>
            <h2>Aircraft performance info goes here</h2>
         `
            break
        case "about":
            informationcontainer.className = "";
            informationcontainer.classList.add("container", "about");
            tabinformation.innerHTML = `<div class="logo1"><img src="./logo.png"></div>
            <h4>This  </h2>
            `
            break
        case "quiz":
            informationcontainer.className = "";
            informationcontainer.classList.add("container", "quiz");
            tabinformation.innerHTML = `<div class="logo4"><img src="./logo.png"></div>
            <h2>Aircraft Quiz Goes here</h2>




`
            break
        case "contact":
            informationcontainer.className = "";
            informationcontainer.classList.add("container", "contact");
            tabinformation.innerHTML = `<div class="contactUs">
            <fieldset>
            <legend class="name">Contact</legend>
            <label>First Name:</label><br>
            <input class="firstName">
            <legend>Last Name:</legend>
            <input class="lastName">
            <legend>Phone Number:</legend>
            <input class="phoneNumber">
            <legend>Email Address:</legend>
            <input class="email">
            <legend>Message:</legend>
<input Class="message">
            </fieldset>
            <input class="contactSubmit" type="submit" value="submit">
            </div>`
            break
        case "signon":
            informationcontainer.className = "";
            informationcontainer.classList.add("container", "signon");
            tabinformation.innerHTML = ` <div id="login-container" class="login-container">
            <div class="login-text">
                <h2>Login</h2>
            </div>
            <div class="user-email">
                <span>Email</span>
                <input type="text" id = 'email' class="user-name-input" placeholder='Email'>
            </div>
            <div class="password">
                <span>Password</span>
                <input type="text" id ='password' class="user-password-input" placeholder="Password">
            </div>
            <div class="button">
                <span id="login-button" onclick="checkInfo()">LOGIN</span>
            </div>
            <div class="text">
                <span>Don't have an account yet?</span>
            </div>
            <div class="button">
                <span id="register-button" onclick="register()">SIGN UP</span>
            </div>
                
        </div>`
            break
        case "weather":
            informationcontainer.className = "";
            informationcontainer.classList.add("container", "weather");
            tabinformation.innerHTML = `<h2> weather info goes here</h2>
            `
            break
    }

}
function register() {
  tabinformation.innerHTML = ` <div id="login-container" class="login-container">
    <div class="login-text">
        <h2>Enter Your Information</h2>
    </div>
    <div class="username">
        <span>Name</span>
        <input type="text" id = 'name' class="user-name-input" placeholder='Enter Name'>
    </div>
    <div class="user-email">
        <span>Email</span>
        <input type="text" id = 'email' class="user-name-input" placeholder='Enter Email'>
    </div>
    <div class="password">
        <span>Password</span>
        <input type="text" id ='password' class="user-password-input" placeholder="Enter Password">
    </div>
    <div class="button">
        <span id="login-button" onclick="newUser()">Register</span>
    </div>
        
</div>`;
}
function backToLogin() {
  tabinformation.innerHTML = `<div id="login-container" class="login-container">
    <div class="login-text">
        <h2>Thank you! Please Login</h2>
    </div>
    <div class="user-email">
        <span>Email</span>
        <input type="text" id = 'email' class="user-name-input" placeholder='Enter Email'>
    </div>
    <div class="password">
        <span>Password</span>
        <input type="text" id ='password' class="user-password-input" placeholder="Enter Password">
    </div>
    <div class="button">
        <span id="login-button" onclick="checkInfo()">LOGIN</span>
    </div>
    <div class="text">
        <span>Don't have an account yet?</span>
    </div>
    <div class="button">
        <span id="register-button" onclick="register()">SIGN UP</span>
    </div>
        
    </div>`;
}
function welcome(activeUser) {
  tabinformation.innerHTML = ` <div id="login-container" class="login-container">
    <div class="login-text">
        <h2>Welcome ${activeUser} </h2>
    </div>
    <div class="button">
    <span id="logout-button" onclick="logout()">Log Out</span>
</div>
        
</div>`;
}