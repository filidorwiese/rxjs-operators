import { timer } from 'rxjs'
import { bufferWhen, filter } from 'rxjs/operators'
import { fromStdIn } from '../utility'


fromStdIn()
  .pipe(
    bufferWhen(
      () => timer(1000)   // buffer and emit on observable emit
    )
  )
  .subscribe(console.log)