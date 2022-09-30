const fullname = document.getElementById('fullname');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const email = document.getElementById('email');

form.addEventListener('click', function (){
    let messages = []
    let mailformat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
        if(fullname.value === '' || fullname.value == null){
            messages.push('Name is required');
        }
    
        if(password.value.length <= 6){
            messages.push('Password must be longer than 6 characters');
        }

        if(email.value === '' || email.value == null){
            messages.push('Email is required');
        }

        if(!email.value.match(mailformat)){
            messages.push('Invalid email format');
        }
    
        if(password.value.length >= 20){
            messages.push('Password must be less than 20 characters');
        }

        if(password.value === 'password'){
            messages.push('Password cannot be password');
        }
    
        if(messages.length > 0){
            errorElement.innerHTML = messages.join(', ');
        }
})