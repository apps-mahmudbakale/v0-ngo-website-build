'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

interface GalleryItem {
  id: number
  title: string
  description: string
  image: string
  category: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Healthcare Access',
    description: 'Providing quality medical consultations and treatment to underserved communities',
    image: '/gallery/healthcare-access.jpg',
    category: 'Healthcare Access',
  },
  {
    id: 2,
    title: 'Community Outreach',
    description: 'Health education and awareness programs to prevent disease and promote wellness',
    image: '/gallery/community-outreach.jpg',
    category: 'Community Outreach',
  },
  {
    id: 3,
    title: 'Medical Equipment',
    description: 'Funding and providing advanced medical equipment to healthcare facilities',
    image: '/gallery/medical-equipment.jpg',
    category: 'Medical Development',
  },
  {
    id: 4,
    title: 'Disease Prevention',
    description: 'Vaccination programs and preventive healthcare initiatives in underserved areas',
    image: '/gallery/disease-prevention.jpg',
    category: 'Disease Prevention',
  },
  {
    id: 5,
    title: 'Facility Development',
    description: 'Building and improving medical facilities and infrastructure in remote communities',
    image: '/gallery/facility-development.jpg',
    category: 'Infrastructure',
  },
  {
    id: 6,
    title: 'Medical Team',
    description: 'Our dedicated healthcare professionals working together for better health outcomes',
    image: '/gallery/medical-team.jpg',
    category: 'Team',
  },
]

const categories = ['All', 'Healthcare Access', 'Community Outreach', 'Medical Development', 'Disease Prevention', 'Infrastructure', 'Team']

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work in Action</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              See the impact we're making in communities around the world through our healthcare initiatives and programs
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 md:py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground mb-6">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-foreground hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 md:h-72 overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                    <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-blue-100">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Image Container */}
            <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Image Info */}
            <div className="bg-card p-6 rounded-b-lg border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-2">{selectedImage.title}</h2>
              <p className="text-muted-foreground mb-4">{selectedImage.description}</p>
              <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-medium">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
