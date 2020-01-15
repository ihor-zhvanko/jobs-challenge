import React from 'react'
import Reflux from 'reflux'

import { JobsActions, NotificationActions } from '../../stores'

import './Create.css'
import JobForm, { Fields } from '../components/JobForm'

export default class CreatePage extends Reflux.Component {
  initialValues = {
    [Fields.TITLE]: '',
    [Fields.CITY]: '',
    [Fields.EMPLOYER]: '',
    [Fields.TASKS]: [''],
    [Fields.REQUIREMENTS]: [''],
  }

  render() {
    return (
      <div className="create-page page">
        <h4>Create New Job!</h4>

        <JobForm initialValues={this.initialValues} onSubmit={this._onSubmit} />
      </div>
    )
  }

  _onSubmit = values => {
    JobsActions.create(values)
    NotificationActions.push('Create success!')
    this.props.history.goBack()
  }
}
