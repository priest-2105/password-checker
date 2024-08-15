

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

    const hasUpperCase = /[A-Z]/.test(passwordInput.value);
    const hasLowerCase = /[a-z]/.test(passwordInput.value);
    const hasNumber = /\d/.test(passwordInput.value);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(passwordInput.value);
    const hasSpace = /\s/.test(passwordInput.value)


        console.log('it has lower case ', hasLowerCase);
        console.log('it has upper case ', hasUpperCase);
        console.log('it has Number ', hasNumber);
        console.log('it has symbol ', hasSymbol);
        console.log('it has space',hasSpace);

        const characterMark = document.getElementById('characterMark');
        const uppercaseMark = document.getElementById('uppercaseMark');
        const lowercaseMark = document.getElementById('lowercaseMark');
        const specialcharacterMark = document.getElementById('specialcharacterMark');
        const numberMark = document.getElementById('numberMark');
        
        
        if (passwordInput.value.length >= 12) {
            characterMark.innerHTML = '✔';
        } else {
            characterMark.innerHTML = ' ';
        }
        
        if (hasUpperCase) {
            uppercaseMark.innerHTML = '✔';
        } else {
            uppercaseMark.innerHTML = ' ';
        }
        
        if (hasLowerCase) {
            lowercaseMark.innerHTML = '✔';
        } else {
            lowercaseMark.innerHTML = ' ';
        }
        
        if (hasSymbol) {
            specialcharacterMark.innerHTML = '✔';
        } else {
            specialcharacterMark.innerHTML = ' ';
        }
        
        if (hasNumber) {
            numberMark.innerHTML = '✔';
        } else {
            numberMark.innerHTML = ' ';
        }
    
        

    if (hasSpace){
        document.getElementById('strengthLevelDanger').innerHTML = 'Password Cannot include Space !!';
    }
    if (hasSymbol >= 2  && hasNumber >= 2 && !hasSpace && hasLowerCase >= 8 && hasUpperCase >= 2 && passwordInput.value.length >= 15){
        document.getElementById('strengthLevelSuccess').innerHTML = 'password is strong !!';
    }else{
        document.getElementById('strengthLevelWarning').innerHTML = 'password is not strong enough !!';   
    }


    if (passwordInput.value.length <= 5){
        document.getElementById('strengthLevelWarning').innerHTML = 'Password Is very Weak !!';
    }

})

