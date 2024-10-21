export const metadata = {
  title: "Vite + React",
  description: "description",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div id='root'>root layout - {children}</div>
      </body>
    </html>
  );
}
