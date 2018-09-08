import { zip, interval } from 'rxjs'
import { map } from 'rxjs/operators'

const numbers = interval(100)
const numbersSquared = interval(250)
  .pipe(
    map(n => n * n)
  )

// Combines observable values based on index

zip(
  numbers,
  numbersSquared
).subscribe(console.log)