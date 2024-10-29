// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();
// (async () => {
//     try {
//       await prisma.$connect();
//       console.log("Connected to the database");
//     } catch (error) {
//       console.error("Database connection error:", error);
//     }
//   })();
  
// console.log('Database URL:', process.env.DATABASE_URL);

// export default prisma;



// import { PrismaClient } from "@prisma/client";

// declare global {
//   var prisma: PrismaClient | undefined;
// }

// export const db = globalThis.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const db = globalThis.prisma ?? prismaClientSingleton();

export default db;

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
