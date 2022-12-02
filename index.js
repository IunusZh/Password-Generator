const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let buttonOne = document.getElementById("button-one")
let buttonTwo = document.getElementById("button-two")

let generatorEl = document.getElementById("generator")
let passwordLength = 15

function randomCharacter(){
    let ranChar = Math.floor(Math.random() * characters.length)
    return characters[ranChar]
}

function generate(){
    buttonOne.textContent = ""
    buttonTwo.textContent = ""
    for (let i = 0; i < passwordLength; i++){
        buttonOne.textContent += randomCharacter()
        buttonTwo.textContent += randomCharacter()
    }
}






