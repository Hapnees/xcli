import readLine from 'readline-sync'
import { createSharedComponent } from './createSharedComponent.js'

export const CSCCute = (fsdPath: string) => {
  const componentName = readLine.question('Component name: ')
  if (!componentName) {
    return false
  }

  const isSuccess = createSharedComponent(fsdPath, componentName)

  if (!isSuccess) {
    return false
  }

  return true
}
