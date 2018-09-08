import { filter, buffer } from 'rxjs/operators'
import { fromStdIn } from '../utility'

fromStdIn()
  .pipe(
    buffer(
      fromStdIn().pipe(
        filter(k => k === 'p')  // open buffer on 'p' and emit
      )
    )

  )
  .subscribe(console.log)