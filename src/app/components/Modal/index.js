import React from 'react'
import ReactDOM from 'react-dom'

import './Modal.css'

const modalRoot = document.getElementById('modal-root')

export default class Modal extends React.Component {
  render() {
    return !!this.props.show && ReactDOM.createPortal(this.props.children, modalRoot)
  }
}
