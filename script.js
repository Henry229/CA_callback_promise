// function adder(x, y, callback) {
//   setTimeout(() => callback(x + y), 3000);
// }

// adder(5, 10, (result) => console.log(result));

// console.log('Hello');

// const adder = (x, y) => {
//   setTimeout(() => console.log(x + y), 3000);
// };

// adder(5, 10);

// console.log('Hello');

function getJoke(cb) {
  req = new XMLHttpRequest();
  req.addEventListener('load', (e) => cb(e.target.response.joke));
  req.open('GET', 'https://icanhazdadjoke.com/'); // confeaguire request
  req.setRequestHeader('Accept', 'application/json');
  req.responseType = 'json';
  req.send();
}

const jokes = [];
getJoke((joke) => {
  jokes.push(joke);
  getJoke((joke) => {
    jokes.push(joke);
    console.log(jokes);
  });
  // console.log(jokes);
});

// getJoke((joke) => jokes.push(joke));
// getJoke((joke) => jokes.push(joke));
// getJoke((joke) => (document.body.innerHTML += `<p>${joke}</p>`));
// console.log(jokes);
