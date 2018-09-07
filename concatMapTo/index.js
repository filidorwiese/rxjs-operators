import { range, interval } from 'rxjs'
import { concatMapTo } from 'rxjs/operators'

interval(1000)
  .pipe(
    concatMapTo(range(1, 9))
  )
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed')
  })

