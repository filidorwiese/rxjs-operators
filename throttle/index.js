import { fromStdIn } from '../utility'
import { timer } from 'rxjs'
import { throttle } from 'rxjs/operators'

fromStdIn()
  .pipe(
    throttle(
      () => timer(250)    // uses factory function
    )
  )
  .subscribe(console.log)
