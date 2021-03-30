arr = [1, 2, 3, 4];

const double = arr => arr.map( val => val* 2);
console.log(double(arr));

const squareAndFindEvens = arr => {
  var squares = arr.map( (num) =>  num ** 2 );
  var evens = squares.filter( (square) => square % 2 === 0);
  return evens;
}
console.log(squareAndFindEvens(arr));