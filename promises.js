// const x = 2;
// const y = 'asdf';

function adder(a, b) {
  return a + b;
}

// setting Promise means run callback function immediately
function adderPromise(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x === 'number' && typeof y === 'number') {
      const answer = adder(x, y);
      resolve(answer);
    }
    reject('Operands must be numbers');
  });
}

// function adderPromise(x, y) {
//   return Promise.resolve(resolve => {
//     if (typeof x === 'number' && typeof y === 'number') {
//       const answer = adder(x, y);
//       resolve(answer);
//     }
//     reject('Operands must be numbers');
//   });
// }

// const answer = adder(x, y);
// when running below the status of promise is pending
// setTimeout(() => console.log(calc.value), 2000);
// console.log(calc);

// adderPromise(10, 30)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const resolved = (res) => console.log(res);
const error = (res) => console.log(res);

// adderPromise(10, 30).then(resolved).catch(error);
// adderPromise(10, 'asdfadsf').then(resolved).catch(error);
// adderPromise(10, 60).then(resolved).catch(error);

adderPromise(10, 30)
  .then((value) => adderPromise(value, 20))
  .then((value) => adderPromise(value, 50))
  .then(resolved)
  .catch(error);

// adderPromise(10, 'asdfadsf').then(resolved).catch(error);
// adderPromise(10, 60).then(resolved).catch(error);

console.log('Awaiting promise...');
