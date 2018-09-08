import { bufferTime } from 'rxjs/operators'
import { fromStdIn } from '../utility'

fromStdIn()
  .pipe(
    bufferTime(1000)
  )
  .subscribe(console.log)