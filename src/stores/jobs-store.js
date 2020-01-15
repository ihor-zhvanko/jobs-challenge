import Reflux from 'reflux'

import jobsMock from '../data/jobs-mock'

export const JobsActions = Reflux.createActions(['create', 'update', 'delete'])

const abc = 'abcdefghijklmnopqrstuvwxyz0123456789'

export class JobsStore extends Reflux.Store {
  state = { jobs: jobsMock }
  listenables = JobsActions

  onCreate(payload) {
    const newJob = { ...payload, _id: this._randomId(5) }

    this.setState({
      jobs: [newJob, ...this.state.jobs],
    })
  }

  onUpdate(id, payload) {
    const updatedJob = { ...payload, _id: id }

    const newJobs = this.state.jobs.map(x => {
      if (x._id === id) {
        return updatedJob
      }

      return x
    })

    this.setState({ jobs: newJobs })
  }

  _randomId(length) {
    const arr = []
    arr.length = length
    arr.fill(0)

    return arr
      .map(_x => {
        const index = Math.floor(abc.length * Math.random())
        return abc[index]
      })
      .join('')
  }

  onDelete(id) {
    this.setState({
      jobs: this.state.jobs.filter(x => x._id !== id),
    })
  }
}
