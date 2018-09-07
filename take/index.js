import { interval } from 'rxjs'
import { take } from 'rxjs/operators'


interval(100)
  .pipe(
    take(3)
  )
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed')
  })