const openPassWordIcon = document.getElementById('openPassword');
const closePassWordIcon = document.getElementById('closePassword');
const passwordInput = document.getElementById('passwordInput');
const copyclipboard = document.getElementById('copyclipboard');
const copyclipboardcheck = document.getElementById('copyclipboardcheck');


copyclipboard.style.display = 'none';
copyclipboardcheck.style.display = 'none';



// Event listener for the reveal password icon 
openPassWordIcon.addEventListener('click', () => {
    passwordInput.type = 'text';
    closePassWordIcon.style.display = 'block';
    openPassWordIcon.style.display = 'none';
});

// Event listener for the hide password icon 
closePassWordIcon.addEventListener('click', () => {
    passwordInput.type = 'password';
    closePassWordIcon.style.display = 'none';
    openPassWordIcon.style.display = 'block';
});

function updateStrengthLevel(message, type) {
    const strengthLevels = {
        success: document.getElementById('strengthLevelSuccess'),
        warning: document.getElementById('strengthLevelWarning'),
        danger: document.getElementById('strengthLevelDanger')
    };

    // Hide all strength levels
    Object.values(strengthLevels).forEach(level => {
        level.style.display = 'none';
    });

    // Display the relevant strength level
    strengthLevels[type].innerHTML = message;
    strengthLevels[type].style.display = 'block';
}

function evaluatePasswordStrength() {
    const password = passwordInput.value;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
    const hasSpace = /\s/.test(password);

    // Update password strength marks
    document.getElementById('characterMark').innerHTML = password.length >= 12 ? '✔' : ' ';
    document.getElementById('uppercaseMark').innerHTML = hasUpperCase ? '✔' : ' ';
    document.getElementById('lowercaseMark').innerHTML = hasLowerCase ? '✔' : ' ';
    document.getElementById('specialcharacterMark').innerHTML = hasSymbol ? '✔' : ' ';
    document.getElementById('numberMark').innerHTML = hasNumber ? '✔' : ' ';

    // Determine the overall strength of the password
    if (hasSpace) {
        updateStrengthLevel('Password Cannot include Space !!', 'danger');
    } else if (password.length >= 15 && hasUpperCase && hasLowerCase && hasNumber && hasSymbol) {
        updateStrengthLevel('Password is strong !!', 'success');
        copyclipboard.style.display = 'block';    
    } else if (password.length <= 8 || !hasUpperCase || !hasLowerCase || !hasNumber || !hasSymbol) {
        updateStrengthLevel('Password is very weak !!', 'danger');
    } else {
        updateStrengthLevel('Password is not strong enough !!', 'warning');
    }


    

    copyclipboard.onclick = () => {
        // Temporarily show the password
        passwordInput.type = 'text';
        
        passwordInput.select();
        passwordInput.setSelectionRange(0, 99999);
        document.execCommand('copy');

        // Hide the password again
        passwordInput.type = 'password';

        copyclipboardcheck.style.display = 'block';
        copyclipboard.style.display = 'none';
    }

    copyclipboardcheck.onclick = () => {
        // Temporarily show the password
        passwordInput.type = 'text';

        passwordInput.select();
        passwordInput.setSelectionRange(0, 99999);
        document.execCommand('copy');

        // Hide the password again
        passwordInput.type = 'password';
    }

}

// Attach the event listener for input events
passwordInput.addEventListener('input', evaluatePasswordStrength);
