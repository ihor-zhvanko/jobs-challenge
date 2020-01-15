import React from 'react'
import Reflux from 'reflux'

import { NotificationsStore, NotificationActions } from '../../../stores'

import Modal from './index'

export default class Notifications extends Reflux.Component {
  state = {
    notifications: [],
    show: false,
  }
  store = NotificationsStore

  timeout = null

  componentDidUpdate() {
    //super.componentDidUpdate()

    this.processNotification()
  }

  get blockClassName() {
    if (this.state.show && this.state.notifications.length) {
      return 'notification-container show'
    }

    return 'notification-container hide'
  }

  render() {
    return (
      <Modal show>
        <div className={this.blockClassName}>{this.state.notifications[0]}</div>
      </Modal>
    )
  }

  processNotification() {
    if (this.state.notifications.length === 0 || this.timeout) {
      return
    }

    this.timeout = setTimeout(this._onTimeoutReady, 3000)
    this.setState({ show: true })
  }

  _onTimeoutReady = () => {
    NotificationActions.pop()
    this.timeout = null

    this.setState({ show: false }, () => {
      //this.processNotification()
    })
  }
}
