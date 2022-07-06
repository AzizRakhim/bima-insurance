// POPULAR JS START

let elPopularLeft = document.querySelector(".popular__left");
let elPopularRight = document.querySelector(".popular__right");
let elPopularList = document.querySelector('.popular__list');
let elPopularItems = document.querySelectorAll(".popular__item");

let count = 0;

elPopularRight.addEventListener("click", () => {
  count++;
  popularSlider();
});

elPopularLeft.addEventListener("click", () => {
  count--;
  popularSlider();
});

function popularSlider() {
  if (count <= 0) {
    count = 0;
  } else if(count == elPopularItems.length - 3){
    count = elPopularItems.length - 4;
  }
  elPopularList.style.transform = `translate(${-count * elPopularItems[0].clientWidth}px)`;
}

// POPULAR JS END
// FEEDBACK START

let elFeedbackLeft = document.querySelector(".feedback__left");
let elFeedbackRight = document.querySelector(".feedback__right");
let elFeedbackList = document.querySelector('.feedback__list');
let elFeedbackItems = document.querySelectorAll(".feedback__item");

let feedbackCount = 0;

elFeedbackRight.addEventListener("click", () => {
  feedbackCount++;
  feedbackSlider();
});

elFeedbackLeft.addEventListener("click", () => {
  feedbackCount--;
  feedbackSlider();
});

function feedbackSlider() {
  if (feedbackCount <= 0) {
    feedbackCount = 0;
  } else if(feedbackCount == elFeedbackItems.length - 1){
    feedbackCount = elFeedbackItems.length - 2;
  }
  elFeedbackList.style.transform = `translate(${-feedbackCount * elFeedbackItems[0].clientWidth}px)`;
}

// FEEDBACK END
// PARTNER START

let elPartnerLeft = document.querySelector(".partner__left");
let elPartnerRight = document.querySelector(".partner__right");
let elPartnerList = document.querySelector('.partner__list');
let elPartnerItems = document.querySelectorAll(".partner__item");

let partnerCheck = 0;

elPartnerRight.addEventListener("click", () => {
  partnerCheck++;
  feedbackSlider();
});

elPartnerLeft.addEventListener("click", () => {
  partnerCheck--;
  feedbackSlider();
});

function feedbackSlider() {
  if (partnerCheck <= 0) {
    partnerCheck = 0;
  } else if(partnerCheck == elPartnerItems.length - 5){
    partnerCheck = elPartnerItems.length - 6;
  }
  elPartnerList.style.transform = `translate(${-partnerCheck * elPartnerItems[0].clientWidth}px)`;
}

// PARTNER END

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
