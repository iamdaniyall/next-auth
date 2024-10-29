// src/app/layout.tsx
import Providers from "@/components/Providers";
import "./globals.css";

const RootLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <html lang="en">
      <body>
        <Providers>

        {children}
        </Providers>
        </body>
    </html>
  );
};

export default RootLayout;
