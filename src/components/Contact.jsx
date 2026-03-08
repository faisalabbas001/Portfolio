import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// =====================================================
// EMAILJS SETUP INSTRUCTIONS:
// 1. Go to https://dashboard.emailjs.com/admin
// 2. Create a new Email Service (Gmail recommended)
// 3. Copy your Service ID and paste below
// 4. Create a template with variables: from_name, from_email, to_name, to_email, message
// 5. Copy Template ID and paste below
// 6. Go to Account > API Keys, copy Public Key and paste below
// =====================================================
const EMAILJS_SERVICE_ID = "service_1eiic0g";
const EMAILJS_TEMPLATE_ID = "template_kx2rtfbwe";
const EMAILJS_PUBLIC_KEY = "oT5mM1NA7LQur3r5I";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		emailjs.init(EMAILJS_PUBLIC_KEY);
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
			toast.error("Please fill in all fields.", {
				style: { background: "#7f1d1d", color: "#fff", border: "1px solid #ef4444" },
			});
			return;
		}

		setLoading(true);

		const loadingToast = toast.loading("Sending your message...", {
			style: {
				background: "#1e1b4b",
				color: "#fff",
				border: "1px solid #7c3aed",
			},
		});

		emailjs
			.send(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: "Faisal Abbas",
					from_email: form.email,
					to_email: "faisalabbas7959@gmail.com",
					message: form.message,
				},
				EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					toast.dismiss(loadingToast);

					toast.success("Message sent successfully! I will get back to you soon.", {
						duration: 5000,
						style: {
							background: "#065f46",
							color: "#fff",
							border: "1px solid #10b981",
						},
						iconTheme: { primary: "#10b981", secondary: "#fff" },
					});

					setForm({ name: "", email: "", message: "" });
				},
				(error) => {
					setLoading(false);
					toast.dismiss(loadingToast);
					console.error("EmailJS Error:", error);

					// Fallback: open mailto link so message still gets through
					const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
					const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
					window.open(`mailto:faisalabbas7959@gmail.com?subject=${subject}&body=${body}`, "_self");

					toast.success(
						"Opening your email client to send the message directly.",
						{
							duration: 5000,
							style: {
								background: "#065f46",
								color: "#fff",
								border: "1px solid #10b981",
							},
							iconTheme: { primary: "#10b981", secondary: "#fff" },
						}
					);

					setForm({ name: "", email: "", message: "" });
				}
			);
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-6 sm:gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 rounded-2xl p-5 sm:p-8"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>
				<a href="mailto:faisalabbas7959@gmail.com" className="mt-3 inline-flex items-center gap-2 bg-tertiary rounded-lg py-2.5 sm:py-3 px-4 sm:px-5 text-white font-medium text-sm sm:text-base break-all hover:bg-purple-500/10 transition-colors border border-transparent hover:border-purple-500/20">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-purple-400"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
					faisalabbas7959@gmail.com
				</a>

				<form ref={formRef} onSubmit={handleSubmit} className="mt-8 sm:mt-12 flex flex-col gap-5 sm:gap-8">
					<label className="flex flex-col">
						<span className="text-white font-medium mb-2 sm:mb-4 text-sm sm:text-base">Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className="bg-tertiary rounded-lg py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white text-sm sm:text-base outline-none border-none font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
							required
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-2 sm:mb-4 text-sm sm:text-base">Your Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email?"
							className="bg-tertiary rounded-lg py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white text-sm sm:text-base outline-none border-none font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
							required
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-2 sm:mb-4 text-sm sm:text-base">Your Message</span>
						<textarea
							rows="5"
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say?"
							className="bg-tertiary rounded-lg py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white text-sm sm:text-base outline-none border-none font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
							required
						/>
					</label>

					<motion.button
						type="submit"
						disabled={loading}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="bg-gradient-to-r from-purple-600 to-blue-600 py-3 px-8 outline-none w-fit text-white font-bold shadow-lg shadow-purple-500/25 rounded-xl hover:shadow-purple-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{loading ? "Sending..." : "Send Message"}
					</motion.button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[280px] sm:h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
