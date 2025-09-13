let urlInput = document.getElementById("url-input")
let savedLinks = document.getElementById("savedLinks")


urlInput = []
let saveLink = document.getElementById("saveLink").addEventListener("click", function(){
    savedLinks.textContent = urlInput
})
console.log(urlInput)

