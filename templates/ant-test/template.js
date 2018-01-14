
const path = require('path')

const name = 'ant-test'
const dependencies = [ ]
const devDependencies = [ ]

const Template = {
    name,
    dependencies,
    devDependencies,
    Structure: function Structure({ PROJECT_NAME_DOT }) {
        const dirPaths = { }

        return {
            dirs: [ ],
            files: { },
        }
    }
}

module.exports = Template
