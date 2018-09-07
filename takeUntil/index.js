import { interval, timer } from 'rxjs'
import { takeUntil } from 'rxjs/operators'


interval(100)
  .pipe(
    takeUntil(timer(5000)) // Until completes
  )
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed')
  })