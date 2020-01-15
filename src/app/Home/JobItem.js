import React, { PureComponent } from 'react'

export default class JobItem extends PureComponent {
  render() {
    const { _id, title, employer, city, tasks = [] } = this.props

    return (
      <li className="job-item">
        {this._renderManageJobBtns(_id)}

        <header>
          <h3 onClick={this._onClick}>{title || 'NO TITLE'} </h3>
          <h4 className="job-company">
            <img src={require('../../images/company.jpeg')} alt={''} />
            {employer}
          </h4>
          <h4>
            <img src={require('../../images/place.jpeg')} alt={''} />
            {city}
          </h4>
        </header>

        <div className="job-tasks">
          <ul className="tasks-list">{tasks.slice(0, 2).map(this._renderTask)}</ul>
        </div>
      </li>
    )
  }

  _renderManageJobBtns = () => {
    return (
      <div className="manage-job">
        <button className="manage-job-btn" type="button" onClick={this._onEditPress}>
          EDIT
        </button>
        <button className="manage-job-btn red" type="button" onClick={this._onRemovePress}>
          DELETE
        </button>
      </div>
    )
  }

  _renderTask = (taskTitle, index) => {
    return (
      <li key={index} className="tasks-list-item">
        {taskTitle}
      </li>
    )
  }

  _onClick = () => {
    this.props.onClick && this.props.onClick(this.props._id)
  }

  _onEditPress = () => {
    this.props.onEditPress && this.props.onEditPress(this.props._id)
  }

  _onRemovePress = () => {
    this.props.onRemovePress && this.props.onRemovePress(this.props._id)
  }
}
