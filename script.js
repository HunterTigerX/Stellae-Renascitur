const linkToMain = document.querySelector(".linkToMain");
const linkToPve = document.querySelector(".linkToPve");
// const linkToPve2 = document.querySelector(".linkToPve2");
const linkToFAQ = document.querySelector(".linkToFAQ");
const linkToMaterials = document.querySelector(".linkToMaterials");
const linkToCourrier = document.querySelector(".linkToCourrier");
const main = document.querySelector(".blocks-wrapper");
const pve = document.querySelector(".pve-wrapper");
// const pve2 = document.querySelector(".pve-wrapper2");
const faq = document.querySelector(".faq-wrapper");
const materials = document.querySelector(".materials-wrapper");
// const alliance = document.querySelector('.alliance-wrapper');



document.cookie =
  "__Host-name=value; Secure; Path=/; SameSite=strict; Partitioned;";

function saveDislays() {
  localStorage.setItem("main", main.style.display);
  localStorage.setItem("pve", pve.style.display);
  // // localStorage.setItem("pve2", pve2.style.display);
  localStorage.setItem("faq", faq.style.display);
  localStorage.setItem("materials", materials.style.display);
}

function restoreDisplays() {
  main.style.display = localStorage.getItem("main");
  pve.style.display = localStorage.getItem("pve");
  // // pve2.style.display = localStorage.getItem("pve2");
  faq.style.display = localStorage.getItem("faq");
  materials.style.display = localStorage.getItem("materials");
}

restoreDisplays();

// window.addEventListener("load", (e) => {
//   const video = document.querySelector(".ytp-cued-thumbnail-overlay-image");
//   console.log(video)
// });

linkToMain.addEventListener("click", (e) => {
  main.style.display = "flex";
  pve.style.display = "none";
  // pve2.style.display = "none";
  faq.style.display = "none";
  materials.style.display = "none";
  saveDislays();
});

linkToPve.addEventListener("click", (e) => {
  main.style.display = "none";
  pve.style.display = "flex";
  // pve2.style.display = "none";
  faq.style.display = "none";
  materials.style.display = "none";
  saveDislays();
});

// linkToPve2.addEventListener("click", (e) => {
  // main.style.display = "none";
  // pve.style.display = "none";
  // pve2.style.display = "flex";
  // faq.style.display = "none";
  // materials.style.display = "none";
  // saveDislays();
// });

linkToFAQ.addEventListener("click", (e) => {
  main.style.display = "none";
  pve.style.display = "none";
  // pve2.style.display = "none";
  faq.style.display = "flex";
  materials.style.display = "none";
  saveDislays();
});

linkToMaterials.addEventListener("click", (e) => {
  main.style.display = "none";
  pve.style.display = "none";
  // pve2.style.display = "none";
  faq.style.display = "none";
  materials.style.display = "flex";
  saveDislays();
});

linkToCourrier.addEventListener("click", (e) => {
  window.open("https://moonpire.com", "_blank");
});

const arrayOfSlideNames = [];
const slidesCount = 13;
let slides;
let currentSlide = 0;

function createArrayOfCardNames() {
    for (let i = 0; i <= slidesCount; i += 1) {
        arrayOfSlideNames.push(`image (${i}).png`);
    }
}

const slider = document.querySelector('.slider');

function fillSliderWithCards() {
    const slideTemplate = document.querySelector('.template__slide');
    for (let i = 1; i <= slidesCount; i += 1) {
        const slideDiv = slideTemplate.content.cloneNode(true);
        const newSlide = slideDiv.querySelector('.slide');

        newSlide.style.content = `url("./assets/slider/${arrayOfSlideNames[i]}")`;

        if (i === 0) {
            newSlide.classList.add('active');
        }
        slider.append(slideDiv);
    }
    slides = document.querySelectorAll('.slide');
}

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 10000); // Скоро
}

// sliderPicturesCount();
createArrayOfCardNames();
fillSliderWithCards();
startSlideShow();