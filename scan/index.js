import { interval } from 'rxjs'
import { scan, take } from 'rxjs/operators'

interval(200)
  .pipe(
    take(10),
    scan((acc, v) => acc + v, 0)
  )
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed'),
    error: v => console.warn('error', v)
  })
