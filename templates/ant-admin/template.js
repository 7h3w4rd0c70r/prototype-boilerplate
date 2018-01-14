
const path = require('path')

const name = 'ant-admin'
const dependencies = ['antd', 'axios', 'bluebird', 'classnames', 'jsignal', 'lodash', 'moment', 'numeral', 'react', 'react-dom', 'react-helmet', 'react-router', 'react-router-dom']
const devDependencies = ['babel-core', 'babel-loader', 'babel-plugin-transform-object-rest-spread', 'babel-plugin-transform-runtime', 'babel-preset-es2015', 'babel-preset-react', 'babel-preset-stage-0', 'clean-webpack-plugin', 'copy-webpack-plugin', 'css-loader', 'extract-text-webpack-plugin', 'file-loader', 'html-loader', 'html-webpack-plugin', 'json-loader', 'less', 'less-loader', 'postcss-loader', 'source-map-loader', 'style-loader', 'webpack', 'webpack-dev-server']

const Template = {
    name,
    dependencies,
    devDependencies,
    Structure: function Structure({ PROJECT_NAME_DOT }) {
        const dirPaths = {
            root: path.join('.'),
            src: path.join('.', 'src'),
            srcAssets: path.join('.', 'src', 'assets'),
            srcAssetsFonts: path.join('.', 'src', 'assets', 'fonts'),
            srcAssetsImages: path.join('.', 'src', 'assets', 'images'),
            srcAssetsLess: path.join('.', 'src', 'assets', 'less'),
            srcAssetsLessNAME: path.join('.', 'src', 'assets', 'less', 'CUSTOM'),
            srcCore: path.join('.', 'src', 'core'),
            srcDumb: path.join('.', 'src', 'dumb'),
            srcHelpers: path.join('.', 'src', 'helpers'),
            srcSmart: path.join('.', 'src', 'smart'),
        }

        return {
            dirs: [
                dirPaths.src,
                dirPaths.srcAssets,
                dirPaths.srcAssetsFonts,
                dirPaths.srcAssetsImages,
                dirPaths.srcAssetsLess,
                path.join('.', 'src', 'assets', 'less', PROJECT_NAME_DOT),
                dirPaths.srcCore,
                dirPaths.srcDumb,
                dirPaths.srcHelpers,
                dirPaths.srcSmart,
            ],
            files: {
                [dirPaths.root]: [
                    'webpack.config.js',
                ],
                [dirPaths.src]: [
                    'index.html',
                    'index.jsx',
                ],
                [dirPaths.srcAssetsLess]: [
                    'main.less',
                ],
                [path.join('.', 'src', 'assets', 'less', PROJECT_NAME_DOT)]: [{
                    filename: 'layout.less',
                    source: path.join(dirPaths.srcAssetsLessNAME, 'layout.less'),
                }],
                [dirPaths.srcCore]: [
                    'api.js',
                    'modalControl.js',
                ],
                [dirPaths.srcDumb]: [
                    
                ],
                [dirPaths.srcHelpers]: [
                    'convert.js',
                    'scroll.js',
                ],
                [dirPaths.srcSmart]: [
        
                ],
            },
        }
    }
}

module.exports = Template
