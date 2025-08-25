import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// template_yumq5i8;
// service_xdpsv79;
// PimOfzIeuUt1zrMKT

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// Show loading toast
		const loadingToast = toast.loading('Sending your message...', {
			style: {
				background: '#1e1b4b',
				color: '#fff',
				border: '1px solid #7c3aed',
			},
		});

		emailjs
			.send(
				"service_6lrcaeb",
				"template_yumq5i8",
				{
					from_name: form.name,
					to_name: "Faisal Abbas",
					from_email: form.email,
					to_email: "faisalabbas7959@gmail.com",
					message: form.message,
				},
				"PimOfzIeuUt1zrMKT"
			)
			.then(
				() => {
					setLoading(false);
					toast.dismiss(loadingToast);
					
					// Show success toast
					toast.success('Message sent successfully! I will get back to you soon.', {
						duration: 5000,
						style: {
							background: '#065f46',
							color: '#fff',
							border: '1px solid #10b981',
						},
						iconTheme: {
							primary: '#10b981',
							secondary: '#fff',
						},
					});

					// Reset form
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					toast.dismiss(loadingToast);
					console.log(error);
					
					// Show error toast
					toast.error('Failed to send message. Please try again later.', {
						duration: 5000,
						style: {
							background: '#7f1d1d',
							color: '#fff',
							border: '1px solid #ef4444',
						},
						iconTheme: {
							primary: '#ef4444',
							secondary: '#fff',
						},
					});
				}
			);
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 rounded-2xl p-8">
				<p className={styles.sectionSubText}>Get in touch</p>
				<p className="bg-tertiary rounded-lg py-4 px-6 placeholder:text-secondary text-white outlined-none border-none font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all">faisalabbas7959@gmail.com</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className="bg-tertiary rounded-lg py-4 px-6 placeholder:text-secondary text-white outlined-none border-none font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
							required
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email?"
							className="bg-tertiary rounded-lg py-4 px-6 placeholder:text-secondary text-white outlined-none border-none font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
							required
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message</span>
					</label>
					<textarea
						rows="7"
						name="message"
						value={form.message}
						onChange={handleChange}
						placeholder="What do you want to say?"
						className="bg-tertiary rounded-lg py-4 px-6 placeholder:text-secondary text-white outlined-none border-none font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
						required
					/>

					<motion.button
						type="submit"
						disabled={loading}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="bg-gradient-to-r from-purple-600 to-blue-600 py-3 px-8 outline-none w-fit text-white font-bold shadow-lg shadow-purple-500/25 rounded-xl hover:shadow-purple-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
						{loading ? "Sending..." : "Send Message"}
					</motion.button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
