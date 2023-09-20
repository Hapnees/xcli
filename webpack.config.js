const path = require('path')

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      crypto: false,
      fs: false,
      child_process: false,
      path: false,
      os: false,
    },
    alias: {
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@templates': path.resolve(__dirname, 'src/templates'),
      '@commands': path.resolve(__dirname, 'src/commands'),
    },
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'bin'),
  },
}
