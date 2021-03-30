var btnTranslator = document.querySelector("#btn-translator");
var txtInput = document.querySelector("#txt-input");
console.log(txtInput)
function clickEventHandler(){
    console.log("clicked");
    console.log("input",txtInput.value);
}
btnTranslator.addEventListener("click",clickEventHandler)

    

