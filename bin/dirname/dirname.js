export const dirname = process.cwd();
export const resolve = (...dirs) => dirs.reduce((accum, item) => accum + '/' + item, '');
export const getResolve = (rootPath) => (...dirs) => resolve(rootPath, ...dirs);
//# sourceMappingURL=dirname.js.map