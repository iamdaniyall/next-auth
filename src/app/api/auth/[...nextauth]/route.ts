import NextAuth, { AuthOptions, SessionStrategy } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { verifyPassword } from "@/lib/bcrypt";
// import  db  from "@/lib/prisma";

export const authOptions: AuthOptions = {
  providers: [
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "email" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     try {
    //       const user = await db.user.findUnique({
    //         where: { email: credentials?.email },
    //       });

    //       if (
    //         !user ||
    //         !(await verifyPassword(credentials?.password ?? "", user?.password ?? ""))
    //       ) {
    //         throw new Error("Invalid credentials");
    //       }

    //       return user;
    //     } catch (error) {
    //       console.error("Error in authorize:", error);
    //       throw new Error("Authorization failed");
    //     }
    //   },
    // }),
    
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  // adapter: PrismaAdapter(db),
  session: { 
    strategy: "jwt" ,
  },
  pages: {
    signIn: "/",
  },
};

// Use the App Router handler
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
