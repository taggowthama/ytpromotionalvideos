const path = require('path')
const APP_DIR = path.resolve(__dirname, "./src");
console.log(APP_DIR )
module.exports={
    
    entry: APP_DIR+'/index.js',
    mode:"development",
    output:{
        
        path: path.resolve(__dirname,'dist'),
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
    devServer:{
        port: 3000,
        contentBase: './public',
        inline:true
    }
}