import { ExternalLink, EyeOff } from "lucide-react";
import { motion } from "motion/react";

export const ProjectDetail = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  closePage,
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10">
        <button
          onClick={() => closePage(false)}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <EyeOff className="w-6 h-6 cursor-pointer" color="white" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subdp, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subdp}
            </p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <a className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-white">
              View Project
              <ExternalLink href={href} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
