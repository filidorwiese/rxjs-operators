import { of, range, interval } from 'rxjs'
import { take, concatMap, map, tap } from 'rxjs/operators'

interval(1000)
  .pipe(
    // map(n => `Range #${n}`),
    // map(n => range(0, n + 1)), // Doesn't work because map can't handle observables
    concatMap(n =>
      range(0, n + 1), // Auto subscribes, waits until complete
    )
  )
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed')
  })

