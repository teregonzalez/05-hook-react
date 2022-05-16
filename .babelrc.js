const presets = ['@babel/preset-env', '@babel/preset-react'];

const plugins = [
    '@babel/plugin-syntax-jsx',
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties',
    "transform-object-rest-spread",
    "css-modules-transform"

];



module.exports = { presets, plugins };