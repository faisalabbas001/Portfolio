import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologyCategories } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const TechBall = ({ icon, name, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.08, 0.5)}
      className="flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer"
    >
      <div className="relative w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24">
        {/* Outer octagonal frame */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-blue-500/40 rounded-2xl rotate-[22.5deg] group-hover:from-purple-500/70 group-hover:to-blue-500/70 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]" />
        {/* Inner dark fill */}
        <div className="absolute inset-[2px] bg-[#1d1836] rounded-2xl rotate-[22.5deg]" />
        {/* Icon with white background circle for contrast */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
            <img
              src={icon}
              alt={name}
              className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <p className="text-white text-[10px] xs:text-[11px] sm:text-[13px] font-medium text-center leading-tight">
        {name}
      </p>
    </motion.div>
  );
};

const Tech = () => {
  let globalIndex = 0;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="mt-8 sm:mt-12 space-y-8 sm:space-y-12">
        {technologyCategories.map((cat) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Category Label */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className={`h-[2px] w-6 sm:w-8 bg-gradient-to-r ${cat.gradient} rounded-full`} />
              <h3 className={`text-sm sm:text-base font-semibold bg-gradient-to-r ${cat.gradient} bg-clip-text text-transparent`}>
                {cat.category}
              </h3>
              <div className="flex-1 h-px bg-white/[0.06]" />
            </div>

            {/* Tech Icons */}
            <div className="flex flex-row flex-wrap gap-4 xs:gap-5 sm:gap-6 md:gap-8">
              {cat.items.map((technology) => {
                const idx = globalIndex++;
                return (
                  <TechBall
                    key={technology.name}
                    icon={technology.icon}
                    name={technology.name}
                    index={idx}
                  />
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
