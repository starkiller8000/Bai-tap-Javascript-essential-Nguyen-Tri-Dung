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

function chooseName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  para.textContent = names[randomIndex];
}

chooseName();