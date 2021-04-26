'use stict';
let userName = prompt('Tell me your name please ?').toUpperCase();
let anime = prompt('Do you think I love Anime ? Y/N or Yes/No').toLowerCase();
while (anime !== 'yes' && anime !== 'y' && anime !== 'no' && anime !== 'n') {
  anime = prompt('Do you think I love Anime ? Y/N or Yes/No').toLowerCase();
}
if (anime === 'yes' || anime === 'y') {
  console.log('Anime qustion = correct answer ');
} else if (anime === 'no' || anime === 'n') {
  console.log('Anime qustion = wrong answer');
}

