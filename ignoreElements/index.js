import { interval } from 'rxjs'
import { tap, take, ignoreElements } from 'rxjs/operators'

interval(100)
  .pipe(
    tap(console.log('started')),
    take(20),
    ignoreElements()
  )
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed'),
    error: v => console.warn('error', v)
  })
