
const _ = require('lodash')
const PromptList = require('prompt-list')

function Templates() {

    console.log('Available templates:')
}

Templates.GetTemplates = Templates.prototype.GetTemplates = function GetTemplates() {
    const path = require('path')
    const fs = require('fs')

    const templates = [ ]
    const dirs = fs.readdirSync(path.resolve(__dirname, '..', 'templates'))
    for (const i in dirs) {
        if (
            !fs.statSync(path.resolve(__dirname, '..', 'templates', dirs[i])).isFile() &&
            fs.statSync(path.resolve(__dirname, '..', 'templates', dirs[i], 'template.js')).isFile()
        ) {
            const template = require(path.resolve(__dirname, '..', 'templates', dirs[i], 'template.js'))
            templates.push({
                name: _.isString(template.name) ? template.name : dirs[i],
                dirName: dirs[i],
            })
        }
    }

    return templates
}

Templates.ChooseTemplate = Templates.prototype.ChooseTemplate = function ChooseTemplate(callback) {
    const templates = Templates.GetTemplates()

    const prompt = new PromptList({
        name: 'template',
        message: 'Which template to use?',
        choices: templates.map(template => template.name)
    })

    prompt.ask(function OnChooseTemplate(templateName) {
        for (const i in templates) {
            if (templates[i].name === templateName) {
                return callback(templates[i])
            }
        }
        throw new Error('Invalid template')
    })
}

module.exports = Templates
