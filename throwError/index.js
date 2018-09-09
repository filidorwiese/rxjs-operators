import { throwError } from 'rxjs'

throwError('Error occured!')
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed'),
    error: v => console.log(`Error: ${v}`)
  })
