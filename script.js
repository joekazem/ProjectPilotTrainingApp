function switchtab(tab) {
    var informationcontainer = document.getElementById("tabinformationcontainer");
    var tabinformation = document.getElementById("tabinformation");
    switch (tab) {
        case "aircraft":
            informationcontainer.className = "";
            informationcontainer.classList.add("container", "aircraft");
            tabinformation.innerHTML = `<div class="logo2"><img src="./logo.png"></div>
 <form>
 <select name="Aircraft Manfuactor">
 <option selected="selected">Select Manuf</option>
`
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
            tabinformation.innerHTML = ` < h2 > log on page here < /h2>`
            break
        case "weather":
            informationcontainer.className = "";
            informationcontainer.classList.add("container", "weather");
            tabinformation.innerHTML = `<h2 weather info goes here</h2>
            `
            break
    }

}