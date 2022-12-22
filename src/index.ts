import { useRef } from 'react'

export const useSuspense = (suspended: Boolean = false): void => {
  const promise = useRef<any>()

  if (suspended && !promise.current) {
    throw new Promise((resolve) => {
      promise.current = { resolve }
    })
  }
  if (!suspended && promise.current) {
    promise.current.resolve()
    promise.current = undefined
  }
}

export default useSuspense
