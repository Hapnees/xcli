import fs from 'fs'
import chalk from 'chalk'
import { print } from '../../../../print/print.js'
import { getResolve } from '../../../../dirname/dirname.js'
import { componentUITemplate } from '../../../../templates/componentUI.js'
import { storyUITemplate } from '../../../../templates/storyUI.js'
import { indexComponentTemplate } from '../../../../templates/indexComponent.js'
import { CSCCute } from './CSCCute.js'

export const createSharedComponent = (
  fsdPath: string,
  componentName: string
) => {
  const resolve = getResolve(fsdPath)
  const resolveUI = getResolve(`${fsdPath}/shared/ui`)

  try {
    const sharedPath = fs.readdirSync(resolve('shared'))
    let isExistUIDir = false

    for (const _file of sharedPath) {
      if (_file === 'ui') {
        isExistUIDir = true
        break
      }
    }

    if (!isExistUIDir) {
      fs.mkdirSync(resolve('shared', 'ui'))
    }

    try {
      fs.mkdirSync(resolveUI(componentName))
    } catch (e) {
      print.error(`${componentName} component already exists`)
      return CSCCute(fsdPath)
    }

    fs.writeFileSync(
      resolveUI(componentName, `${componentName}.tsx`),
      componentUITemplate(componentName)
    )

    fs.writeFileSync(
      resolveUI(componentName, `${componentName}.module.scss`),
      ''
    )

    fs.writeFileSync(
      resolveUI(componentName, `${componentName}.stories.tsx`),
      storyUITemplate(componentName)
    )

    fs.writeFileSync(
      resolveUI(componentName, 'index.ts'),
      indexComponentTemplate(componentName)
    )

    const uiPath = fs.readdirSync(resolve('shared', 'ui'))
    let isExistUICollector = false
    for (const _file of uiPath) {
      if (_file === 'index.ts') {
        isExistUICollector = true
        break
      }
    }

    if (isExistUICollector) {
      fs.appendFileSync(
        resolve('shared', 'ui', 'index.ts'),
        indexComponentTemplate(componentName)
      )
    } else {
      fs.writeFileSync(
        resolve('shared', 'ui', 'index.ts'),
        indexComponentTemplate(componentName)
      )
    }

    console.log(
      chalk.greenBright(`\n${componentName} component successfully created\n`)
    )
    return true
  } catch (e) {
    print.error('Shared dir not found')
    return false
  }
}
