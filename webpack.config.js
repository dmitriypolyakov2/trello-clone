//подключаем модули
const path = require('path');
const HTMLplugin = require('html-webpack-plugin');
//экспортируем настройки вэбпак модуля
module.exports = {
    //точка входа
    entry:{
        //именно так потому, что этот метод сам ставит нужный слэш
        //в линуксе слэш в обратную сторону
        main: path.resolve(__dirname, 'src', 'index.js'),
    },
    //куда помещаем сборку
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    //сервер
    devServer: {
        historyApiFallback: true,
        contentBase: "./dist",
    },
    //используемые модули
    module: {
        rules: [
            {
                //регулярное выражене для поиска файлов
                test:/\.jsx?$/,
                //игнорируем директорию
                exclude: /node_modules/,
                //что используем если нашли файл
                use: 'babel-loader'
            },
            {
                //регулярное выражене для поиска файлов
                test:/\.css$/,
                //игнорируем директорию
                exclude: /node_modules/,
                //что используем если нашли файл
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        //при обращении просто к директории будут искаться файлы с расширением js или jsx
        extensions: ['.js', '.jsx'],
    },
    //плагины которые используются при сборке
    plugins :[
        new HTMLplugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
    ],
};