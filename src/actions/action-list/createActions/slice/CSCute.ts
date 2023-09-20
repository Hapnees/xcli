import readLine from 'readline-sync'
import { createSlice } from './createSlice'
import { createSliceComponent } from './createSliceComponent'
import { createActions } from '../createActions'

export const CSCute = (
  fsdPath: string,
  layerIncoming?: string,
  sliceIncoming?: string,
): boolean => {
  let layer = layerIncoming || ''

  if (!layerIncoming) {
    layer = readLine.question('Layer: ')
    if (!layer) {
      return createActions(fsdPath)
    }
  }

  let sliceName = sliceIncoming || ''

  if (!sliceIncoming) {
    sliceName = readLine.question('Slice name: ')
    if (!sliceName) {
      return CSCute(fsdPath)
    }
  }

  const isSuccessSliceCreated = createSlice(fsdPath, layer, sliceName)

  if (!isSuccessSliceCreated) {
    return false
  }

  const componentName = readLine.question('Component name: ')
  if (!componentName) {
    return true
  }

  const iSuccess = createSliceComponent(
    fsdPath,
    layer,
    sliceName,
    componentName,
  )

  if (!iSuccess) {
    return CSCute(fsdPath, layer, sliceName)
  }

  return true
}
