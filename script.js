const ham = document.getElementById("ham");
const leftpanel = document.getElementById("leftpanel");
const backbtn = document.getElementById("backbtn");
ham.addEventListener("click", () => {
  leftpanel.style.display = "flex";
});
backbtn.addEventListener("click", () => {
  leftpanel.style.display = "none";
});
