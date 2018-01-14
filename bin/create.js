
const path = require('path')
const fs = require('fs')
const spwn = require('child_process').spawn

function execute(props) {
    const template = require(`../templates/${props.TEMPLATE_DIR_NAME}/template`)
    const structure = template.Structure(props)

    if (!fs.existsSync(path.resolve(props.PWD, props.PROJECT_NAME))) {
        fs.mkdirSync(path.resolve(props.PWD, props.PROJECT_NAME))
    }

    

    console.log(template)
}

function Create(props) {
    console.log('Creating...')

    const GetTemplates = require('./templates').GetTemplates
    const ChooseTemplate = require('./templates').ChooseTemplate

    if (props.TEMPLATE_NAME === null) {
        return ChooseTemplate(function (template) {
            props.TEMPLATE_NAME = template.name
            props.TEMPLATE_DIR_NAME = template.dirName
            return execute(props)
        })
    }

    const templates = GetTemplates()
    for (const i in templates) {
        if (templates[i].name === props.TEMPLATE_NAME) {
            props.TEMPLATE_NAME = templates[i].name
            props.TEMPLATE_DIR_NAME = templates[i].dirName
            return execute(props)
        }
    }

    throw new Error('Invalid template')
}

module.exports = Create
