let input = document.querySelector("input");
let button = document.querySelector("button");
let detail = document.querySelector(".detail");
let img = document.querySelector("img");
function active() {
  input.click();
}
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_]+$/;
input.addEventListener("change", function () {
  if (this.value) {
    console.log(this.value);
    let nameValue = this.value.match(regExp);
    img.src += nameValue;
    detail.classList.add("active");
    document.querySelector(".info").innerHTML = nameValue;
    document.querySelector(".skip").onclick = function () {
      console.log("active");
      detail.classList.remove("active");
    };
  } else {
    detail.innerHTML = "";
  }
});
