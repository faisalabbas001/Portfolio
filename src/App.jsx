import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				{/* Global Toast Notifications */}
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
				
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				{/* <Feedbacks /> */}
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
