const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="bg-[#1A0033]/70 backdrop-blur-sm rounded-lg overflow-hidden
        border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300
        flex flex-col md:flex-row gap-4 p-4 md:p-6
        transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Image container with proper mobile sizing */}
      <div className="w-full md:w-1/2 h-48 md:h-auto relative rounded-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content with better mobile spacing */}
      <div className="flex-1 flex flex-col justify-between gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-2">
            {project.title}
          </h3>
          <p className="text-purple-200/80 text-sm md:text-base mb-4">
            {project.description}
          </p>
          {/* Rest of your content */}
        </div>
      </div>
    </motion.div>
  );
};
