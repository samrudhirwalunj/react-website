import { db } from "@/lib/db"

// GET posts
export async function GET() {
  const [rows] = await db.execute("SELECT * FROM posts")
  return Response.json(rows)
}

// ADD post
export async function POST(req) {
  const { title, content } = await req.json()

  await db.execute(
    "INSERT INTO posts (title, content) VALUES (?, ?)",
    [title, content]
  )

  return Response.json({ message: "Post created" })
}