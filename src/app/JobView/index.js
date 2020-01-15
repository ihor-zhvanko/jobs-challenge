import React from 'react'
import Reflux from 'reflux'

import { JobsStore } from '../../stores'

import './JobView.css'

export default class JobViewPage extends Reflux.Component {
  /** @type {{ jobs: object[] }} */
  state = {
    // reflux
    jobs: [],
  }
  store = JobsStore

  get navParams() {
    return this.props.match.params
  }

  get job() {
    return this.state.jobs.find(x => x._id === this.navParams.id)
  }

  render() {
    return (
      <div className="job-view-page page">
        <div className="job-item">
          <header>
            <h3>{this.job.title}</h3>
            <h4 className="job-company">{this.job.employer}</h4>
            <h4>{this.job.city}</h4>
          </header>

          <div className="job-tasks">
            <h5>Tasks</h5>
            <ul className="tasks-list">{this.job.tasks.map(this._renderTask)}</ul>
          </div>

          <div className="job-tasks">
            <h5>Requirements</h5>
            <ul className="tasks-list">{this.job.requirements.map(this._renderTask)}</ul>
          </div>

          <button className="edit-btn" onClick={this._onEditPress}>
            Edit
          </button>
        </div>
      </div>
    )
  }

  _onEditPress = () => {
    this.props.history.push(`/jobs/${this.navParams.id}/edit`)
  }

  _renderTask = (taskTitle, index) => {
    return (
      <li key={index} className="tasks-list-item">
        {taskTitle}
      </li>
    )
  }
}
