import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useCopyToClipboard } from '../animations/hooks'

export default function Contact() {
  const { copied, copy } = useCopyToClipboard()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const formRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const formData = new FormData(formRef.current)
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })

      if (response.ok) {
        setSuccess(true)
        formRef.current.reset()
        setTimeout(() => setSuccess(false), 4000)
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch (err) {
      console.error('Error sending message:', err)
      setError('Error sending message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-4 text-text-secondary">Feel free to reach out — I respond quickly.</p>

          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="text-sm font-medium">Email:</div>
              <div className="text-text-secondary">kalyanram2053@gmail.com</div>
              <button className="ml-3 text-sm text-accent-cyan" onClick={() => copy('kalyanram2053@gmail.com')}>{copied ? 'Copied' : 'Copy'}</button>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-sm font-medium">Phone:</div>
              <div className="text-text-secondary">+91 9652741773</div>
              <button className="ml-3 text-sm text-accent-cyan" onClick={() => copy('+91 9652741773')}>{copied ? 'Copied' : 'Copy'}</button>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} name="contact" method="POST" netlify className="bg-card-bg p-6 rounded-lg glass">
          <input type="hidden" name="form-name" value="contact" />
          
          {success && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-md text-green-400 text-sm"
            >
              ✓ Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-md text-red-400 text-sm"
            >
              ✕ {error}
            </motion.div>
          )}

          <label className="block">
            <div className="text-sm text-text-secondary">Name</div>
            <input 
              required 
              name="name"
              placeholder="Your name"
              className="mt-1 w-full p-3 bg-transparent border border-border-color rounded-md focus:outline-none focus:ring-2 focus:ring-accent-cyan" 
            />
          </label>

          <label className="block mt-4">
            <div className="text-sm text-text-secondary">Email</div>
            <input 
              required 
              type="email" 
              name="email"
              placeholder="your@email.com"
              className="mt-1 w-full p-3 bg-transparent border border-border-color rounded-md focus:outline-none focus:ring-2 focus:ring-accent-cyan" 
            />
          </label>

          <label className="block mt-4">
            <div className="text-sm text-text-secondary">Message</div>
            <textarea 
              required 
              name="message"
              rows={5}
              placeholder="Your message here..."
              className="mt-1 w-full p-3 bg-transparent border border-border-color rounded-md focus:outline-none focus:ring-2 focus:ring-accent-cyan" 
            />
          </label>

          <div className="mt-4">
            <motion.button 
              whileTap={{ scale: 0.98 }} 
              disabled={loading}
              className="px-5 py-3 bg-accent-cyan rounded-md text-black font-medium disabled:opacity-60" 
              type="submit"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  )
}
