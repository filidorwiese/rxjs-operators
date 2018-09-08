import { switchMap, mergeMap } from 'rxjs/operators'
import { fromStdIn } from '../utility'

const myPromise = val =>
  new Promise(
    (resolve) => {
      console.log(`Key ${val} typed`)
      setTimeout(() => {
        resolve(`Key ${val} resolved`)
      }, 500)
    }
  )

fromStdIn()
  .pipe(
    // mergeMap(k => myPromise(k)),      // Resolves all keys
    switchMap(k => myPromise(k))      // Resolves last key only
  )
  .subscribe(console.log)
