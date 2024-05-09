function limitToMax(element) {
    if (parseInt(element.value) > 999) {
        element.value = '999';
    }
}

let inputValue = 0
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", () => {
    inputValue = document.getElementById('input-el').value
  
    let meters = (inputValue * 0.3048).toFixed(3)
    let gallons = (inputValue * 0.2642).toFixed(3)
    let pounds = (inputValue / 0.45359237).toFixed(3)
    
    let feet = (inputValue * 3.2808).toFixed(3)
    let liters = (inputValue * 3.7854).toFixed(3)
    let kilos = (inputValue * 0.45359237).toFixed(3)
  
    lengthEl.innerText = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meters} meters`
    volumeEl.innerText = `${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters`
    massEl.innerText   = `${inputValue} kilos = ${pounds} pounds | ${inputValue} pounds = ${kilos} kilos`
  })