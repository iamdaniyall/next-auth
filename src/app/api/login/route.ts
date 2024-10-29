// pages/api/login/route.ts

import { verifyPassword } from "@/lib/bcrypt";
import db from "@/lib/prisma";
// import { getToken } from "next-auth/jwt"; // Import getToken for managing JWT tokens
import { NextResponse } from "next/server";
// import NextAuth from "next-auth";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Check if user exists
  const user = await db.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ success: false, message: "User does not exist" }, { status: 400 });
  }

  // Validate password using verifyPassword from bcrypt lib
  const isPasswordValid = await verifyPassword(password, (user.password ?? ""));
  if (!isPasswordValid) {
    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
  }

  // Create session token using NextAuth
  // const session = await NextAuth.getSession({ req: request });
  const token = { user: { email: user.email, name: user.name }, expires: new Date(Date.now() + 60 * 60 * 1000).toISOString() };

  // Set token in cookies for session management
  const response = NextResponse.json({ success: true, user });
  response.cookies.set("next-auth.session-token", JSON.stringify(token), { path: "/", httpOnly: true, sameSite: "strict" });

  return response;
}
