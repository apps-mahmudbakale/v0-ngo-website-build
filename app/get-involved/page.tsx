'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Heart, Users, Gift, Briefcase } from 'lucide-react'
import { useState } from 'react'

export default function GetInvolved() {
  const [selectedTab, setSelectedTab] = useState('donate')

  const ways = [
    {
      id: 'donate',
      icon: Heart,
      title: 'Donate',
      description: 'Make a financial contribution to support our healthcare initiatives',
      details: [
        'One-time donations to specific programs',
        'Monthly recurring donations for sustained impact',
        'Donate in honor of a loved one',
        'Corporate matching programs available',
        'Tax-deductible for eligible donors',
      ],
    },
    {
      id: 'volunteer',
      icon: Users,
      title: 'Volunteer',
      description: 'Share your time and expertise to make a direct impact',
      details: [
        'Medical professionals - provide clinical services',
        'Administrative support - help organize programs',
        'Community outreach - engage with local communities',
        'Virtual volunteering - remote opportunities available',
        'Flexible schedules - short-term to long-term',
      ],
    },
    {
      id: 'sponsor',
      icon: Gift,
      title: 'Sponsor a Program',
      description: 'Support specific healthcare initiatives and see direct impact',
      details: [
        'Mobile clinic sponsorship - $10,000',
        'Healthcare worker training - $5,000',
        'Medical equipment fund - $15,000',
        'Community health center - $25,000',
        'Full program sponsorship - custom amounts',
      ],
    },
    {
      id: 'partner',
      icon: Briefcase,
      title: 'Corporate Partnership',
      description: 'Partner with us for mutual impact and corporate social responsibility',
      details: [
        'Employee volunteer programs',
        'Cause marketing collaborations',
        'In-kind donations of medical supplies',
        'Research and development partnerships',
        'Custom CSR initiatives aligned with your goals',
      ],
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-lg text-primary-light max-w-2xl">
            Join us in our mission to transform healthcare access and prevent disease globally
          </p>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {ways.map((way) => {
              const Icon = way.icon
              return (
                <button
                  key={way.id}
                  onClick={() => setSelectedTab(way.id)}
                  className={`p-6 rounded-lg text-left transition-all ${
                    selectedTab === way.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white border border-border text-foreground hover:shadow-lg'
                  }`}
                >
                  <Icon className={`mb-3 ${selectedTab === way.id ? 'text-accent' : 'text-primary'}`} size={28} />
                  <h3 className="font-bold text-lg mb-1">{way.title}</h3>
                  <p className={`text-sm ${selectedTab === way.id ? 'text-primary-light' : 'text-muted-foreground'}`}>
                    {way.description}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Selected Tab Details */}
          <div className="bg-muted rounded-lg p-8">
            {ways.map((way) => {
              if (selectedTab !== way.id) return null
              return (
                <div key={way.id}>
                  <h2 className="text-3xl font-bold text-primary mb-6">{way.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8">{way.description}</p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-lg text-primary mb-4">How It Works</h3>
                      <ul className="space-y-3">
                        {way.details.map((detail, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="text-accent font-bold flex-shrink-0">✓</span>
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-8 border border-border">
                      <h3 className="font-bold text-lg text-primary mb-4">Get Started</h3>
                      <p className="text-muted-foreground mb-6">
                        Ready to make a difference? We&apos;ll guide you through the process and answer any questions.
                      </p>
                      <Button className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3">
                        {way.id === 'donate' && 'Donate Now'}
                        {way.id === 'volunteer' && 'Volunteer Now'}
                        {way.id === 'sponsor' && 'Sponsor a Program'}
                        {way.id === 'partner' && 'Explore Partnership'}
                      </Button>
                      <p className="text-xs text-muted-foreground mt-4 text-center">
                        Or email us at partnerships@picc.org
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Your Impact Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-accent mb-3">$100</div>
              <p className="text-muted-foreground leading-relaxed">
                Provides health screening for 50 people in rural communities
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-accent mb-3">$500</div>
              <p className="text-muted-foreground leading-relaxed">
                Trains one healthcare worker in disease prevention and community health
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-accent mb-3">$5,000</div>
              <p className="text-muted-foreground leading-relaxed">
                Establishes a mobile clinic serving an entire remote region
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-primary-light mb-8">
            Subscribe to our newsletter for updates on programs, impact stories, and ways to contribute
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent text-white rounded-lg font-bold hover:bg-accent-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
