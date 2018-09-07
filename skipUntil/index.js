import { timer } from 'rxjs'
import { skipUntil } from 'rxjs/operators'
import { fromStdIn } from '../utility'

fromStdIn()
  .pipe(
    skipUntil(timer(4000))
  )
  .subscribe(console.log)
