export const compareAndFilter = <T>(genArray: T[], compareArray: T[]) => {
  return genArray.reduce((accum: T[], item) => {
    if (!compareArray.includes(item)) {
      accum.push(item)
    }
    return accum
  }, [])
}
