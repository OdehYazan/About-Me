'use stict';
let userName = prompt('Tell me your name please ?').toUpperCase();
let anime = prompt('Do you think I love Anime ? Y/N or Yes/No').toLowerCase();
let score = 0;
while (anime !== 'yes' && anime !== 'y' && anime !== 'no' && anime !== 'n') {
  anime = prompt('Do you think I love Anime ? Y/N or Yes/No').toLowerCase();
}
if (anime === 'yes' || anime === 'y') {
  console.log('I love Anime ? \'YES\' is a correct answer ');
  // document.write('<p>1. I love Anime \'YES\' is a correct answer </p>');
  alert(' I love Anime ? \'YES\' is a correct answer ');
  score++;

} else if (anime === 'no' || anime === 'n') {
  console.log('I love Anime \'NO\' is a wrong answer');
  // document.write('<p>1. I love Anime ?  \'NO\' is a wrong answer </p>');
  alert(' I love Anime ? \'NO\' is a wrong answer ');
}

let videoGames = prompt('I love video games ? Y/N or Yes/No').toLowerCase();

while (videoGames !== 'yes' && videoGames !== 'y' && videoGames !== 'no' && videoGames !== 'n') {
  videoGames = prompt('I love video games ? Y/N or Yes/No').toLowerCase();
}
if (videoGames === 'yes' || videoGames === 'y') {
  console.log('I love video games \'Yes\' is a correct answer ');
  // document.write('<p>2.I love video games ? \'Yes\' is a correct answer </p>');
  alert('I love video games ? \'Yes\' is a correct answer');
  score++;
} else if (videoGames === 'no' || videoGames === 'n') {
  // document.write('<p>2.I love video games ? \'NO\' is a correct answer </p>');
  alert('I love video games ? \'NO\' is a correct answer');
  console.log('I love video games ? \'No\' is wrong answer');
}

let karshat = prompt('I hate Karshat food ? Y/N or Yes/No').toLowerCase();

while (karshat !== 'yes' && karshat !== 'y' && karshat !== 'no' && karshat !== 'n') {
  karshat = prompt('I hate Karshat food ? Y/N or Yes/No').toLowerCase();
}
if (karshat === 'yes' || karshat === 'y') {
  console.log('I hate Karshat food ?  \'yes\' is a wrong answer ');
  // document.write('<p>3. I hate Karshat food ?  \'yes\' is a wrong answer</p>'),
  alert('I hate Karshat food ?  \'yes\' is a wrong answer');
} else if (karshat === 'no' || karshat === 'n') {
  // document.write('<p>3. I hate Karshat food ?  \'No\' is a correct answer</p>'),
  alert('I hate Karshat food ?  \'NO\' is a correct answe');
  console.log('I hate Karshat food \'No\' is  a correct answer');
  score++;
}

let drivelicence = prompt('Whta do think I have driving licence  ? Y/N or Yes/No').toLowerCase();

while (drivelicence !== 'yes' && drivelicence !== 'y' && drivelicence !== 'no' && drivelicence !== 'n') {
  drivelicence = prompt('Whta do think I have driving licence or not  ? Y/N or Yes/No').toLowerCase();
}
if (drivelicence === 'yes' || drivelicence === 'y') {
  console.log('Correct I have driving licence ');
  // document.write('<p>4. Correct I have driving licence</p>');
  alert('Correct I have driving licence');
  score++;
} else if (drivelicence === 'no' || drivelicence === 'n') {
  console.log('Wrong  I have driving licence since 2010');
  // document.write('<p>4. Wrong  I have driving licence since 2010</p>');
  alert('Wrong  I have driving licence since 2010');
}

let favColor = prompt('My favorite color is Green ? Y(yes)/N(no) ');

while (favColor !== 'yes' && favColor !== 'y' && favColor !== 'no' && favColor !== 'n') {
  favColor = prompt('My favorite color is Green ? Y(yes)/N(no)').toLowerCase();
}
if (favColor === 'yes' || favColor === 'y') {
  console.log('Wrong my favorite color is Blue ');
  // document.write('<p>5. Wrong my favorite color is Blue</p>');
  alert('Wrong my favorite color is Blue');
} else if (favColor === 'no' || favColor === 'n') {
  console.log('Correct Green not my favorite color Blue is ');
  // document.write('<p>5. Correct Green not my favorite color Blue is</p>');
  alert('Correct Green not my favorite color Blue is');
  score++;
}


let age = parseInt(prompt('Can you guess my age ? you have 4 attempts'));
for (let i = 1; i <= 4; i++) {
  if (age === 31) {
    alert('Yes my age is 31 good guessing 👏');
    score++;
    break;
  }
  else if (age >= 40) {
    alert('I am much younger');
    age = parseInt(prompt(' Guess my age ?'));
  } else if ((age <= 39 && age >= 30) || (age < 30 && age >= 27)) {
    alert('You are close');
    age = parseInt(prompt(' Guess again🤔'));
  } else if (age < 27) {
    alert('I am much older ');
    age = parseInt(prompt(' Guess again 🤔'));
  }
}

let favAnimes = ['one piece ', 'death note', 'attack on titan', 'hunter x hunter'];
let uAnswer = prompt('Can you guess one of my favorite animes ? *Yoy have 6 attempts*').toLowerCase();
let flag = true;
for (let j = 1; j <= 5; j++) {

  for (let a = 0; a <= 3; a++) {
    if (uAnswer === favAnimes[a]) {
      alert('You git it right 😀');
      flag = false;
      score++;
      break;
    }
  }
  if (flag === true) {
    uAnswer = prompt('Can you guess one of my favorite anises again ?').toLowerCase();
  }
}

alert('Welcome ' + userName + ' it was nice play with you, your score is '+ score +' of 7 ,take care see you soon.');
