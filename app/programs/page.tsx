import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Our Programs | Prevention is Cheaper Than Cure',
  description: 'Explore our healthcare initiatives, disease prevention programs, and medical development projects.',
}

export default function Programs() {
  const programs = [
    {
      title: 'Rural Healthcare Initiative',
      category: 'Healthcare Access',
      description: 'Bringing quality healthcare services to remote and underserved rural communities through mobile clinics and training local health workers.',
      impact: '15,000+ people reached annually',
      status: 'Active',
    },
    {
      title: 'Disease Prevention Academy',
      category: 'Education',
      description: 'Comprehensive health education programs focusing on disease prevention, nutrition, hygiene, and wellness awareness.',
      impact: '50,000+ trained individuals',
      status: 'Active',
    },
    {
      title: 'Medical Equipment Fund',
      category: 'Infrastructure',
      description: 'Providing essential medical equipment, diagnostic tools, and technology to hospitals and clinics in resource-limited settings.',
      impact: '200+ facilities equipped',
      status: 'Active',
    },
    {
      title: 'Maternal and Child Health Program',
      category: 'Healthcare',
      description: 'Ensuring safe pregnancy, childbirth, and early childhood development through comprehensive maternal and pediatric care programs.',
      impact: '8,000+ mothers supported',
      status: 'Active',
    },
    {
      title: 'Communicable Disease Control',
      category: 'Prevention',
      description: 'Implementing evidence-based programs to prevent and control infectious diseases including vaccination drives and awareness campaigns.',
      impact: '100,000+ vaccinations',
      status: 'Active',
    },
    {
      title: 'Medical Research & Innovation',
      category: 'Research',
      description: 'Funding groundbreaking research projects to develop new prevention strategies and treatment methods for global health challenges.',
      impact: '25+ research projects',
      status: 'Active',
    },
    {
      title: 'Healthcare Worker Training',
      category: 'Capacity Building',
      description: 'Developing skilled healthcare professionals through specialized training and professional development programs in underserved regions.',
      impact: '5,000+ professionals trained',
      status: 'Active',
    },
    {
      title: 'Community Health Centers',
      category: 'Infrastructure',
      description: 'Establishing primary healthcare centers in communities lacking basic medical services, providing preventive and curative care.',
      impact: '50+ centers established',
      status: 'Active',
    },
  ]

  const categoryColors: { [key: string]: string } = {
    'Healthcare Access': 'bg-blue-100 text-blue-800',
    'Education': 'bg-green-100 text-green-800',
    'Infrastructure': 'bg-purple-100 text-purple-800',
    'Healthcare': 'bg-red-100 text-red-800',
    'Prevention': 'bg-yellow-100 text-yellow-800',
    'Research': 'bg-indigo-100 text-indigo-800',
    'Capacity Building': 'bg-pink-100 text-pink-800',
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-lg text-primary-light max-w-2xl">
            Transforming healthcare through strategic, evidence-based programs across the globe
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={categoryColors[program.category]}>
                      {program.category}
                    </Badge>
                    <span className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                      {program.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-accent">
                      Impact: {program.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Program Categories
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center border border-border">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="text-lg font-bold text-primary mb-2">Healthcare Access</h3>
              <p className="text-sm text-muted-foreground">
                Direct medical services and facility improvements
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-border">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-primary mb-2">Education & Training</h3>
              <p className="text-sm text-muted-foreground">
                Knowledge and skill development programs
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-border">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-lg font-bold text-primary mb-2">Research & Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Medical advancement and disease prevention
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-border">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-lg font-bold text-primary mb-2">Community Development</h3>
              <p className="text-sm text-muted-foreground">
                Long-term sustainable health improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
