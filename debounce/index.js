import { fromStdIn } from '../utility'
import { timer } from 'rxjs'
import { debounce } from 'rxjs/operators'

// Discards values until inner observable emits, keeps last value (inverted throttle)
// Usecase: typeaheads

fromStdIn()
  .pipe(
    debounce(
      () => timer(250)    // uses factory function
    )
  )
  .subscribe(console.log)
