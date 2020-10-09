const fileElem = document.querySelector("input");
const videoElem = document.querySelector("video");

fileElem.addEventListener("change", function(){
  videoElem.src = URL.createObjectURL(this.files[0]);
  videoElem.onload = function(){
    URL.revokeObjectURL(this.src);
  }
});