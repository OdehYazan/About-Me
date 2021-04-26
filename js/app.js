'use stict';
let userName = prompt('Tell me your name please ?').toUpperCase();
let anime = prompt('Do you think I love Anime ? Y/N or Yes/No').toLowerCase();
let videoGames = prompt('I love video games ? Y/N or Yes/No').toLowerCase();
let karshat = prompt('I hate Karshat food ? Y/N or Yes/No').toLowerCase();
while (anime !== 'yes' && anime !== 'y' && anime !== 'no' && anime !== 'n') {
  anime = prompt('Do you think I love Anime ? Y/N or Yes/No').toLowerCase();
}
if (anime === 'yes' || anime === 'y') {
  console.log('I love Anime \'YES\' is a correct answer ');
} else if (anime === 'no' || anime === 'n') {
  console.log('I love Anime \'NO\' is a wrong answer');
}

while (videoGames !== 'yes' && videoGames !== 'y' && videoGames !== 'no' && videoGames !== 'n') {
  videoGames = prompt('I love video games ? Y/N or Yes/No').toLowerCase();
}
if (videoGames === 'yes' || videoGames === 'y') {
  console.log('I love video games \'Yes\' is a correct answer ');
} else if (videoGames === 'no' || videoGames === 'n') {
  console.log('I love video games\'No\' is wrong answer');
}
while (karshat !== 'yes' && karshat !== 'y' && karshat !== 'no' && karshat !== 'n') {
  karshat = prompt('I hate Karshat food ? Y/N or Yes/No').toLowerCase();
}
if (videoGames === 'yes' || videoGames === 'y') {
  console.log('I hate Karshat food  \'yes\' is a wrong answer ');
} else if (videoGames === 'no' || videoGames === 'n') {
  console.log('ihate Karshat food \'No\' is  wrong answer');
}

