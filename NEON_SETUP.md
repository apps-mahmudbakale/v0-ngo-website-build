# Neon Database Setup Guide

This project uses Neon as the PostgreSQL database provider with Prisma ORM.

## Setup Steps

### 1. Create a Neon Account and Database

1. Go to [neon.tech](https://neon.tech) and sign up for a free account
2. Create a new project
3. Create a new database (or use the default `neondb`)
4. Copy your connection string

### 2. Configure Environment Variables

1. Open `.env.local` in the project root
2. Replace the `DATABASE_URL` with your Neon connection string:
   ```
   DATABASE_URL="postgresql://user:password@ep-xxxxx.us-east-1.neon.tech/neondb?sslmode=require"
   ```

### 3. Initialize the Database

Run the Prisma migration to create tables:

```bash
npx prisma migrate dev --name init
```

This will:
- Create the database schema
- Generate Prisma Client
- Create a migration file

### 4. Seed the Database (Optional)

To populate initial data, you can create a seed script. For now, you can add data through the admin panel.

## Database Schema

The project includes two main models:

### GalleryItem
- `id` - Unique identifier
- `title` - Image title
- `description` - Image description
- `image` - Image path/URL
- `category` - Gallery category
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

### TeamMember
- `id` - Unique identifier
- `name` - Team member name
- `role` - Job role/title
- `bio` - Biography
- `image` - Profile image path/URL
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

## API Endpoints

### Gallery
- `GET /api/gallery` - Get all gallery items
- `POST /api/gallery` - Create a new gallery item
- `GET /api/gallery/[id]` - Get a specific gallery item
- `PUT /api/gallery/[id]` - Update a gallery item
- `DELETE /api/gallery/[id]` - Delete a gallery item

### Team
- `GET /api/team` - Get all team members
- `POST /api/team` - Create a new team member
- `GET /api/team/[id]` - Get a specific team member
- `PUT /api/team/[id]` - Update a team member
- `DELETE /api/team/[id]` - Delete a team member

## Useful Commands

```bash
# Generate Prisma Client
npx prisma generate

# Open Prisma Studio (GUI for database)
npx prisma studio

# Create a new migration
npx prisma migrate dev --name migration_name

# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# View database schema
npx prisma db push
```

## Troubleshooting

### Connection Issues
- Ensure your Neon connection string is correct
- Check that your IP is whitelisted in Neon (usually automatic)
- Verify `sslmode=require` is in your connection string

### Migration Issues
- If migrations fail, check the error message in the terminal
- You can manually fix the schema and run `npx prisma migrate resolve`

### Prisma Client Issues
- Run `npx prisma generate` to regenerate the client
- Clear `.next` folder and rebuild: `npm run build`

## Next Steps

1. Update the admin panel to use the API endpoints instead of local state
2. Add authentication to protect the admin panel
3. Implement image upload functionality
4. Add more models as needed (e.g., Blog posts, Events, etc.)
