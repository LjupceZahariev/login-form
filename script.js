
function checkIfDigit(char) {
    if (char === "1" || char === "2" || char === "3" || char === "4" || char === "5" || char === "6" || char === "7" || char === "8" || char === "9" ){
    return true;
    } else {
          return false;
    }
}

function validateName(name) {
    for (let i = 0; i < name.length; i++){
        if (checkIfDigit(name.charAt(i))){
            return false;
        }
    }
    return true;
}


function submit(){
    let validation= false;

    //js for name starts here
    const htmlElementName = document.getElementById('name');
    const valueName = htmlElementName.value;

    if (valueName.length < 3 ){
         alert('The name must be at least 3 letters!');
         return;
    }

    if (validateName(valueName) === false){
        alert("The name has digits in it!")
    }

    
    //js for name ends here

    //js for email starts here
    const htmlElementEmail = document.getElementById('email');
    const valueEmail = htmlElementEmail.value;

    if (valueEmail.length < 6){
        alert('The email field must have at least 6 characters!');
        return;
    }
    if (valueEmail.indexOf('@') === -1 ){
        alert("The email must have '@' in it!");
        return;
    }
    if (valueEmail.indexOf('.') === -1 ){
        alert("The email must have '.' in it!");
        return;
    }

    
    

    
    const htmlElementEmailAgain = document.getElementById('emailagain');
    const valueEmailAgain = htmlElementEmailAgain.value;

    if (valueEmailAgain !== valueEmail){
        alert("The email must be the same as first!");
        return;
    }

    //js for email ends here

    //js for pass starts here
    const htmlElementPass = document.getElementById('password');
    const valuePass = htmlElementPass.value;

    if (valuePass.length < 6){
        alert('The password field must have at least 6 characters!');
        return;
      
    }
   
    
    


    const htmlElementPassAgain = document.getElementById('passwordagain');
    const valuePassAgain = htmlElementPassAgain.value;

    if (valuePassAgain !== valuePass){
        alert("The password must be the same as first!");
        return;

    }else{
        validation=true;
    }
    //js for pass ends here
    if(validation){
        console.log ('name: ' + valueName);
        console.log ('email: ' + valueEmail);
        console.log ('password: ' + valuePass);
        
    }
} 