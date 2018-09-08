import { range, merge } from 'rxjs'
import { partition, map } from 'rxjs/operators'

// Like filter and groupBy

const [even, odd] = range(1, 20)
  .pipe(
    partition(n => n % 2 === 0),
  )

merge(
  even.pipe(
    map(v => `Even: ${v}`)
  ),
  odd.pipe(
    map(v => `Odd: ${v}`)
  )
).subscribe(console.log)
