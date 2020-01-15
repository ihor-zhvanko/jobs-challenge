import React, { PureComponent } from 'react'

import './Select.css'

export default class Select extends PureComponent {
  render() {
    const { field } = this.props

    return (
      <div className={'input-block ' + (this.isError() ? 'error' : '')}>
        <h6>{this.props.title}</h6>
        <select {...field} placeholder={this.props.placeholder}>
          <option value=""></option>
          {this.props.options.map(x => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>

        <div className="input-error">{this.error}</div>
      </div>
    )
  }

  get error() {
    const name = this.props.field.name

    if (this.props.form.touched[name] && this.props.form.errors[name]) {
      return this.props.form.errors[name]
    }

    return <span>&nbsp;</span>
  }
  isError() {
    const name = this.props.field.name

    if (this.props.form.touched[name] && this.props.form.errors[name]) {
      return !!this.props.form.errors[name]
    }

    return false
  }
}
