import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import FloatingChat from "./components/FloatingChat";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";

const Loader = () => (
	<div className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center gap-6">
		<div className="relative w-16 h-16">
			<div className="absolute inset-0 rounded-full border-2 border-purple-500/20" />
			<div className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-500 animate-spin" />
			<div className="absolute inset-2 rounded-full border-2 border-transparent border-t-blue-500 animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.8s" }} />
		</div>
		<div className="text-center">
			<p className="text-white text-sm font-semibold">Faisal Abbas</p>
			<p className="text-secondary text-xs mt-1">Loading portfolio...</p>
		</div>
	</div>
);

const HomePage = () => (
	<>
		<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
			<Navbar />
			<Hero />
		</div>

		<About />

		<div className="max-w-7xl mx-auto px-4 sm:px-16">
			<div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
		</div>

		<Experience />

		<div className="max-w-7xl mx-auto px-4 sm:px-16">
			<div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
		</div>

		<Tech />

		<div className="max-w-7xl mx-auto px-4 sm:px-16">
			<div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
		</div>

		<Works />

		<div className="max-w-7xl mx-auto px-4 sm:px-16">
			<div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
		</div>

		<div className="relative z-0">
			<Contact />
			<StarsCanvas />
		</div>

		<Footer />

		<FloatingChat />
	</>
);

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 1500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary overflow-x-hidden">
				{loading && <Loader />}
				<Toaster
					position="top-right"
					toastOptions={{
						duration: 4000,
						style: {
							fontSize: '14px',
							fontWeight: '500',
							zIndex: 9999,
						},
					}}
					containerStyle={{
						top: 20,
						right: 20,
					}}
				/>

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/project/:slug" element={<><ProjectDetail /><Footer /></>} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
