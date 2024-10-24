export const metadata = {
  title: "React course",
  description: "learn-js react",
};

import { App } from "../app";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div id='root'>
          <App>{children}</App>
        </div>
      </body>
    </html>
  );
}
