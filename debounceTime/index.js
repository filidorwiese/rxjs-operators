import { fromStdIn } from '../utility'
import { debounceTime } from 'rxjs/operators'

fromStdIn()
  .pipe(
    debounceTime(250)
  )
  .subscribe(console.log)
