import { Header } from "./Header.jsx"
import { Footer } from "./Footer.jsx"

export function Layout({ children }) {
	return (
		<>
			<Header />
			<main className="main">
				{children}
			</main>
			<Footer />
		</>
	)
}