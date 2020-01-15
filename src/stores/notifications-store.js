import Reflux from 'reflux'

export const NotificationActions = Reflux.createActions(['push', 'pop'])

export class NotificationsStore extends Reflux.Store {
  state = { notifications: [] }
  listenables = NotificationActions

  onPush(text) {
    this.setState({
      notifications: [...this.state.notifications, text],
    })
  }

  onPop() {
    this.setState({
      notifications: this.state.notifications.slice(1),
    })
  }
}
