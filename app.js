var btnTranslator = document.querySelector("#btn-translator");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

console.log(txtInput)
function clickEventHandler(){
    outputDiv.innerText="hdghaad " + txtInput.value;
}
btnTranslator.addEventListener("click",clickEventHandler)

    

