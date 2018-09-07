import { Observable } from 'rxjs'

const observable = Observable.create(observer => {
  observer.next(42)

  setInterval(() => {
    observer.next('nonsense')
  }, 500)

  setTimeout(() => {
    observer.complete()
  }, 2500)
})

observable.subscribe({
  next: v => console.log('next', v),
  error: v => console.warn('error'. v),
  complete: v => console.warn('completed'. v)
})