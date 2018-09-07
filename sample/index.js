import { interval } from 'rxjs'
import { sample } from 'rxjs/operators'
import { fromStdIn } from '../utility'

// Get a sample from another observable

fromStdIn()
  .pipe(
    sample(interval(1000))
  )
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed'),
    error: v => console.warn('error', v)
  })
