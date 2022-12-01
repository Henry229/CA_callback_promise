// function getJoke() {
//   return new Promise((resolve, reject) => {
//     req = new XMLHttpRequest();
//     req.addEventListener('load', (e) => resolve(e.target.response.joke));
//     req.open('GET', 'https://icanhazdadjoke.com/'); // confeaguire request
//     req.setRequestHeader('Accept', 'application/json');
//     req.responseType = 'json';
//     req.send();
//   });
// }

// function fetchJoke() {
//   return new Promise((resolve, reject) => {
//     fetch('https://icanhazdadjoke.com/', {
//       headers: { Accept: 'application/json' },
//     })
//       .then((res) => res.json())
//       .then((data) => resolve(data.joke));
//   });
// }

async function fetchJoke() {
  try {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    });
    const data = await res.json();
    return data.joke;
  } catch {
    throw new Error('Could not retrieve joke!');
  }
}

// fetchJoke();

// const jokes = [];

// const jokePromises = [getJoke(), getJoke(), getJoke(), getJoke(), getJoke()];
// Load and display jokes from localStorage
// Concats the jokes parameter also
function loadJokes(jokes) {
  jokes = JSON.parse(localStorage.jokes || '[]').concat(jokes);
  localStorage.jokes = JSON.stringify(jokes);
  document.querySelector('ol').innerHTML = jokes
    .map((joke) => `<li>${joke}</li>`)
    .join('');
}

function get5jokes() {
  const jokePromises = [];
  for (let i = 0; i < 5; i++) {
    jokePromises.push(fetchJoke());
  }
  Promise.all(jokePromises)
    .then((jokes) => loadJokes(jokes))
    .catch((err) => console.log(err));
}

document.querySelector('button').addEventListener('click', get5jokes);
loadJokes([]);

// const cb = (joke) => {
//   jokes.push(joke);
//   return getJoke();
// };

// getJoke()
//   .then((joke) => {
//     jokes.push(joke);
//     return getJoke();
//   })
//   .then((joke) => {
//     jokes.push(joke);
//     return getJoke();
//   })
//   .then((joke) => {
//     jokes.push(joke);
//     return getJoke();
//   })
//   .then((joke) => {
//     jokes.push(joke);
//     return getJoke();
//   })
//   .then((joke) => {
//     jokes.push(joke);
//     return getJoke();
//   })
//   .then((joke) => {
//     jokes.push(joke);
//     console.log(jokes);
//   });
// console.log(jokes);

// getJoke()
//   .then(cb)
//   .then(cb)
//   .then(cb)
//   .then(cb)
//   .then(cb)
//   .then((joke) => {
//     jokes.push(joke);
//     console.log(jokes);
//   });

async function asyncGetJoke() {
  const result = await fetchJoke();
  console.log(result);
}

asyncGetJoke();

console.log('End of main');
