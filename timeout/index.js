import { timeout } from 'rxjs/operators'

import { fromStdIn } from '../utility'

fromStdIn()
  .pipe(
    timeout(1000) // completes observable if no value arrived in time
  )
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed'),
    error: v => console.warn('error', v)
  })
