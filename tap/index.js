import { interval } from 'rxjs'
import { pipe, map, tap } from 'rxjs/operators'

const obs =
  interval(1000)
    .pipe(
      map(n => n * n),
      tap(n => console.log('after #1::', n)),
      map(n => n / 3),
      tap(n => console.log('after #2::', n)),
      map(n => n * n * n),
      tap(n => console.log('after #3::', n)),
      map(n => n % 42)
    )
    .subscribe(console.log)
