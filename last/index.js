import { interval } from 'rxjs'
import { last, take } from 'rxjs/operators'

interval(100)
  .pipe(
    take(10),
    last(),
    // last(n => n % 2 === 0)   // highest value that evaluates to true
  )
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed')
  })