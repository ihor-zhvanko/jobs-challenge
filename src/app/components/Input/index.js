import React, { PureComponent } from 'react'

import './Input.css'

export default class Input extends PureComponent {
  render() {
    const { field } = this.props

    return (
      <div className={'input-block ' + (this.isError() ? 'error' : '')}>
        <h6>{this.props.title}</h6>
        <input {...field} placeholder={this.props.placeholder} type={this.props.type} />
        <div className="input-error">{this.error}</div>
      </div>
    )
  }

  get error() {
    const name = this.props.field.name

    if (name.includes('.')) {
      const parts = name.split('.')
      const fName = parts[0],
        index = parts[1]

      if (
        this.props.form.touched[fName] &&
        this.props.form.touched[fName][index] &&
        this.props.form.errors[fName] &&
        this.props.form.errors[fName][index]
      ) {
        return this.props.form.errors[fName][index]
      }

      return <span>&nbsp;</span>
    }

    if (this.props.form.touched[name] && this.props.form.errors[name]) {
      return this.props.form.errors[name]
    }

    return <span>&nbsp;</span>
  }

  isError() {
    const name = this.props.field.name

    if (name.includes('.')) {
      const parts = name.split('.')
      const fName = parts[0],
        index = parts[1]

      if (
        this.props.form.touched[fName] &&
        this.props.form.touched[fName][index] &&
        this.props.form.errors[fName] &&
        this.props.form.errors[fName][index]
      ) {
        return !!this.props.form.errors[fName][index]
      }

      return false
    }

    if (this.props.form.touched[name] && this.props.form.errors[name]) {
      return !!this.props.form.errors[name]
    }

    return false
  }
}
