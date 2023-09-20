const fs = require('fs')

const format = () => {
  const file = fs.readFileSync('./bin/index.js')
  fs.unlinkSync('./bin/index.js')
  fs.writeFileSync('./bin/index.js', `#!/usr/bin/env node\n\n ${file}`)
}

format()
