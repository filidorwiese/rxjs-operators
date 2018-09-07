import { range } from 'rxjs'
import { groupBy, mergeMap, toArray } from 'rxjs/operators'

range(1, 20)
  .pipe(
    groupBy(n => n % 3),
    mergeMap(g => g.pipe(toArray()))
  )
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed'),
    error: v => console.warn('error', v)
  })
