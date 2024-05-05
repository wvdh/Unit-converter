






















/*

//Function for light - dark mode toggle.

const toggleSwitch = document.getElementById('darkModeToggle')
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
})

//Function for generation random passwords.
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const code1El = document.getElementById("code1-el")
const code2El = document.getElementById("code2-el")
let password1 = []
let password2 = []
const generateBtnEl = document.getElementById("generate-password-btn")
generateBtnEl.addEventListener("click", () => {
    let password1 = getRandomPassword()
    let password2 = getRandomPassword()
    code1El.textContent = password1
    code2El.textContent = password2
})

function getRandomPassword(){
    let randomPassword = ""
    for(let i = 0; i < 15; i++){
        const randomIdx = Math.floor(Math.random() * characters.length)
        randomPassword += characters[randomIdx]
    }
    return randomPassword
}

// Function to copy text to clipboard using Clipboard API
function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Text copied to clipboard!");
        })
        .catch((error) => {
            console.error("Failed to copy text: ", error);
            alert("Failed to copy text. Please try again.");
        });
}

function copyTextOnClick(elementId) {
    const textElement = document.getElementById(elementId);

    textElement.addEventListener("click", function() {
        const text = textElement.textContent.trim();
        copyTextToClipboard(text);
    });
}

copyTextOnClick("code1-el")
copyTextOnClick("code2-el")

*/