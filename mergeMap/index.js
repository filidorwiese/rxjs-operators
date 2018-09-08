import { interval, from } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'

const postAFeed$ = interval(1000)
  .pipe(
    map((v) => `A: #${v}`)
  )

const postBFeed$ = interval(650)
  .pipe(
    map((v) => `B: #${v}`)
  )

const postCFeed$ = interval(1650)
  .pipe(
    map((v) => `C: #${v}`)
  )

const config = {
  blue: postAFeed$,
  red: postBFeed$,
  green: postCFeed$
}

const colors = ['blue', 'red', 'green']

from(colors)
  .pipe(
    mergeMap((c) => config[c]),
    // mergeMap((c) => config[c], (valueFromSource, valueFromPromise) => {
    //   return `Source: ${valueFromSource}, Promise: ${valueFromPromise}`;
    // })
  )
  .subscribe(console.log)