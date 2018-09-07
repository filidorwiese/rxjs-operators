import { skipWhile, tap } from 'rxjs/operators'
import { fromStdIn } from '../utility'

fromStdIn()
  .pipe(
    skipWhile(k => k !== 'a')
  )
  .subscribe(console.log)
