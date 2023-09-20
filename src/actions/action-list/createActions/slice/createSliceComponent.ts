import fs from 'fs'
import chalk from 'chalk'
import { getResolve } from '@helpers'
import { print } from '@utils'
import { componentUITemplate, indexComponentTemplate } from '@templates'

export const createSliceComponent = (
  fsdPath: string,
  layer: string,
  sliceName: string,
  componentName: string,
) => {
  const pathToSlice = `${fsdPath}/${layer}/${sliceName}`
  const resolveUI = getResolve(`${pathToSlice}/ui`)
  const resolveSlice = getResolve(pathToSlice)

  try {
    fs.mkdirSync(resolveUI(componentName))
  } catch (e) {
    print.error(`${componentName} component already exists`)
    return false
  }

  fs.writeFileSync(
    resolveUI(componentName, `${componentName}.tsx`),
    componentUITemplate(componentName),
  )

  fs.writeFileSync(resolveUI(componentName, `${componentName}.module.scss`), '')
  fs.writeFileSync(
    resolveUI(componentName, 'index.ts'),
    indexComponentTemplate(componentName),
  )

  const uiFiles = fs.readdirSync(resolveUI())
  let isExistUICollector = false
  for (const _file of uiFiles) {
    if (_file === 'index.ts') {
      isExistUICollector = true
      break
    }
  }

  if (isExistUICollector) {
    fs.appendFileSync(
      resolveUI('index.ts'),
      indexComponentTemplate(componentName),
    )
  } else {
    fs.writeFileSync(
      resolveUI('index.ts'),
      indexComponentTemplate(componentName),
    )
  }

  const sliceFiles = fs.readdirSync(resolveSlice())
  let isExistSliceCollector = false
  for (const _file of sliceFiles) {
    if (_file === 'index.ts') {
      isExistUICollector = true
      break
    }
  }

  if (!isExistSliceCollector) {
    fs.writeFileSync(resolveSlice('index.ts'), indexComponentTemplate('ui'))
  }

  console.log(
    chalk.greenBright(`\n${componentName} component successfully created\n`),
  )
  return true
}
