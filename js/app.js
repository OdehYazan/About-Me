'use stict';
let userName = prompt('Tell me your name please ?').toUpperCase();
let anime = prompt('Do you think I love Anime ? Y/N or Yes/No').toLowerCase();

while (anime !== 'yes' && anime !== 'y' && anime !== 'no' && anime !== 'n') {
  anime = prompt('Do you think I love Anime ? Y/N or Yes/No').toLowerCase();
}
if (anime === 'yes' || anime === 'y') {
  console.log('I love Anime \'YES\' is a correct answer ');
  document.write('<p>1. I love Anime \'YES\' is a correct answer </p>');
} else if (anime === 'no' || anime === 'n') {
  console.log('I love Anime \'NO\' is a wrong answer');
}

let videoGames = prompt('I love video games ? Y/N or Yes/No').toLowerCase();

while (videoGames !== 'yes' && videoGames !== 'y' && videoGames !== 'no' && videoGames !== 'n') {
  videoGames = prompt('I love video games ? Y/N or Yes/No').toLowerCase();
}
if (videoGames === 'yes' || videoGames === 'y') {
  console.log('I love video games \'Yes\' is a correct answer ');
} else if (videoGames === 'no' || videoGames === 'n') {
  console.log('I love video games\'No\' is wrong answer');
}

let karshat = prompt('I hate Karshat food ? Y/N or Yes/No').toLowerCase();

while (karshat !== 'yes' && karshat !== 'y' && karshat !== 'no' && karshat !== 'n') {
  karshat = prompt('I hate Karshat food ? Y/N or Yes/No').toLowerCase();
}
if (karshat === 'yes' || karshat === 'y') {
  console.log('I hate Karshat food  \'yes\' is a wrong answer ');
} else if (karshat === 'no' || karshat === 'n') {
  console.log('I hate Karshat food \'No\' is  wrong answer');
}

let drivelicence = prompt ('Whta do think I have driving licence  ? Y/N or Yes/No').toLowerCase();

while (drivelicence !== 'yes' && drivelicence !== 'y' && drivelicence !== 'no' && drivelicence !== 'n') {
  drivelicence = prompt('Whta do think I have driving licence or not  ? Y/N or Yes/No').toLowerCase();
}
if (drivelicence === 'yes' || drivelicence === 'y') {
  console.log('Correct I have driving licence ');
} else if (drivelicence === 'no' || drivelicence === 'n') {
  console.log( 'Wrong  I have driving licence since 2010');
}

let favColor = prompt ('My favorite color is Green ? Y(yes)/N(no) ');

while (favColor !== 'yes' && favColor !== 'y' && favColor !== 'no' && favColor !== 'n') {
  favColor = prompt('My favorite color is Green ? Y(yes)/N(no)').toLowerCase();
}
if (favColor === 'yes' || favColor === 'y') {
  console.log('Wrong my favorite color is Blue ');
} else if (favColor === 'no' || favColor === 'n') {
  console.log( 'Correct Green not my favorite color Blue is ');
}

alert('Welcome '+userName+' it was nice play with you, take care see you soon.');
