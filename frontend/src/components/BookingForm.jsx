import { useEffect, useRef, useState } from 'react'
import Button from './Button'

const EVENT_TYPES = ['Conference', 'Workshop', 'Summit', 'Community program', 'Other']

const initialValues = {
  name: '',
  email: '',
  organization: '',
  eventType: '',
  message: '',
}

function validate(values) {
  const errors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const message = values.message.trim()

  if (!name) errors.name = 'Please enter your name.'
  else if (name.length < 2) errors.name = 'Name must be at least 2 characters.'

  if (!email) errors.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.'

  if (!values.eventType) errors.eventType = 'Select the type of event you are planning.'

  if (!message) errors.message = 'Please describe what you need.'
  else if (message.length < 20) errors.message = 'Tell us a bit more (at least 20 characters).'

  return errors
}

function BookingForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const submitTimerRef = useRef(null)

  useEffect(() => {
    return () => window.clearTimeout(submitTimerRef.current)
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current }
        delete next[name]
        return next
      })
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      const firstField = event.target.elements[Object.keys(nextErrors)[0]]
      firstField?.focus()
      return
    }

    setStatus('submitting')
    submitTimerRef.current = window.setTimeout(() => {
      setErrors({})
      setValues(initialValues)
      setStatus('success')
    }, 700)
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-lime-200 bg-lime-50 px-6 py-8 text-slate-900" role="status">
        <h3 className="font-display text-xl font-bold">Request received</h3>
        <p className="mt-2 text-slate-600">
          Thanks for getting in touch. Our team will reply within two business days with speaker options and next steps.
        </p>
        <Button className="mt-6" type="button" onClick={() => setStatus('idle')}>
          Send another request
        </Button>
      </div>
    )
  }

  return (
    <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8" noValidate onSubmit={handleSubmit}>
      {Object.keys(errors).length > 0 && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          Please fix the highlighted fields before sending your request.
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="booking-name"
          label="Full name"
          name="name"
          value={values.name}
          error={errors.name}
          onChange={handleChange}
          autoComplete="name"
        />
        <Field
          id="booking-email"
          label="Email"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <Field
          id="booking-organization"
          label="Organization"
          name="organization"
          value={values.organization}
          onChange={handleChange}
          autoComplete="organization"
          optional
        />
        <div>
          <label className="text-sm font-semibold text-slate-700" htmlFor="booking-event-type">
            Event type
          </label>
          <select
            id="booking-event-type"
            className={inputClass(errors.eventType)}
            name="eventType"
            value={values.eventType}
            aria-invalid={Boolean(errors.eventType)}
            aria-required="true"
            aria-describedby={errors.eventType ? 'booking-event-type-error' : undefined}
            onChange={handleChange}
          >
            <option value="">Select an event type</option>
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.eventType && (
            <p className="mt-1 text-sm text-red-600" id="booking-event-type-error">{errors.eventType}</p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label className="text-sm font-semibold text-slate-700" htmlFor="booking-message">
          What do you need?
        </label>
        <textarea
          id="booking-message"
          className={`${inputClass(errors.message)} min-h-32`}
          name="message"
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-required="true"
          aria-describedby={errors.message ? 'booking-message-error' : undefined}
          placeholder="Event date, audience size, topic, and any speaker preferences."
          onChange={handleChange}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600" id="booking-message-error">{errors.message}</p>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button disabled={status === 'submitting'} type="submit">
          {status === 'submitting' ? 'Sending request...' : 'Send booking request'}
        </Button>
        <p className="text-sm text-slate-500">We typically reply within two business days.</p>
      </div>
    </form>
  )
}

function Field({ id, label, name, type = 'text', value, error, onChange, autoComplete, optional = false }) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-700" htmlFor={id}>
        {label} {optional && <span className="font-normal text-slate-400">(optional)</span>}
      </label>
      <input
        id={id}
        className={inputClass(error)}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-required={!optional}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={onChange}
      />
      {error && <p className="mt-1 text-sm text-red-600" id={`${id}-error`}>{error}</p>}
    </div>
  )
}

function inputClass(error) {
  return `mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition ${
    error ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
  }`
}

export default BookingForm
