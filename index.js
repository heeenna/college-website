var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right ="0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

function validateForm() {
    let name = document.getElementById("name").value ;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById(
        "email-error"
    );

    const subjectError = document.getElementById(
        "subject-error"
    );

    const messageError = document.getElementById(
        "message-error"
    );

    
    nameError.textContent = "";
    messageError.textContent = "";
    emailError.textContent = "";
  
    subjectError.textContent = "";
   

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (subject === "") {
        subjectError.textContent =
            "Please select your course.";
        isValid = false;
    }

    if (message === "" || !message.includes("@")) {
        messageError.textContent =
            "Please enter a good message.";
        isValid = false;
    }
    return isValid;
};


