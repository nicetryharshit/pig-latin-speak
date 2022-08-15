var inputTextArea = document.querySelector("#txt-area-input");
var outputTextArea = document.querySelector("#txt-area-output");
var btnTranslate = document.querySelector("#btn-translate");

var baseURL = "https://api.funtranslations.com/translate/pig-latin.json";

function generateURL(inputText) {
    return baseURL + "?" + "text=" + inputText;
}

function displayOutput(json) {
    var translation = json.contents.translated;
    outputTextArea.innerText = translation;
    btnTranslate.disabled = false;
    btnTranslate.innerText = "Translate";
}

function handleError(error) {
    alert(error.value);
    btnTranslate.disabled = false;
    btnTranslate.innerText = "Translate";

}
btnTranslate.addEventListener("click", () => onTranslate());

function onTranslate() {
    btnTranslate.disabled = true;
    btnTranslate.innerText = "Translating...";
    var inputText = inputTextArea.value;
    fetch(generateURL(inputText))
        .then(response => response.json())
        .then(json => displayOutput(json))
        .catch(handleError)
}
