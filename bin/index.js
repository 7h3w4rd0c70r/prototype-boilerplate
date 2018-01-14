#!/usr/bin/env node

(function () {
    const _ = require('lodash')
    const ParseArguments = require('../lib/arguments').ParseArguments
    const ParseProps = require('../lib/arguments').ParseProps

    const argv = process.argv
    argv.splice(0, 2)

    const commands = {
        create: require('./create'),
        templates: require('./templates'),
        help: require('./help'),
        '--help': require('./help'),
        '-h': require('./help'),
    }

    const PWD = String(process.env.PWD)
    const PROJECT_NAME = PWD.split('/')[String(process.env.PWD).split('/').length - 1]
    const TEMPLATE_NAME = null

    const props = ParseProps(_.merge({ }, {
        PWD,
        PROJECT_NAME,
        TEMPLATE_NAME,
    }, ParseArguments(argv)))

    for (const cmd in commands) {
        if (cmd === argv[0]) {
            return commands[cmd](props)
        }
    }

    return commands.help()
}())
