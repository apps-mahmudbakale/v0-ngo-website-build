import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'About Us | Prevention is Cheaper Than Cure',
  description: 'Learn about our mission, values, and commitment to global healthcare access and disease prevention.',
}

export default function About() {
  const values = [
    {
      title: 'Compassion',
      description: 'We are driven by empathy and genuine care for every individual we serve',
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in all our medical initiatives and programs',
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency and ethical principles in all our operations',
    },
    {
      title: 'Innovation',
      description: 'We embrace modern approaches to solve healthcare challenges effectively',
    },
    {
      title: 'Inclusivity',
      description: 'We serve all communities regardless of background, geography, or socioeconomic status',
    },
    {
      title: 'Sustainability',
      description: 'We build long-term solutions that create lasting impact on global health',
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-primary-light max-w-2xl">
            Understanding our mission, values, and commitment to transforming global healthcare
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Prevention is Cheaper Than Cure Medical Foundation is a non-profit, non-political organization dedicated to transforming global healthcare through innovative prevention strategies and accessible medical services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that every individual, regardless of their circumstances, deserves access to quality healthcare and the knowledge to prevent disease. Through strategic partnerships, community engagement, and dedicated support, we&apos;re building a healthier world.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Non-profit, non-political organization</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Global reach across 50+ countries</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Focus on underserved communities</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Evidence-based healthcare initiatives</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Transparent financial reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Core Objectives
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Healthcare Access</h3>
              <p className="text-muted-foreground leading-relaxed">
                To facilitate increased access to quality healthcare services for underserved and vulnerable populations, both locally and globally.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Medical Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                To fund and support medical development initiatives aimed at advancing health care, treatment and disease prevention.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Community Engagement</h3>
              <p className="text-muted-foreground leading-relaxed">
                To engage in community outreach programs with the goal of addressing public health issues, promoting health awareness and preventing disease.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Infrastructure Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                To support the development and improvement of medical facilities, equipment and technology in underserved areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-white rounded-lg border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
