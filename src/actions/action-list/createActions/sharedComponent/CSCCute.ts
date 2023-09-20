import readLine from 'readline-sync'
import { createSharedComponent } from './createSharedComponent'

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
