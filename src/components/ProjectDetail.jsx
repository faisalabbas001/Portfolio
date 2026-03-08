import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { styles } from "../styles";

const ProjectDetail = () => {
	const { slug } = useParams();
	const navigate = useNavigate();
	const project = projects.find((p) => p.slug === slug);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [slug]);

	if (!project) {
		return (
			<div className="min-h-screen bg-primary flex items-center justify-center px-4">
				<div className="text-center">
					<h1 className="text-white text-3xl sm:text-5xl font-bold mb-4">Project Not Found</h1>
					<p className="text-secondary mb-8">The project you're looking for doesn't exist.</p>
					<Link to="/" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-8 rounded-xl font-semibold">
						Back to Home
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-primary">
			{/* Header */}
			<div className="sticky top-0 z-20 bg-primary/80 backdrop-blur-xl border-b border-white/[0.04]">
				<div className={`${styles.paddingX} max-w-7xl mx-auto py-4 flex items-center justify-between`}>
					<button
						onClick={() => navigate("/")}
						className="flex items-center gap-2 text-secondary hover:text-white transition-colors text-sm sm:text-base"
					>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<polyline points="15 18 9 12 15 6" />
						</svg>
						<span className="hidden sm:inline">Back to Portfolio</span>
						<span className="sm:hidden">Back</span>
					</button>
					<a
						href={project.source_code_link}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 sm:px-6 rounded-lg font-semibold text-xs sm:text-sm flex items-center gap-2"
					>
						<span>Live Demo</span>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
							<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
							<polyline points="15 3 21 3 21 9" />
							<line x1="10" y1="14" x2="21" y2="3" />
						</svg>
					</a>
				</div>
			</div>

			{/* Hero Image */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="w-full max-w-7xl mx-auto px-4 sm:px-8 pt-6 sm:pt-10"
			>
				<div className="relative rounded-2xl overflow-hidden border border-white/[0.06]">
					<img
						src={project.image}
						alt={project.name}
						className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[480px] object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
				</div>
			</motion.div>

			{/* Content */}
			<div className={`${styles.paddingX} max-w-7xl mx-auto pb-16 sm:pb-20`}>
				<div className="max-w-4xl">
					{/* Title */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 sm:mt-10 leading-tight"
					>
						{project.name}
					</motion.h1>

					{/* Tags */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mt-4 sm:mt-6 flex flex-wrap gap-2"
					>
						{project.tags.map((tag) => (
							<span
								key={tag.name}
								className="px-3 py-1 sm:py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[11px] sm:text-xs font-medium"
							>
								{tag.name}
							</span>
						))}
					</motion.div>

					{/* Description */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="mt-6 sm:mt-10"
					>
						<h2 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
							<span className="w-1 h-5 sm:h-6 bg-[#915eff] rounded-full" />
							About This Project
						</h2>
						<p className="text-secondary text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px]">
							{project.longDescription || project.description}
						</p>
					</motion.div>

					{/* Key Features */}
					{project.features && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="mt-8 sm:mt-12"
						>
							<h2 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
								<span className="w-1 h-5 sm:h-6 bg-[#915eff] rounded-full" />
								Key Features
							</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
								{project.features.map((feature, i) => (
									<motion.div
										key={i}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.5 + i * 0.05 }}
										className="flex items-start gap-3 bg-tertiary/50 rounded-xl p-3 sm:p-4 border border-white/[0.04]"
									>
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#915eff" strokeWidth="2.5" className="shrink-0 mt-0.5">
											<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
											<polyline points="22 4 12 14.01 9 11.01" />
										</svg>
										<span className="text-secondary text-[13px] sm:text-[14px] leading-relaxed">{feature}</span>
									</motion.div>
								))}
							</div>
						</motion.div>
					)}

					{/* Technical Challenge */}
					{project.challenges && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="mt-8 sm:mt-12"
						>
							<h2 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
								<span className="w-1 h-5 sm:h-6 bg-[#915eff] rounded-full" />
								Technical Challenge
							</h2>
							<div className="bg-tertiary/50 rounded-xl p-4 sm:p-6 border border-white/[0.04]">
								<p className="text-secondary text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px]">
									{project.challenges}
								</p>
							</div>
						</motion.div>
					)}

					{/* Tech Stack Grid */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7 }}
						className="mt-8 sm:mt-12"
					>
						<h2 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
							<span className="w-1 h-5 sm:h-6 bg-[#915eff] rounded-full" />
							Tech Stack
						</h2>
						<div className="flex flex-wrap gap-2 sm:gap-3">
							{project.tags.map((tag, i) => (
								<motion.div
									key={tag.name}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.8 + i * 0.05 }}
									className="px-4 py-2 sm:py-2.5 bg-tertiary rounded-xl border border-white/[0.06] text-white text-[13px] sm:text-sm font-medium"
								>
									{tag.name}
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* CTA */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.9 }}
						className="mt-10 sm:mt-16 flex flex-col sm:flex-row gap-3 sm:gap-4"
					>
						<a
							href={project.source_code_link}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 sm:px-8 rounded-xl font-semibold text-sm shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2"
						>
							Visit Live Demo
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
								<polyline points="15 3 21 3 21 9" />
								<line x1="10" y1="14" x2="21" y2="3" />
							</svg>
						</a>
						<button
							onClick={() => navigate("/")}
							className="border border-purple-500/30 text-white py-3 px-6 sm:px-8 rounded-xl font-semibold text-sm hover:bg-purple-500/10 transition-colors text-center"
						>
							View All Projects
						</button>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetail;
