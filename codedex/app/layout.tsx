import './globals.css'; // Importing global CSS styles

import NavBar from './NavBar'; // Importing the NavBar component

// Root layout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Website</title>
      </head>
      <body>
        <NavBar /> {/* Navigation Bar */}
        <main>
          {children} {/* Main content area */}
        </main>
      </body>
    </html>
  );
}