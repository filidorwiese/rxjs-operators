import { bufferToggle, filter } from 'rxjs/operators'
import { fromStdIn } from '../utility'


fromStdIn()
  .pipe(
    bufferToggle(
      fromStdIn().pipe(
        filter(k => k === 'p')  // open buffer
      ),
      () => fromStdIn().pipe(
        filter(k => k === 'o')  // close buffer and emit
      )
    )
  )
  .subscribe(console.log)