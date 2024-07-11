import './globals.css'; // Make sure this path is correct

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Website</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}