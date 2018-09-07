import { skip, take } from 'rxjs/operators'
import { fromStdIn } from '../utility'

fromStdIn()
  .pipe(
    skip(5)
  )
  .subscribe(console.log)
