import { fromStdIn } from '../utility'
import { throttleTime } from 'rxjs/operators'

fromStdIn()
  .pipe(
    throttleTime(1000)    // intermittent values are lost
  )
  .subscribe(console.log)
