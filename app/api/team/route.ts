import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // TODO: Connect to Neon database when DATABASE_URL is available
    return NextResponse.json([])
  } catch (error) {
    console.error('Error fetching team members:', error)
    return NextResponse.json(
      { error: 'Database not configured yet' },
      { status: 503 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    // TODO: Connect to Neon database when DATABASE_URL is available
    return NextResponse.json(
      { error: 'Database not configured yet' },
      { status: 503 }
    )
  } catch (error) {
    console.error('Error creating team member:', error)
    return NextResponse.json(
      { error: 'Failed to create team member' },
      { status: 500 }
    )
  }
}
