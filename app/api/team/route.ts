import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const teamMembers = await prisma.teamMember.findMany({
      orderBy: { createdAt: 'asc' },
    })
    return NextResponse.json(teamMembers)
  } catch (error) {
    console.error('Error fetching team members:', error)
    return NextResponse.json(
      { error: 'Failed to fetch team members' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, role, bio, image } = body

    if (!name || !role || !bio || !image) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const teamMember = await prisma.teamMember.create({
      data: {
        name,
        role,
        bio,
        image,
      },
    })

    return NextResponse.json(teamMember, { status: 201 })
  } catch (error) {
    console.error('Error creating team member:', error)
    return NextResponse.json(
      { error: 'Failed to create team member' },
      { status: 500 }
    )
  }
}
