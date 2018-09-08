import { interval, of } from 'rxjs'
import { map, mergeAll } from 'rxjs/operators'

const postAFeed$ = interval(1000)
  .pipe(
    map((v) => `A: #${v}`)
  )

const postBFeed$ = interval(650)
  .pipe(
    map((v) => `B: #${v}`)
  )

const postCFeed$ = interval(650)
  .pipe(
    map((v) => `C: #${v}`)
  )

of(postAFeed$, postBFeed$, postCFeed$)
  .pipe(
    mergeAll()
  )
  .subscribe(console.log)

