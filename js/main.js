let elMenu = document.querySelector(".header__menu");
let elMenuList = document.querySelector(".menu-list");
let elBlack =  document.querySelector(".black-shadow");

let menuCheck = 0;

elMenu.addEventListener("click", () => {
  if(menuCheck == 0){
    elMenuList.classList.add("showIt");
    elBlack.classList.add("blackenIt");
    menuCheck++;
  } else{
    elMenuList.classList.remove("showIt");
    elBlack.classList.remove("blackenIt");
    menuCheck--;
  }
});

elBlack.addEventListener("click", () => {
  elMenuList.classList.remove("showIt");
  elBlack.classList.remove("blackenIt");
  menuCheck--;
})
