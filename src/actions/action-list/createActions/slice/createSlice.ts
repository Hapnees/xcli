import fs from 'fs'
import { getResolve } from '@helpers'

export const createSlice = (
  fsdPath: string,
  layer: string,
  sliceName: string,
) => {
  const resolve = getResolve(fsdPath)

  try {
    fs.mkdirSync(resolve(layer, sliceName))
  } catch (e) {}

  try {
    fs.mkdirSync(resolve(layer, sliceName, 'ui'))
  } catch (e) {}

  return true
}
