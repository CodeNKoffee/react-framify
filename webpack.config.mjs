import path from 'path';

export default {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    publicPath: '/',
    library: {
      type: 'umd',
      name: 'ReactFramify',
    },
    globalObject: 'this',
    libraryTarget: 'commonjs2', // Ensure compatibility with Node.js
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource', // Update to asset/resource for better compatibility
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
