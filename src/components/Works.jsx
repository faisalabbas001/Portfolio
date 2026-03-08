import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, slug, description, image, tags, source_code_link, index }) => {
	const [imgLoaded, setImgLoaded] = useState(false);
	const navigate = useNavigate();

	return (
		<motion.div
			variants={fadeIn("up", "spring", index * 0.3, 0.75)}
			className="w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)]"
		>
			<Tilt
				tiltMaxAngleX={15}
				tiltMaxAngleY={15}
				scale={1}
				transitionSpeed={450}
				tiltEnable={typeof window !== 'undefined' && window.innerWidth > 768}
				className="relative bg-tertiary rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer"
			>
				{/* Card click -> detail page */}
				<div
					className="absolute inset-0 z-10"
					role="link"
					tabIndex={slug ? 0 : -1}
					aria-label={`View ${name} project details`}
					onClick={() => slug && navigate(`/project/${slug}`)}
					onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && slug) { e.preventDefault(); navigate(`/project/${slug}`); }}}
				/>
				{/* Image */}
				<div className="relative w-full h-[160px] sm:h-[180px] lg:h-[200px] overflow-hidden">
					{!imgLoaded && (
						<div className="absolute inset-0 bg-tertiary animate-pulse" />
					)}
					<img
						src={image}
						alt={name}
						className={`w-full h-full object-cover transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
						loading="lazy"
						onLoad={() => setImgLoaded(true)}
					/>
					{/* Overlay gradient */}
					<div className="absolute inset-0 bg-gradient-to-t from-tertiary/60 to-transparent" />

					{/* Link button - z-20 to sit above the card overlay */}
					<div className="absolute top-3 right-3 z-20">
						<div
							role="button"
							tabIndex={0}
							aria-label={`Open ${name} live demo`}
							onClick={(e) => { e.stopPropagation(); window.open(source_code_link, "_blank"); }}
							onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); window.open(source_code_link, "_blank"); }}}
							className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex justify-center items-center cursor-pointer hover:bg-purple-500/30 transition-colors"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
								<polyline points="15 3 21 3 21 9" />
								<line x1="10" y1="14" x2="21" y2="3" />
							</svg>
						</div>
					</div>
				</div>

				{/* Content */}
				<div className="p-4 sm:p-5 flex flex-col flex-1">
					<h3 className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-tight">{name}</h3>
					<p className="text-secondary text-[12px] sm:text-[13px] mt-2 leading-relaxed line-clamp-3 flex-1">{description}</p>

					{/* Tags */}
					<div className="flex flex-wrap gap-x-2 gap-y-1 mt-3 pt-3 border-t border-white/[0.06]">
						{tags.slice(0, 4).map((tag) => (
							<span key={tag.name} className={`${tag.color} text-[11px] sm:text-[12px] font-medium`}>
								#{tag.name}
							</span>
						))}
						{tags.length > 4 && (
							<span className="text-secondary/80 text-[11px] sm:text-[12px]">
								+{tags.length - 4}
							</span>
						)}
					</div>

					{/* View details hint */}
					{slug && (
						<div className="mt-3 flex items-center gap-1.5 text-purple-400/60 text-[11px] sm:text-[12px] font-medium">
							<span>View Details</span>
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
						</div>
					)}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My work</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[13px] sm:text-[15px] md:text-[17px] max-w-3xl leading-[22px] sm:leading-[28px] md:leading-[30px]">
					Each project reflects real-world problem solving — from AI-powered platforms to
					microservices architecture. Click any project to explore the live demo.
				</motion.p>
			</div>

			{/* Project grid */}
			<div className="mt-10 sm:mt-16 md:mt-20 flex flex-wrap gap-5 sm:gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} {...project} index={index} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "work");
