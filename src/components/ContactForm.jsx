import React, { useState } from 'react'
import { LuSend } from 'react-icons/lu'

// Reusable input component for cleaner JSX
const InputField = ({ id, name, type = 'text', placeholder, value, onChange, error }) => (
  <div className="w-full">
    <label htmlFor={id} className="sr-only">{placeholder}</label>
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full py-3 px-3 rounded-lg bg-slate-100 shadow outline-none transition-all focus:ring-2 
        ${error ? 'ring-2 ring-red-400' : 'focus:ring-blue-500'}`}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
    />
    {error && (
      <p id={`${id}-error`} className="text-red-500 text-sm mt-1 ml-1">
        {error}
      </p>
    )}
  </div>
)

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulated API call
      console.log('Form submitted:', formData)

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      className="w-full flex flex-col gap-6 bg-white p-6 md:p-9 rounded-xl shadow-lg"
      onSubmit={handleSubmit}
      noValidate
    >
      <p className="text-2xl font-bold text-gray-800">Send a Message</p>

      {/* Name and Email */}
      <div className="flex flex-col md:flex-row gap-4">
        <InputField id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} error={errors.name} />
        <InputField id="email" name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} error={errors.email} />
      </div>

      {/* Subject */}
      <InputField id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} error={errors.subject} />

      {/* Message */}
      <div>
        <label htmlFor="message" className="sr-only">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full h-32 p-3 rounded-lg bg-slate-100 shadow outline-none transition-all focus:ring-2 
            ${errors.message ? 'ring-2 ring-red-400' : 'focus:ring-blue-500'}`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-sm mt-1 ml-1">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 flex items-center justify-center gap-2 text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            Sending...
          </>
        ) : (
          <>
            <LuSend size={17} className="relative top-[1px]" />
            Send Message
          </>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-3 bg-green-100 text-green-700 rounded-lg">Message sent successfully!</div>
      )}
      {submitStatus === 'error' && (
        <div className="p-3 bg-red-100 text-red-700 rounded-lg">There was an error sending your message. Please try again.</div>
      )}
    </form>
  )
}

export default ContactForm