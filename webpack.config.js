const path = require('path')
const APP_DIR = path.resolve(__dirname, "./src");
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(APP_DIR )
module.exports={
    
    entry: APP_DIR+'/index.js',
    mode:"development",
    output:{
        
        path: path.resolve(__dirname,'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                loader: 'babel-loader',
                test: /\.js$|jsx/,
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve('./public/index.html'),
        }),
      ],
    devServer:{
        port: 3000,
        contentBase: './build',
        inline:true
    }
}