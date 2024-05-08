function limitToMax(element) {
    if (parseInt(element.value) > 999) {
        element.value = '999';
    }
}

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

//lengthConvert
//volumeConvert
//massConvert
