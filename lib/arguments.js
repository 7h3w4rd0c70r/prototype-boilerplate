
const _ = require('lodash')

exports.ParseArguments = function ParseArguments(args) {
    const props = { }

    if (!(args instanceof Array)) {
        throw new Error('ParseArguments invalid args type')
    }

    for (const i in args) {
        switch (args[i]) {
            case '--project-name':
            case '--name':
            case '-n':
                if (!_.isString(args[Number(i) + 1]) || args[Number(i) + 1][0] === '-') {
                    throw new Error('Project name has invalid format')
                }
                props.PROJECT_NAME = args[Number(i) + 1]
                continue
            case '--template':
            case '-t':
                if (!_.isString(args[Number(i) + 1]) || args[Number(i) + 1][0] === '-') {
                    throw new Error('Project template has invalid format')
                }
                props.TEMPLATE_NAME = args[Number(i) + 1]
                continue
        }
    }

    return props
}

exports.ParseProps = function ParseProps(props) {
    const _props = _.cloneDeep(props)

    _props.PROJECT_NAME_DOT = _props.PROJECT_NAME
        .replace(/\_/g, '.')
        .replace(/-/g, '.')
        .replace(/\s([a-z]|[A-Z]|[0-9])/g, (g) => g[1].toUpperCase())

    return _props
}
