const email = document.getElementById('email');
const errorMsg = document.querySelector('.error-msg');
const errorContainer = document.querySelector('.error-container');

const emailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;


email.oninput = () => {
    checkEmail(email, emailRegex);

}



function checkEmail(email, regex) {
    console.log(email, regex);
    if (email.value == '') {
        errorContainer.classList.remove('hidden');
        email.style.border = '1px solid var(--light-red)';
        errorMsg.textContent = 'Email cannot be empty';
    } else if (!email.value.match(regex)) {
        errorContainer.classList.remove('hidden');
        email.style.border = '1px solid var(--light-red)';
        errorMsg.textContent = 'Please enter a valid email';
    } else if (email.value.match(regex)) {
        errorContainer.classList.add('hidden');
        email.style.border = '1px solid var(--blue)';
    }
}