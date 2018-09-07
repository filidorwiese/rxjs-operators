import { empty } from 'rxjs'

const emptyObservable = empty()

emptyObservable.subscribe({
  next: a => console.log('next', a),
  complete: a => console.log('completed', a)
})