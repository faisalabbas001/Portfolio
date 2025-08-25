 import React from 'react'
 
 const Buttons = () => {
   return (
     <div className="mt-6 flex flex-wrap items-center gap-3 justify-center">
						<motion.a
							href="#contact"
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.98 }}
							className="relative inline-flex items-center justify-center px-5 py-2.5 font-semibold text-white rounded-xl bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#06b6d4] shadow-[0_10px_25px_-10px_rgba(124,58,237,0.6)] hover:shadow-[0_16px_40px_-12px_rgba(124,58,237,0.7)] transition-shadow"
						>
							<span>Get in Touch</span>
						</motion.a>
						<motion.a
							href="https://www.linkedin.com/in/faisal-abbas-freelancer-11bb86278/"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.98 }}
							className="relative inline-flex items-center justify-center px-5 py-2.5 font-semibold rounded-xl text-[#a78bfa] border border-[#7c3aed]/40 bg-[#0b0a1c]/60 backdrop-blur-sm hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-[#0ea5e9] hover:via-[#7c3aed] hover:to-[#a78bfa] transition-all"
						>
							<span>Resume</span>
						</motion.a>
					</div>
   )
 }
 
 export default Buttons