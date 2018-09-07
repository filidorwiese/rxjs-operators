import { range } from 'rxjs'
import { single, last } from 'rxjs/operators'

// Like first but errors when multiple values match predacate

range(1, 4)
  .pipe(
    // last(),
    single(n => n % 2 === 0)
  )
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed'),
    error: v => console.warn('error', v)
  })