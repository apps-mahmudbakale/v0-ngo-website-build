'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'preventioncheaperthancure@gmail.com, info@cheaperthancure.org',
      subtext: 'General inquiries',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+2347064951002',
      subtext: 'Mon-Fri, 9 AM - 6 PM',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '25 Yakubu Gowon Crescent',
      subtext: 'Asokoro, FCT, Abuja-Nigeria',
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: '24-48 hours',
      subtext: 'Average response time',
    },
  ]

  const departments = []

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-primary-light max-w-2xl">
            We&apos;d love to hear from you. Reach out with questions, partnership opportunities, or support inquiries.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="bg-white rounded-lg p-6 border border-border text-center">
                  <Icon className="text-primary mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-primary mb-1">{info.title}</h3>
                  <p className="font-semibold text-foreground mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subtext}</p>
                </div>
              )
            })}
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg border border-border p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">Thank you! We&apos;ve received your message and will respond shortly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="donation">Donation Inquiry</option>
                        <option value="volunteer">Volunteer Opportunity</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="program">Program Information</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      required
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Department Contacts */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Department Contacts</h2>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="bg-white rounded-lg border border-border p-6">
                    <h3 className="font-bold text-primary mb-1">{dept.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{dept.description}</p>
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-accent font-semibold text-sm hover:text-accent-dark transition"
                    >
                      {dept.email}
                    </a>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 p-6 bg-primary text-white rounded-lg">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <a href="#" className="text-primary-light hover:text-white transition">
                      Facebook
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-primary-light hover:text-white transition">
                      Twitter
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-primary-light hover:text-white transition">
                      LinkedIn
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-primary-light hover:text-white transition">
                      Instagram
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
