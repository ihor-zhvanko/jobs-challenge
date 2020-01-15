import React, { PureComponent } from 'react'

import { Field } from 'formik'
import Input from '../Input'

import './InputList.css'

export default class InputList extends PureComponent {
  render() {
    return (
      <div className="input-block">
        <header>
          <h6>{this.props.title}</h6>
          <button className="item-btn" type="button" onClick={this._onAddClick}>
            +
          </button>
        </header>

        {this.list.length > 0 && this.list.map(this._renderListItem)}
      </div>
    )
  }

  _renderListItem = (listItem, index) => {
    return (
      <div className="input-list-item" key={index}>
        <Field
          type="text"
          name={`${this.props.name}.${index}`}
          placeholder={this.props.placeholder}
          component={Input}
        />
        {index > 0 && (
          <button className="item-btn red" type="button" onClick={this._makeOnRemoveClick(index)}>
            -
          </button>
        )}
      </div>
    )
  }

  _makeOnRemoveClick = index => () => {
    this.props.remove(index)
  }

  _onAddClick = () => {
    this.props.push('')
  }

  get errors() {
    const name = this.props.field.name

    if (this.props.form.touched[name] && this.props.form.errors[name]) {
      return this.props.form.errors[name]
    }

    return null
  }

  get list() {
    return this.props.form.values[this.props.name] || []
  }
}
