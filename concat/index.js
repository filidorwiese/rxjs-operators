import { interval, range } from 'rxjs'
import { concat, take, skip, map } from 'rxjs/operators'

// range(1, 10)

interval(100)
  .pipe(
    take(5),
    concat(
      // range(1, 20)
      interval(100).pipe(
        map(n => '#2 ' + n),
        skip(10),
        take(10)
      )

    )
  )
  .subscribe(console.log)