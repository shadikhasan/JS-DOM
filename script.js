const passwordBox = document.getElementById("password");
const length = 14;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!~#$%^&*()_+-|?></'[]{}";
const allChars = upperCase + lowerCase + number + symbol;
const tooltip = document.querySelector(".tooltip");

function createPassword()
{
    tooltip.classList.remove("show");
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += upperCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * number.length)];
    password += upperCase[Math.floor(Math.random() * symbol.length)];
    while(length > password.length)
    {
        password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBox.value = password;
}

function copyPassword()
{
    if(document.execCommand("copy"))
    {
        passwordBox.select();
        document.execCommand("copy");
        tooltip.classList.add("show");
        setTimeout(function()
        {
            tooltip.classList.remove("show");
    
        },1500);
    }
    else{
        alert("Somthething went wrong!");
    }
   
}
