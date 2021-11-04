// getting all requirements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelectorAll("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

// if if user press any key and release
inputBox.onkeyup = (e) => {
    console.log(e.target.value);
}