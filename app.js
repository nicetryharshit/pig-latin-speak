var inputTextArea = document.querySelector("#txt-area-input");
var outputTextArea = document.querySelector("#txt-area-output");
var btnTranslate = document.querySelector("#btn-translate");
var translateText = document.querySelector("#txt-translate");

var baseURL = "https://api.funtranslations.com/translate/pig-latin.json";

function generateURL(inputText) {
    return baseURL + "?" + "text=" + inputText;
}

function displayOutput(json) {
    var translation = json.contents.translated;
    outputTextArea.innerText = translation;
    btnTranslate.disabled = false;
    translateText.textContent = "oink !";
}

function handleError(error) {
    alert("try again in an hour")
    // alert(error.value);
    // console.log(error);
    // console.log(error.value.toString());
    btnTranslate.disabled = false;
    translateText.textContent = "oink !";


}
btnTranslate.addEventListener("click", () => onTranslate());

function onTranslate() {
    var inputText = inputTextArea.value;
    if (inputText == "") {
        alert("enter some text to translate");
    }
    else {
        btnTranslate.disabled = true;
        translateText.textContent = "translating...";
        fetch(generateURL(inputText))
            .then(response => response.json())
            .then(json => displayOutput(json))
            .catch(handleError)
    }
}
