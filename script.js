let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
    scrollContainer.computedStyleMap.scrollBehavior='auto';

});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior='smooth';
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior='smooth';
    scrollContainer.scrollLeft -= 900;
});




const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
let currentIndex = 0;

function updateGallery() {
    const galleryImage = document.getElementById("gallery-image").querySelector("img");
    const thumbnails = document.querySelectorAll(".thumbnail");

    galleryImage.src = images[currentIndex];
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.toggle("active", index === currentIndex);
    });
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
}

function setImage(index) {
    currentIndex = index;
    updateGallery();
}

// Initialize the gallery
updateGallery();
