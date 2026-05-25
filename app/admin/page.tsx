'use client'

import { useState } from 'react'
import { Upload, Trash2, Plus } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

interface GalleryItem {
  id: number
  title: string
  description: string
  image: string
  category: string
}

const categories = ['Healthcare Access', 'Community Outreach', 'Medical Development', 'Disease Prevention', 'Infrastructure', 'Team']

export default function AdminPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([
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
  ])

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    category: categories[0],
  })

  const [editingId, setEditingId] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title || !formData.description || !formData.image || !formData.category) {
      alert('Please fill in all fields')
      return
    }

    if (editingId) {
      setGalleryItems(prev =>
        prev.map(item =>
          item.id === editingId
            ? { ...item, ...formData }
            : item
        )
      )
      setEditingId(null)
    } else {
      const newItem: GalleryItem = {
        id: Math.max(...galleryItems.map(i => i.id), 0) + 1,
        ...formData,
      }
      setGalleryItems(prev => [...prev, newItem])
    }

    setFormData({
      title: '',
      description: '',
      image: '',
      category: categories[0],
    })
  }

  const handleEdit = (item: GalleryItem) => {
    setFormData({
      title: item.title,
      description: item.description,
      image: item.image,
      category: item.category,
    })
    setEditingId(item.id)
  }

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this image?')) {
      setGalleryItems(prev => prev.filter(item => item.id !== id))
    }
  }

  const handleCancel = () => {
    setFormData({
      title: '',
      description: '',
      image: '',
      category: categories[0],
    })
    setEditingId(null)
  }

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Admin Header */}
      <section className="bg-primary text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Gallery Admin</h1>
          <p className="text-primary-light mt-2">Manage gallery images and content</p>
        </div>
      </section>

      {/* Admin Content */}
      <section className="flex-1 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-border p-6 sticky top-20">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  {editingId ? 'Edit Image' : 'Add New Image'}
                </h2>

                <form onSubmit={handleAddImage} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Image title"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Image description"
                      rows={3}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Image Path
                    </label>
                    <input
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      placeholder="/gallery/image.jpg"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Upload images to /public/gallery/ and enter the path here
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent-dark transition-colors flex items-center justify-center gap-2"
                    >
                      <Plus size={18} />
                      {editingId ? 'Update' : 'Add'} Image
                    </button>
                    {editingId && (
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="flex-1 px-4 py-2 bg-muted text-foreground rounded-lg font-medium hover:bg-border transition-colors"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Gallery Items List */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-primary mb-6">Gallery Items ({galleryItems.length})</h2>

              <div className="space-y-4">
                {galleryItems.map(item => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg border border-border p-4 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex gap-4">
                      {/* Image Preview */}
                      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                            {item.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{item.image}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 flex-shrink-0">
                        <button
                          onClick={() => handleEdit(item)}
                          className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center gap-2"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {galleryItems.length === 0 && (
                <div className="text-center py-12 bg-muted rounded-lg">
                  <p className="text-muted-foreground">No gallery items yet. Add one to get started!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
