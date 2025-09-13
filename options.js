
let suggestRedirect = document.getElementById("suggestRedirect")
let forceRedirect = document.getElementById("forceRedirect")
let choiceValue = ""


forceRedirect.addEventListener("click", theOption) 
suggestRedirect.addEventListener("click", theOption)


function theOption(event) {
    if( event.target.id === "forceRedirect" ){
        choiceValue = "forceRedirect"
        console.log("Force Redirect Clicked")

    }else if(event.target.id === "suggestRedirect"){
        choiceValue = "suggestRedirect"
        console.log("Suggest Redirect Clicked")

    }
chrome.storage.sync.set({ choice: choiceValue }, () => {
    console.log("Value is set to " + choiceValue);
})
}

chrome.storage.sync.get("choice", (data) => {
    console.log("Value currently is " + data.choice);
});
function getTheUrl(){
    console.log(window.location.href)
}
