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

// Show the first image
renderImage();