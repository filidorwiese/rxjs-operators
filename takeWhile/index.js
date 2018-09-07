import { interval } from 'rxjs'
import { takeWhile } from 'rxjs/operators'


interval(100)
  .pipe(
    takeWhile(n => n < 10)
  )
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed')
  })