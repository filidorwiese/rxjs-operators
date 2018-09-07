import { of, range, interval } from 'rxjs'
import { take, concatAll } from 'rxjs/operators'
import { fromStdIn } from '../utility'

of(
  range(1, 3),
  interval(100).pipe(take(10)),
  fromStdIn()
)
  .pipe(
    concatAll() // subscribes to next after previous completes
  )
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed')
  })