import React, { PureComponent } from 'react'

import Modal from './index'

export default class ConfirmModal extends PureComponent {
  state = {
    show: false,
    data: null,
  }

  open(data) {
    this.setState({ show: true, data })
  }

  close() {
    this.setState({ show: false })
  }

  render() {
    return (
      <Modal show={this.state.show}>
        <div className="modal-wrapper">
          <div className="modal-container">
            <h4>Are you sure?</h4>

            <div className="confirm-buttons">
              <button onClick={this._onNoPress}>NO</button>
              <button onClick={this._onYesPress} className="red">
                YES
              </button>
            </div>
          </div>
        </div>
      </Modal>
    )
  }

  _onYesPress = () => {
    this.props.onConfirm(this.state.data)
    this.close()
  }

  _onNoPress = () => {
    this.close()
  }
}
