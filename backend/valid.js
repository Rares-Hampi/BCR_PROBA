const inputs = document.querySelectorAll('input');

//Regex to validate input fields
const patterns = {
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone: /^\d{11}$/,
}

function validate(field, regex){
    if(regex.test(field.value)) {
        field.className = 'valid';
    } else{
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        console.log(e.target.value);
        validate(e.target,patterns[e.target.attributes.name.value]);
    });
});