module.exports = {
   entry: 'app.ts',
   output: {
      filename: 'bundle.js'
   },
   devtool: 'inline-source-map',
   module: {
      rules: [{
         test: /\.ts$/,
         use: 'ts-loader',
         exclude: /node_modules/
      }]
   },
   resolve: {
      extensions: ['.ts', '.js']
   }
};