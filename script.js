const name = prompt('Введите ваше имя:');
const scores = [];
let countFail = 0;

if (name) {
  alert(`Привет, ${name}!`);
  console.log(`Имя: ${name}`);
} else {
  alert(`Привет!`);
  console.log(`Имя не было введено.`);
}

for (let i = 0; i < 7; i++) {
    scores[i] = Math.floor(Math.random() * 101);
}

for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 50) {
    countFail++;
  }
}

