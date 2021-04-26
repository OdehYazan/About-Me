'use stict';
let userName = prompt('Tell me your name please ?').toUpperCase();
let anime = prompt('Do you think I love Anime ? Y/N or Yes/No').toLowerCase();
let videoGames = prompt('I love video games ? Y/N or Yes/No').toLowerCase();
while (anime !== 'yes' && anime !== 'y' && anime !== 'no' && anime !== 'n') {
  anime = prompt('Do you think I love Anime ? Y/N or Yes/No').toLowerCase();
}
if (anime === 'yes' || anime === 'y') {
  console.log('Anime qustion = correct answer ');
} else if (anime === 'no' || anime === 'n') {
  console.log('Anime qustion = wrong answer');
}

while (videoGames !== 'yes' && videoGames !== 'y' && videoGames !== 'no' && videoGames !== 'n') {
  videoGames = prompt('I love video games ? Y/N or Yes/No').toLowerCase();
}
if (videoGames === 'yes' || videoGames === 'y') {
  console.log('Video Games qustion = correct answer ');
} else if (videoGames === 'no' || videoGames === 'n') {
  console.log('Video Games qustion = wrong answer');
}

