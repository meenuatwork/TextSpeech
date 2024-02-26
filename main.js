
function uploadFile() {
   var file = document.getElementById("input")
   var reader = new FileReader();
   reader.onload = function (e) {
       var textArea = document.getElementById("textArea")
       textArea.textContent = e.target.result;
   }
   reader.readAsText(file.files[0])
   reader.addEventListener("loadend", handleEvent);
}

function handleEvent() {
   let para = document.querySelector(".para")
   let array = para.textContent.split(" ")
   let span = ""

   array.forEach(element => {
       span += `<span>${element}</span> `
   });
   // console.log(para)
   // console.log(span)
   var readText = new SpeechSynthesisUtterance();
   // console.log(readText)
   para.innerHTML = span
   para.addEventListener("click", function (e) {
       // console.log(e.target.innerHTML)
       e.target.classList.toggle("highlight")
       readText.text = e.target.innerHTML;
       window.speechSynthesis.speak(readText);
       // console.log(readText.text)
   })
}