

const openPassWordIcon = document.getElementById('openPassword');
const closePassWordIcon =document.getElementById('closePassword');
const passwordInput = document.getElementById('passwordInput');



// Event listener for the reveal password icon 

openPassWordIcon.addEventListener('click', () => {

// changes input type to text
passwordInput.type = 'text';

// reveals the hidepassword icon 
closePassWordIcon.style.display = 'block';

// hides the revealpassword icon 
openPassWordIcon.style.display = 'none';

})



// Event listener for the hidepassword icon 

closePassWordIcon.addEventListener('click', () => {

// changes input type to password 
passwordInput.type = 'password';

// hides the hidepassword icon 
closePassWordIcon.style.display = 'none';

// reveals the revealpassword icon 
openPassWordIcon.style.display = 'block';
})




passwordInput.addEventListener('change', () => {

    const hasUpperCase = /[A-Z]/.test(passwordInput.password);
    const hasLowerCase = /[a-z]/.test(passwordInput.password);
    const hasNumber = /\d/.test(passwordInput.password);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(passwordInput.password);

    console.log(hasLowerCase);
    

    if (passwordInput.value.length <= 5){
        document.getElementById('strengthLevelWarning').innerHTML = 'Password Is very Weak';
    }

})

