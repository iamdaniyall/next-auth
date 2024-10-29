/** @type {import('next').NextConfig} */
const nextConfig = {
   
        reactStrictMode:false,
          env: {
              BASE_URL: process.env.BASE_URL,
              GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
              GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
              JWT_SECRET: process.env.JWT_SECRET,
              
            }
      
};

export default nextConfig;
