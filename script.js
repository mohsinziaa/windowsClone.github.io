let myTaskBar = document.querySelector(".taskBar");
let myStartMenu = document.querySelector(".startMenu");

myTaskBar.addEventListener("click", () => {
  if (myStartMenu.style.bottom == "48px") {
    myStartMenu.style.bottom = "-570px";
  } else {
    myStartMenu.style.bottom = "48px";
  }
});
