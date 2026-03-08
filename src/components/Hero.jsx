import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { styles } from '../styles';

const roles = [
	"Full Stack Development",
	"Agentic AI Engineering",
	"Microservices Architecture",
	"AI-Powered Platforms",
	"Blockchain Solutions",
];

const techStack = [
	{ name: "React", color: "from-cyan-400 to-blue-500" },
	{ name: "Next.js", color: "from-white/80 to-gray-400" },
	{ name: "Node.js", color: "from-green-400 to-emerald-600" },
	{ name: "NestJS", color: "from-red-400 to-red-600" },
	{ name: "TypeScript", color: "from-blue-400 to-blue-600" },
	{ name: "PostgreSQL", color: "from-blue-300 to-indigo-500" },
	{ name: "Docker", color: "from-blue-400 to-cyan-500" },
	{ name: "OpenAI", color: "from-green-300 to-teal-500" },
];

const Hero = () => {
	const [roleIndex, setRoleIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setRoleIndex((prev) => (prev + 1) % roles.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative w-full min-h-[100dvh] mx-auto flex items-center overflow-hidden">
			{/* Subtle grid */}
			<div className="absolute inset-0 opacity-[0.03]" style={{
				backgroundImage: 'linear-gradient(rgba(145,94,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(145,94,255,0.3) 1px, transparent 1px)',
				backgroundSize: '60px 60px'
			}} />

			{/* Ambient glow */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary z-[1]" />
			<div className="absolute top-20 right-10 sm:right-20 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-purple-600/[0.06] rounded-full blur-[120px]" />
			<div className="absolute bottom-20 left-5 sm:left-10 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-blue-600/[0.06] rounded-full blur-[100px]" />

			{/* Content */}
			<div className={`${styles.paddingX} relative z-[2] max-w-7xl mx-auto w-full py-24 sm:py-28 lg:py-0`}>
				<div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-12 lg:gap-16">

					{/* LEFT -- Text */}
					<motion.div
						className="flex-1 w-full flex flex-row items-start gap-3 sm:gap-5"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						{/* Accent bar */}
						<div className="hidden sm:flex flex-col items-center mt-6 shrink-0">
							<div className="w-4 h-4 rounded-full bg-[#915eff]" />
							<div className="w-1 h-48 sm:h-56 violet-gradient" />
						</div>

						<div className="flex flex-col min-w-0 w-full">
							{/* Status badge */}
							<motion.span
								className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[11px] sm:text-xs font-medium w-fit mb-4 sm:mb-5"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.3 }}
							>
								<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
								Available for work
							</motion.span>

							{/* Heading */}
							<h1 className="font-black text-white text-[28px] sm:text-[42px] md:text-[52px] lg:text-[56px] xl:text-[64px] leading-[1.1]">
								I Build Software{' '}
								<span className="text-[#915eff]">That Scales</span>
							</h1>

							{/* Subtitle */}
							<p className="mt-2 sm:mt-3 text-[#dfd9ff] font-medium text-[13px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-lg">
								Full Stack Engineer turning complex ideas into{' '}
								<span className="text-[#915eff] font-semibold">production-grade</span> applications with AI, microservices & modern architecture.
							</p>

							{/* Rotating role */}
							<div className="mt-2 h-8 sm:h-10 relative overflow-hidden">
								<AnimatePresence mode="wait">
									<motion.p
										key={roleIndex}
										initial={{ y: 24, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: -24, opacity: 0 }}
										transition={{ duration: 0.3 }}
										className="absolute text-[13px] sm:text-[16px] md:text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
									>
										{roles[roleIndex]}
									</motion.p>
								</AnimatePresence>
							</div>

							{/* CTA */}
							<div className="mt-5 sm:mt-6 flex flex-wrap gap-3">
								<motion.a
									href="#work"
									whileHover={{ scale: 1.04 }}
									whileTap={{ scale: 0.97 }}
									className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2.5 sm:py-3 px-5 sm:px-7 rounded-xl font-semibold text-[13px] sm:text-sm shadow-lg shadow-purple-500/20 flex items-center gap-2"
								>
									View My Work
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
								</motion.a>
								<motion.a
									href="#contact"
									whileHover={{ scale: 1.04 }}
									whileTap={{ scale: 0.97 }}
									className="border border-purple-500/30 text-white py-2.5 sm:py-3 px-5 sm:px-7 rounded-xl font-semibold text-[13px] sm:text-sm hover:bg-purple-500/10 transition-colors"
								>
									Let's Talk
								</motion.a>
								<motion.button
									onClick={async () => {
										try {
											const res = await fetch('/resume.pdf', { method: 'HEAD' });
											if (res.ok) {
												window.open('/resume.pdf', '_blank');
											} else {
												toast.error('Resume coming soon!', {
													style: { background: '#1e1b4b', color: '#fff', border: '1px solid #7c3aed' },
												});
											}
										} catch {
											toast.error('Resume coming soon!', {
												style: { background: '#1e1b4b', color: '#fff', border: '1px solid #7c3aed' },
											});
										}
									}}
									whileHover={{ scale: 1.04 }}
									whileTap={{ scale: 0.97 }}
									className="border border-white/10 text-white/80 py-2.5 sm:py-3 px-5 sm:px-7 rounded-xl font-semibold text-[13px] sm:text-sm hover:bg-white/5 hover:text-white transition-colors flex items-center gap-2"
								>
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
									Resume
								</motion.button>
							</div>

							{/* Stats */}
							<motion.div
								className="mt-6 sm:mt-8 grid grid-cols-2 sm:flex sm:flex-row gap-y-3 gap-x-0"
								initial={{ opacity: 0, y: 16 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5, duration: 0.5 }}
							>
								{[
									{ value: "6+", label: "Projects Shipped" },
									{ value: "11", label: "Microservices" },
									{ value: "3+", label: "AI Integrations" },
									{ value: "100%", label: "Client Satisfaction" },
								].map((stat, i) => (
									<div
										key={stat.label}
										className={`flex flex-col sm:px-4 lg:px-5 ${
											i !== 3 ? 'sm:border-r sm:border-white/10' : ''
										} ${i === 0 ? 'sm:pl-0' : ''}`}
									>
										<span className="text-white text-lg sm:text-2xl font-bold">{stat.value}</span>
										<span className="text-[#dfd9ff]/70 text-[10px] sm:text-[11px] mt-0.5">{stat.label}</span>
									</div>
								))}
							</motion.div>
						</div>
					</motion.div>

					{/* RIGHT -- Terminal card */}
					<motion.div
						className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<div className="relative">
							{/* Glow */}
							<div className="absolute -inset-3 bg-gradient-to-br from-purple-500/15 to-blue-500/15 rounded-3xl blur-2xl" />

							{/* Terminal */}
							<div className="relative bg-[#0c0918] border border-white/[0.07] rounded-2xl overflow-hidden">
								{/* Title bar */}
								<div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-b border-white/[0.05] bg-white/[0.02]">
									<div className="flex gap-1.5">
										<div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f57]" />
										<div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#febc2e]" />
										<div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#28c840]" />
									</div>
									<span className="ml-2 text-white/50 text-[10px] sm:text-[11px] font-mono">~/faisal-abbas</span>
								</div>

								{/* Terminal body */}
								<div className="p-3 sm:p-5 font-mono text-[10.5px] sm:text-[13px] leading-5 sm:leading-7 space-y-1">
									{/* Command */}
									<div className="flex flex-wrap">
										<span className="text-green-400 mr-2">$</span>
										<span className="text-white/60">cat </span>
										<span className="text-yellow-300">profile.json</span>
									</div>

									{/* JSON */}
									<div className="text-white/50 mt-1 sm:mt-2">{'{'}</div>
									<div className="pl-2.5 sm:pl-4">
										<span className="text-blue-300">"name"</span>
										<span className="text-white/60">: </span>
										<span className="text-green-400">"Faisal Abbas"</span>
										<span className="text-white/50">,</span>
									</div>
									<div className="pl-2.5 sm:pl-4">
										<span className="text-blue-300">"role"</span>
										<span className="text-white/60">: </span>
										<span className="text-green-400">"Full Stack Engineer"</span>
										<span className="text-white/50">,</span>
									</div>
									<div className="pl-2.5 sm:pl-4">
										<span className="text-blue-300">"stack"</span>
										<span className="text-white/60">: [</span>
										<span className="text-green-400">"MERN"</span>
										<span className="text-white/50">, </span>
										<span className="text-green-400">"NestJS"</span>
										<span className="text-white/50">, </span>
										<span className="text-green-400">"AI"</span>
										<span className="text-white/60">]</span>
										<span className="text-white/50">,</span>
									</div>
									<div className="pl-2.5 sm:pl-4">
										<span className="text-blue-300">"passion"</span>
										<span className="text-white/60">: </span>
										<span className="text-green-400">"Building at scale"</span>
										<span className="text-white/50">,</span>
									</div>
									<div className="pl-2.5 sm:pl-4">
										<span className="text-blue-300">"available"</span>
										<span className="text-white/60">: </span>
										<span className="text-orange-400">true</span>
									</div>
									<div className="text-white/50">{'}'}</div>

									{/* Blinking prompt */}
									<div className="flex items-center mt-1 sm:mt-2">
										<span className="text-green-400 mr-2">$</span>
										<motion.span
											animate={{ opacity: [1, 0] }}
											transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
											className="inline-block w-1.5 h-3.5 sm:h-4 bg-green-400"
										/>
									</div>
								</div>
							</div>

							{/* Tech pills */}
							<motion.div
								className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2 justify-center"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.8 }}
							>
								{techStack.map((tech, i) => (
									<motion.span
										key={tech.name}
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.9 + i * 0.06 }}
										className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-gradient-to-r ${tech.color} text-[9px] sm:text-[11px] font-semibold text-black/80`}
									>
										{tech.name}
									</motion.span>
								))}
							</motion.div>

							{/* Trust signal */}
							<motion.div
								className="mt-3 sm:mt-4 flex items-center justify-center gap-2 text-[10px] sm:text-xs text-white/60"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1.2 }}
							>
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400/60">
									<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
									<polyline points="22 4 12 14.01 9 11.01" />
								</svg>
								<span>Trusted by startups & agencies worldwide</span>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-4 sm:bottom-8 w-full flex justify-center items-center z-[2]">
				<a href="#about">
					<div className="w-[26px] h-[42px] sm:w-[28px] sm:h-[48px] rounded-3xl border-2 border-secondary/25 flex justify-center items-start p-1.5">
						<motion.div
							animate={{ y: [0, 12, 0] }}
							transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
							className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary/50"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
