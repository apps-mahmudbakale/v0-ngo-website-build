import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Our Team | Prevention is Cheaper Than Cure',
  description: 'Meet the dedicated team behind Prevention is Cheaper Than Cure Medical Foundation.',
}

const team = [
  {
    name: 'Dr. Nwokiea Obinna',
    role: 'Executive Director',
    bio: 'With over 10 years in preventive health, he leads the foundation\'s strategic vision and partnerships across Africa and beyond, championing innovative approaches to early detection, health education, and community-centered prevention.',
    image: '/Obinna.jpeg',
  },
  {
    name: 'Dr. Obum',
    role: 'Medical Director',
    bio: 'A specialist in preventive medicine, Dr. Obum oversees all clinical programs and ensures evidence-based approaches across our initiatives.',
    image: '/placeholder-user.jpg',
  },
  {
    name: 'Nrs Nneoma',
    role: 'Secretary / Financial Manager',
    bio: 'Nrs Nneoma ensures transparent financial stewardship and operational efficiency across all our programs worldwide.',
    image: '/placeholder-user.jpg',
  },
  {
    name: 'Miss Chidiogo',
    role: 'Head of Community Outreach',
    bio: 'Miss Chidiogo brings grassroots experience, building trust and lasting relationships with the communities we serve.',
    image: '/placeholder-user.jpg',
  },
  {
    name: 'Dr. Micah Panguru',
    role: 'Project / Research / Innovation Lead',
    bio: 'A medical doctor, public health researcher, and innovation lead passionate about preventive healthcare, global health, and strengthening community health systems in Nigeria and globally.',
    image: '/Micah.jpeg',
  },
  {
    name: 'Dr. Mildred',
    role: 'Director of Partnerships',
    bio: 'Dr. Mildred manages our global network of NGOs, governments, and healthcare institutions to amplify our collective impact.',
    image: '/placeholder-user.jpg',
  },
  {
    name: 'Mahmoud Bakale',
    role: 'IT / Operations Manager',
    bio: 'A technology innovator and IT operations professional with multidisciplinary experience in software development, infrastructure management, networking, and digital operations. Mahmoud specializes in building scalable web platforms with Next.js, React, TypeScript, and Laravel while also driving operational efficiency through technology strategy, systems integration, and infrastructure planning. His work spans healthcare technology, business development support, and emerging data center and networking solutions focused on scalability, reliability, and long-term digital growth.',
    image: '/placeholder-user.jpg',
  },
]

export default function Team() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-lg text-primary-light max-w-2xl">
            Meet the passionate people driving our mission to make healthcare accessible for all
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="h-80 bg-muted relative overflow-hidden flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                  <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm text-justify leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Want to Join Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            We&apos;re always looking for dedicated individuals who share our passion for global health equity.
          </p>
          <a
            href="/get-involved"
            className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-colors"
          >
            Get Involved
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
