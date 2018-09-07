import { from } from 'rxjs'
import { take } from 'rxjs/operators'

const fibonacciArray = [1, 1, 3, 5, 8, 13, 21]
const fibonacciPromise = new Promise(r => r(fibonacciArray))

function * fibonacciGenerator () {
  let a = 1, b = 1
  while (fibonacciArray.length) {
    let c = a + b
    yield c
    a = b
    b = c
  }
}

const fromObservable = from(fibonacciGenerator())

fromObservable
  .pipe(
    take(10)
  )
  .subscribe(console.log)