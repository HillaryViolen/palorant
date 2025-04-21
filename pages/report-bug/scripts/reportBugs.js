const reportBug = document.getElementById('reportForm');

reportBug.addEventListener("submit", function (e){
    e.preventDefault();

    const username = document.getElementById("inputUsername").value;
    const email = document.getElementById("inputEmail").value;
    const followUp = document.getElementById("followUp").checked;
    const server = document.getElementById("server").value;
    const description = document.getElementById("inputDescription").value;

    let usernameLength = username.length;
    let usernameInclude = username.includes

    if(usernameLength < 8){
        alert("Username needs to be longer. Please use at least 8 characters.")
    }

    
    if(!username || !email || !server || !description){
        alert("Please insert all field!");
        return;
    }

    if(!email.endsWith("@gmail.com")){
        alert("Email must be end with @gmail.com");
        return;
    }

    if (!followUp) {
        alert("You must agree to receive follow-up emails");
        return;
    }


    alert("Bug report submitted successfully!");
    reportBug.reset();
});
