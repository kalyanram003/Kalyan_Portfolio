import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useCopyToClipboard } from '../animations/hooks'

export default function Contact() {
  const { copied, copy } = useCopyToClipboard()
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 900)
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

        <form onSubmit={handleSubmit} className="bg-card-bg p-6 rounded-lg glass">
          <label className="block">
            <div className="text-sm text-text-secondary">Name</div>
            <input required className="mt-1 w-full p-3 bg-transparent border border-border-color rounded-md focus:outline-none focus:ring-2 focus:ring-accent-cyan" />
          </label>

          <label className="block mt-4">
            <div className="text-sm text-text-secondary">Email</div>
            <input required type="email" className="mt-1 w-full p-3 bg-transparent border border-border-color rounded-md focus:outline-none focus:ring-2 focus:ring-accent-cyan" />
          </label>

          <label className="block mt-4">
            <div className="text-sm text-text-secondary">Message</div>
            <textarea required rows={5} className="mt-1 w-full p-3 bg-transparent border border-border-color rounded-md focus:outline-none focus:ring-2 focus:ring-accent-cyan" />
          </label>

          <div className="mt-4">
            <motion.button whileTap={{ scale: 0.98 }} className="px-5 py-3 bg-accent-cyan rounded-md text-black" type="submit">{loading ? 'Sending...' : 'Send Message'}</motion.button>
          </div>
        </form>
      </div>
    </section>
  )
}
