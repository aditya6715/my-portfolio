// my-portfolio/app/layout.tsx
export const metadata = {
    title: 'Aditya Kumar | Portfolio',
    description: 'Portfolio site of Aditya Kumar – Developer & Engineer from NIT Jamshedpur',
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  