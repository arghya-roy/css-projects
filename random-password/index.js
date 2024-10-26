function generatePassword(length = 12) {
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    const allChars = upperCaseChars + lowerCaseChars + numbers + specialChars;
    let password = '';

    // Generate password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}

function updatePassword() {
    const inputField = document.getElementById('password');
    inputField.value = generatePassword(); // Generate and set the password
}


function copyInputValue() {
    const inputField = document.getElementById('password');
    inputField.select();
    inputField.setSelectionRange(0, 12); // For mobile devices
    document.execCommand("copy");
}


