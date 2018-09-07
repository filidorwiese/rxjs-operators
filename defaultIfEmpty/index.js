import { empty, range, interval } from 'rxjs'
import { defaultIfEmpty, map } from 'rxjs/operators'

// Provides a default value before observable completes without values
empty()
  .pipe(
    defaultIfEmpty(42)
  )
  .subscribe(v => console.log('next', v))