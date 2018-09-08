import { bufferCount } from 'rxjs/operators'
import { fromStdIn } from '../utility'

fromStdIn()
  .pipe(
    bufferCount(10)
  )
  .subscribe(console.log)