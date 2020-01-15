import React, { PureComponent } from 'react'

import { Formik, Field, Form, FieldArray } from 'formik'
import * as Yup from 'yup'

import './JobForm.css'

import Input from '../Input'
import Select from '../Select'
import InputList from '../InputList'

import citiesMock from '../../../data/cities-mock'

export const Fields = Object.freeze({
  TITLE: 'title',
  CITY: 'city',
  EMPLOYER: 'employer',
  TASKS: 'tasks',
  REQUIREMENTS: 'requirements',
})

const Schema = Yup.object().shape({
  [Fields.TITLE]: Yup.string()
    .min(4, 'Title has to be at least 4 characters long')
    .required('Required'),
  [Fields.CITY]: Yup.string()
    .oneOf(citiesMock, 'Developer made a mistake ;)')
    .required('Required'),
  [Fields.EMPLOYER]: Yup.string()
    .min(2, 'Employer has to be at least 4 characters long')
    .required('Required'),
  [Fields.TASKS]: Yup.array(
    Yup.string()
      .min(1, 'Required')
      .required('Required'),
  )
    .min(1, 'At least one task is required.')
    .required('Required'),
  [Fields.REQUIREMENTS]: Yup.array(
    Yup.string()
      .min(1, 'Required')
      .required('Required'),
  )
    .min(1, 'At least one requirement is required.')
    .required('Required'),
})

export default class JobForm extends PureComponent {
  render() {
    return (
      <Formik
        initialValues={this.props.initialValues}
        validationSchema={Schema}
        onSubmit={this._onSubmit}
        render={this._renderForm}
      >
        {this._renderForm}
      </Formik>
    )
  }

  _renderForm = formikProps => {
    return (
      <Form className="jobs-form">
        <Field
          title={'TITLE'}
          type="text"
          name={Fields.TITLE}
          placeholder="Title"
          component={Input}
        />

        <Field
          title={'CITY'}
          options={citiesMock}
          type="text"
          name={Fields.CITY}
          placeholder="City"
          component={Select}
        />

        <Field
          title={'EMPLOYER'}
          type="text"
          name={Fields.EMPLOYER}
          placeholder="Employer"
          component={Input}
        />

        <FieldArray name={Fields.TASKS} render={this._renderTasks} />

        <FieldArray name={Fields.REQUIREMENTS} render={this._renderRequirements} />

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </Form>
    )
  }

  _renderTasks = props => <InputList title={'TASKS?'} placeholder="Task" {...props} />

  _renderRequirements = props => (
    <InputList title={'REQUIREMENTS?'} placeholder="Requirement" {...props} />
  )

  _onSubmit = (values, { setSubmitting }) => {
    this.props.onSubmit && this.props.onSubmit(values)
  }
}
