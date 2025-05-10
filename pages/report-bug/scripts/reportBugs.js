const reportBug = document.getElementById('reportForm');
const username = document.getElementById('inputUsername');
const email = document.getElementById('inputEmail');
const server = document.getElementById('server');
const description = document.getElementById('inputDescription');
const followUp = document.getElementById("followUp");

server.style.color = server.value === " " ? "#6c6f72" : "#ece8e1";

server.addEventListener("change", function () {
    this.style.color = this.value === " " ? "#6c6f72" : "#ece8e1";
});

const setWarning = (id, message) => {
    const warn = document.getElementById(id);

    if (warn) warn.textContent = message;
};

const clearWarnings = () => {
    document.querySelectorAll('.warning').forEach(w => w.textContent = "")
};

reportBug.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

    if (confirm("Thankyou for reporting bug!")) {
        window.location.reload();
    }
});

username.addEventListener('blur', () => {
    const val = username.value.trim();
    if (val === '') {
        setWarning('warningUsername', 'Username is required');
    }
    else if (val.length < 8) {
        setWarning('warningUsername', 'Username must be at least 8 characters');
    }
    else {
        setWarning('warningUsername', '');
    }
});

email.addEventListener('blur', () => {
    const val = email.value.trim();
    if (val === '') {
        setWarning('warningEmail', 'Email is required');
    }
    else if (!val.includes('@') || !val.endsWith('.com')) {
        setWarning('warningEmail', 'Email must be valid (contain "@" and end with ".com")');
    }
    else {
        setWarning('warningEmail', '');
    }
});

server.addEventListener('blur', () => {
    const val = server.value;
    if (val === '' || val === ' ') {
        setWarning('warningServer', 'Please select a server');
    }
    else {
        setWarning('warningServer', '');
    }
});

description.addEventListener('blur', () => {
    const val = description.value.trim();
    if (val === '') {
        setWarning('warningDescription', 'Bug description is required');
    }
    else {
        setWarning('warningDescription', '');
    }
});

followUp.addEventListener('change', () => {
    if (!followUp.checked) {
        setWarning('warningCheckbox', 'You must agree to receive follow-up emails');
    }
    else {
        setWarning('warningCheckbox', '');
    }
});

const validateInputs = () => {
    clearWarnings();

    let isValid = true;

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const serverValue = server.value.trim();
    const descriptionValue = description.value.trim();

    if (usernameValue === "") {
        setWarning('warningUsername', 'Username is required');
        isValid = false;
    }
    else if (usernameValue.length < 8) {
        setWarning('warningUsername', 'Username must be at least 8 characters');
        isValid = false;
    }

    if (emailValue === "") {
        setWarning('warningEmail', 'Email is required');
        isValid = false;
    }
    else if (!emailValue.includes('@') || !emailValue.includes('.com')) {
        setWarning('warningEmail', 'Email must contain "@" and end with ".com"');
        isValid = false;
    }

    if (serverValue === "" || serverValue === "") {
        setWarning('warningServer', 'Please select a server');
        isValid = false;
    }

    if (descriptionValue === "") {
        setWarning('warningDescription', 'Bug description is required');
        isValid = false;
    }

    if (!followUp.checked) {
        setWarning('warningCheckbox', 'You must agree to receive follow-up emails');
        isValid = false;
    }

    return isValid;
}
