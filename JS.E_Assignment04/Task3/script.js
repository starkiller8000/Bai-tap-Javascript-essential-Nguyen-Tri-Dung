const names = [
    "Chris",
    "Li Kang",
    "Anne",
    "Francesca",
    "Mustafa",
    "Tina",
    "Bert",
    "Jada"
];

const para = document.querySelector("p");

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseName(arr) {
    const index = random(0, arr.length - 1);
    return arr[index];
}

para.textContent = chooseName(names);