const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg"
];

let index = 0;


function renderImage() {
    imageContainer.innerHTML = `<img src="${images[index]}" alt="Image">`;
}

// Back button
backBtn.addEventListener("click", function () {
    index--;

    if (index < 0) {
        index = 0;
    }

    renderImage();
});

// Next button
nextBtn.addEventListener("click", function () {
    index++;

    if (index >= images.length) {
        index = images.length - 1;
    }

    renderImage();
});