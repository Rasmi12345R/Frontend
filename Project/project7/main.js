//Access image//
let SlideImg = document.querySelectorAll("img")
//Access button next and preview//
let nextButton = document.querySelector(".next")
let previewButton = document.querySelector(".preview")
//Access the indicators//
let indicators = document.querySelectorAll(".dot")
let counter = 0;
let deleteInterval;
//function for the next button//
nextButton.addEventListener("click", SlideNext);
function SlideNext() {
    SlideImg[counter].style.animation = "next1 0.5s ease-in forwards"
    if (counter >= SlideImg.length - 1) {
        counter = 0;
    }
    else {
        counter++;
    }
    SlideImg[counter].style.animation = "next2 0.5s ease-in forwards"
    updateIncator();
}
//function for preview button//
previewButton.addEventListener("click", Slidepreview);
function Slidepreview() {
    SlideImg[counter].style.animation = "preview1 0.5s ease-in forwards"
    if (counter === 0) {
        counter = SlideImg.length - 1
    }
    else {
        counter--;
    }
    SlideImg[counter].style.animation = "preview2 0.5s ease-in forwards"
    updateIncator();
}
//auto slides images//
function autoslides() {
    deleteInterval = setInterval(SlideNext, 1000)
}
autoslides();
//stop auto slides hover//
const container = document.querySelector(".slide-container")
container.addEventListener("mouseover", function () {
    clearInterval(deleteInterval);
})
//resume auto slider//
container.addEventListener("mouseout", autoslides);
//update active indicator//
function updateIncator() {
    indicators.forEach((dot, index) => {
        dot.classList.remove("active");
        if (index == counter) {
            dot.classList.add("active")
        }
    })
}
//Add Event click indicators//
function switchImage(currentImage) {
    indicators.forEach((dot) => dot.classList.remove("active"));
    currentImage.classList.add("active");
    let ImageId = parseInt(currentImage.getAttribute("attr"), 10)
    if (ImageId > counter) {
        SlideImg[counter].style.animation = "next1 0.5s ease-in forwards"
        counter = ImageId;
        SlideImg[counter].style.animation = "next2 0.5s ease-in forwards"
    }
    else if (ImageId < counter) {
        SlideImg[counter].style.animation = "preview1 0.5s ease-in forwards"
        counter = ImageId;
        SlideImg[counter].style.animation = "preview2 0.5s ease-in forwards"
    }
    updateIncator();
}

