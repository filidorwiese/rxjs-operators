import { of } from 'rxjs'
import { delay, delayWhen, tap } from 'rxjs/operators'
import { range } from 'rxjs/index'


of(42)
  .pipe(
    tap(v => console.log('What is the meaning of life, the universe and everything?')),
    delay(1000),
    tap(v => console.log('...')),
    delay(1000)
  )
  .subscribe(console.log)
