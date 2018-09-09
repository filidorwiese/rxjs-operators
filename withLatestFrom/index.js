import { interval } from 'rxjs'
import { withLatestFrom } from 'rxjs/operators'
import { fromStdIn } from '../utility'

// Get the latest value from an observable on the schedule of another observable

// Note, needs values from both observables before it emits + it keeps emitting latest values

interval(1000)
  .pipe(
    withLatestFrom(fromStdIn())
  )
  .subscribe(console.log)