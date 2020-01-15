import React from 'react'
import Reflux from 'reflux'

import { JobsStore, JobsActions, NotificationActions } from '../../stores'

import './Home.css'

import ConfirmModal from '../components/Modal/ConfirmModal'
import JobItem from './JobItem'

export default class HomePage extends Reflux.Component {
  /** @type {{ jobs: object[] }} */
  state = {
    jobs: [],
  }
  store = JobsStore

  confirmModalRef = React.createRef()

  render() {
    return (
      <div className="home-page page">
        <ul className="job-list">
          {this.state.jobs.length ? (
            this.state.jobs.map(this._renderJob)
          ) : (
            <li className="job-item empty">NO JOBS :(</li>
          )}
        </ul>

        <ConfirmModal ref={this.confirmModalRef} onConfirm={this._onDeleteConfirm} />
      </div>
    )
  }

  _renderJob = job => {
    return (
      <JobItem
        key={job._id}
        {...job}
        onClick={this._onJobClick}
        onEditPress={this._onEditPress}
        onRemovePress={this._onRemovePress}
      />
    )
  }

  _onRemovePress = id => {
    this.confirmModalRef.current.open(id)
  }

  _onEditPress = id => {
    this.props.history.push(`/jobs/${id}/edit`)
  }

  _onDeleteConfirm = id => {
    JobsActions.delete(id)
    NotificationActions.push('Delete Success!')
  }

  _onJobClick = id => {
    this.props.history.push(`/jobs/${id}`)
  }
}
