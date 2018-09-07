import { interval } from 'rxjs'
import { first } from 'rxjs/operators'

interval(100)
  .pipe(
    // first(),
    first(n=> n === 3),
  )
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed')
  })