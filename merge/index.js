import { interval } from 'rxjs'
import { map, merge } from 'rxjs/operators'

const postAFeed$ = interval(1000)
  .pipe(
    map((v) => `A: #${v}`)
  )

const postBFeed$ = interval(650)
  .pipe(
    map((v) => `B: #${v}`)
  )

postAFeed$
  .pipe(
    merge(postBFeed$)
  )
  .subscribe(console.log)

