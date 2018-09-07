import { range, timer } from 'rxjs'
import { delay, delayWhen, tap } from 'rxjs/operators'


range(1, 9)
  .pipe(
    delayWhen(n => timer(n  * 1000))
  )
  .subscribe(console.log)