import { range, interval } from 'rxjs'
import { every, tap, map, take } from 'rxjs/operators'

interval(100)
  .pipe(
    take(10),
    map(n => n * 2),
    tap(n => console.log(n)),
    every(n => n % 2 === 0)
  )
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed')
  })