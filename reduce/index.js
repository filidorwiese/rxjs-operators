import { interval } from 'rxjs'
import { reduce, take } from 'rxjs/operators'

interval(200)
  .pipe(
    take(10),
    reduce((acc, v) => acc + v, 0) // Only on complete
  )
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed'),
    error: v => console.warn('error', v)
  })
