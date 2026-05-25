import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const galleryItems = await prisma.galleryItem.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(galleryItems)
  } catch (error) {
    console.error('Error fetching gallery items:', error)
    return NextResponse.json(
      { error: 'Failed to fetch gallery items' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, image, category } = body

    if (!title || !description || !image || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const galleryItem = await prisma.galleryItem.create({
      data: {
        title,
        description,
        image,
        category,
      },
    })

    return NextResponse.json(galleryItem, { status: 201 })
  } catch (error) {
    console.error('Error creating gallery item:', error)
    return NextResponse.json(
      { error: 'Failed to create gallery item' },
      { status: 500 }
    )
  }
}
