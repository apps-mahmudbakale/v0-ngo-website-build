import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Heart, Globe, Users, Microscope } from 'lucide-react'

export default function Home() {
  const objectives = [
    {
      icon: Heart,
      title: 'Healthcare Access',
      description: 'Facilitate increased access to quality healthcare services for underserved and vulnerable populations',
    },
    {
      icon: Microscope,
      title: 'Medical Innovation',
      description: 'Fund and support medical development initiatives aimed at advancing healthcare and disease prevention',
    },
    {
      icon: Users,
      title: 'Community Outreach',
      description: 'Engage in community programs addressing public health issues and promoting health awareness',
    },
    {
      icon: Globe,
      title: 'Infrastructure Support',
      description: 'Support development and improvement of medical facilities, equipment and technology in underserved areas',
    },
  ]

  const impactMetrics = [
    { number: '50+', label: 'Countries Reached' },
    { number: '100K+', label: 'Lives Impacted' },
    { number: '200+', label: 'Healthcare Programs' },
    { number: '$50M+', label: 'Invested in Healthcare' },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-accent font-semibold text-sm">Our Mission</span>
                <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                  Prevention is Cheaper Than Cure
                </h1>
              </div>
              <p className="text-lg text-muted-foreground">
                A non-profit, non-political medical foundation dedicated to improving healthcare access, 
                supporting medical innovation, and promoting disease prevention across the globe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/get-involved"
                  className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-colors text-center"
                >
                  Get Involved
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/hero-image.jpg"
                alt="Healthcare professionals providing compassionate care"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Objectives
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;re committed to creating lasting change in global healthcare through focused initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => {
              const Icon = objective.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {objective.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Global Impact
            </h2>
            <p className="text-lg text-primary-light max-w-2xl mx-auto">
              Together, we&apos;re making a measurable difference in healthcare worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {metric.number}
                </div>
                <p className="text-primary-light text-lg">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Join Our Mission
                </h2>
                <p className="text-primary-light text-lg">
                  Help us provide healthcare to those who need it most
                </p>
              </div>
              <div className="flex gap-4 flex-col sm:flex-row w-full md:w-auto">
                <Link
                  href="/get-involved#donate"
                  className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-colors text-center"
                >
                  Donate Today
                </Link>
                <Link
                  href="/get-involved#volunteer"
                  className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-primary-light hover:text-white transition-colors text-center"
                >
                  Volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
