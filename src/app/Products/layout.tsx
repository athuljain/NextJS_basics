export default function ProductLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={"productLayout"}
        >
         <h1>product header</h1>
          {children}
        </body>
      </html>
    );
  }
  