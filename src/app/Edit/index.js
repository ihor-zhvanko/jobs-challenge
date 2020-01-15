import React from 'react'
import Reflux from 'reflux'

import { JobsStore, JobsActions, NotificationActions } from '../../stores'

import './Edit.css'
import JobForm from '../components/JobForm'

export default class EditPage extends Reflux.Component {
  state = {
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
      <div className="create-page page">
        <div className="create-form">
          <h4>Edit Job!</h4>

          <JobForm initialValues={this.job} onSubmit={this._onSubmit} />
        </div>
      </div>
    )
  }

  _onSubmit = values => {
    JobsActions.update(this.navParams.id, values)
    NotificationActions.push('Update success!')
    this.props.history.replace(`/jobs/${this.navParams.id}`)
  }
}
