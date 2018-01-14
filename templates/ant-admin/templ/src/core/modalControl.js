
import React from 'react'
import jSignal from 'jsignal'
import _ from 'lodash'

const _onChange = new jSignal()

let _modalName = null
let _props = { }
let _registeredModals = { }

export const ModalController = React.createClass({
    componentDidMount: () => _onChange.listen(this.onModalChange),
    componentWillUnmount: () => _onChange.unlisten(this.onModalChange),
    onModalChange: () => this.setState({ modal: _modalName }),
    render() {
        if (_.isObject(_registeredModals[this.state.modal])) {
            return React.createElement(_registeredModals[this.state.modal].component, _props)
        }
        return React.createElement('div')
    },
})

class ModalControl {
    listen(onChange = null) {
        if (typeof onChange === 'function') {
            _onChange.listen(onChange)
        }
    }

    unlisten(onChange = null) {
        if (typeof onChange === 'function') {
            _onChange.unlisten(onChange)
        }
    }

    registerModal(modalName, component) {
        _registeredModals[modalName] = component
    }

    open(modalName = null, props = { }) {
        if (_.isString(modalName)) {
            if (!(props instanceof Object)) {
                props = { }
            }
            _modalName = modalName
            _props = props
            _onChange.dispatch(props)
        }
    }

    close() {
        _modalName = null
        _props = { }
        _onChange.dispatch()
    }
}

export default new ModalControl()
