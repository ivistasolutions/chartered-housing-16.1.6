"use client"

import { useState } from "react"

// Custom Hook For Form Submission Logic

const defaultFormData = {
  purpose: "",
  name: "",
  email: "",
  mobile: "",
  message: "",
  consent: false,
}

// Perfect mobile number validation function
const validateMobileNumber = (mobile) => {
  if (!mobile || !mobile.trim()) {
    return 'Mobile number is required'
  }

  // Clean the mobile number - remove all non-digit characters except +
  let cleanMobile = mobile.replace(/[^\d+]/g, '')
  
  // Remove leading + if present for validation
  const hasCountryCode = cleanMobile.startsWith('+')
  if (hasCountryCode) {
    cleanMobile = cleanMobile.substring(1)
  }

  // Check if it's all digits
  if (!/^\d+$/.test(cleanMobile)) {
    return 'Mobile number should contain only digits'
  }

  // Length validation for different scenarios
  const length = cleanMobile.length
  
  // Indian mobile numbers (10 digits)
  if (length === 10) {
    // Check if it starts with valid Indian mobile prefixes
    const firstDigit = cleanMobile[0]
    if (!['6', '7', '8', '9'].includes(firstDigit)) {
      return 'Invalid Indian mobile number format'
    }
    return null // Valid Indian number
  }
  
  // International numbers with country code (10-15 digits)
  if (length >= 10 && length <= 15) {
    return null // Valid international number
  }
  
  // Too short
  if (length < 10) {
    return 'Mobile number must be at least 10 digits'
  }
  
  // Too long
  if (length > 15) {
    return 'Mobile number cannot exceed 15 digits'
  }

  return 'Please enter a valid mobile number'
}

export const useFormHandler = (formId) => {
  const [formData, setFormData] = useState(defaultFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  const [fieldErrors, setFieldErrors] = useState({})

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    // Clear error when user starts typing
    if (fieldErrors[e.target.name]) {
      setFieldErrors(prev => ({
        ...prev,
        [e.target.name]: null
      }))
    }
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user makes selection
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: null
      }))
    }
  }

  const validateField = (name, value) => {
    let error = null
    switch (name) {
      case 'name':
        if (!value || !value.trim()) {
          error = 'Name is required'
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters'
        }
        break
      case 'email':
        if (!value || !value.trim()) {
          error = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address'
        }
        break
      case 'mobile':
        error = validateMobileNumber(value)
        break
      case 'purpose':
        if (!value || !value.trim()) {
          error = 'Please select a property'
        }
        break
      case 'message':
        // Make message optional - only validate if provided
        if (value && value.trim() && value.trim().length < 10) {
          error = 'Message must be at least 10 characters'
        }
        break
      case 'consent':
        if (!value) {
          error = 'You must agree to the terms and conditions'
        }
        break
      default:
        break
    }
    return error
  }

  const validateAllFields = () => {
    const errors = {}
    let hasError = false
    
    // Validate all fields
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field])
      if (error) {
        errors[field] = error
        hasError = true
      }
    })
    
    setFieldErrors(errors)
    return !hasError // Return true if NO errors (form is valid)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submission started', formData)

    if (!validateAllFields()) {
      console.log('Validation failed', fieldErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const cleanMobile = formData.mobile.replace(/[^\d+]/g, '')

      const cf7Data = new FormData()
      cf7Data.append('name', formData.name)
      cf7Data.append('email', formData.email)
      cf7Data.append('mobile', cleanMobile)
      cf7Data.append('purpose', formData.purpose)
      cf7Data.append('message', formData.message || 'No message provided')
      cf7Data.append('consent', formData.consent ? 'Yes' : 'No')

      console.log('Submitting form data:', formData)

      const response = await fetch(
        `https://docs.ivistaz.com/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`,
        {
          method: 'POST',
          body: cf7Data,
        }
      )

      console.log('Response status:', response.status)
      const result = await response.json()
      console.log('Response result:', result)

      if (response.ok && result.status === 'mail_sent') {
        setSubmitStatus('success')
        setFormData(defaultFormData)
        setFieldErrors({})
      } else {
        setSubmitStatus('error')
        console.error('Form submission error:', result)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Network error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }


  const resetForm = () => {
    setFormData(defaultFormData)
    setSubmitStatus(null)
    setFieldErrors({})
  }

  return {
    formData,
    setFormData,
    handleChange,
    handleSelectChange,
    handleSubmit,
    isSubmitting,
    submitStatus,
    fieldErrors,
    validateField,
    validateAllFields,
    resetForm,
    formId,
  }
}
