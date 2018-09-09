import { fromStdIn } from '../utility'
import { throttle, filter } from 'rxjs/operators'

// Discards values until inner observable emits, keeps first value (inverted debounce)
// Usecase: prevent multiple form submit button clicks

fromStdIn()
  .pipe(
    throttle(
      () => fromStdIn().pipe(filter(k => k === 'p'))    // Emit next value after p
    )
  )
  .subscribe(console.log)
