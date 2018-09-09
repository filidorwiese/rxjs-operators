import { fromEvent, combineLatest } from 'rxjs'

// First waits for both observables to submit values, then combines them.
// Any value submitted after the initial values will submit latest from both observables

const country$ = fromEvent(document.getElementById('country'), 'change', e => e.target.value)
const city$ = fromEvent(document.getElementById('city'), 'change', e => e.target.value)

combineLatest(country$, city$)
  .subscribe(console.log)