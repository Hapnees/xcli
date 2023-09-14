export const dirname = process.cwd()
export const resolve = (...dirs: string[]): string =>
  dirs.reduce((accum, item) => accum + '/' + item, '')

export const getResolve =
  (rootPath: string) =>
  (...dirs: string[]) =>
    resolve(rootPath, ...dirs)
