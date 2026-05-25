import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    const galleryItem = await prisma.galleryItem.findUnique({
      where: { id },
    })

    if (!galleryItem) {
      return NextResponse.json(
        { error: 'Gallery item not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(galleryItem)
  } catch (error) {
    console.error('Error fetching gallery item:', error)
    return NextResponse.json(
      { error: 'Failed to fetch gallery item' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    const body = await request.json()
    const { title, description, image, category } = body

    const galleryItem = await prisma.galleryItem.update({
      where: { id },
      data: {
        title,
        description,
        image,
        category,
      },
    })

    return NextResponse.json(galleryItem)
  } catch (error) {
    console.error('Error updating gallery item:', error)
    return NextResponse.json(
      { error: 'Failed to update gallery item' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    await prisma.galleryItem.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting gallery item:', error)
    return NextResponse.json(
      { error: 'Failed to delete gallery item' },
      { status: 500 }
    )
  }
}
