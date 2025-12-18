import { motion } from "motion/react";
import { Download, Play } from "lucide-react";

export function Portfolio() {
  const videos = [
    {
      title: "Brand Campaign 2024",
      videoId: "dQw4w9WgXcQ",
      description: "Successful brand awareness campaign reaching 2M+ views",
    },
    {
      title: "Product Launch Strategy",
      videoId: "9bZkp7q19f0",
      description: "Complete product launch digital strategy breakdown",
    },
    {
      title: "Social Media Success",
      videoId: "jNQXAC9IVRw",
      description: "How we grew social media presence by 500%",
    },
  ];

  const images = [
    "https://images.unsplash.com/photo-1633119747461-79f45df1913c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjYwNTIxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1742440710193-3547e0b9d4db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjYwNTQ2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1762341120156-4a8303067873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTk5NTQ2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBzaG93Y2FzZXxlbnwxfHx8fDE3NjYwNjAxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  const pdfs = [
    {
      title: "Marketing Strategy Guide",
      description: "Comprehensive digital marketing strategy framework",
      pages: "24 pages",
    },
    {
      title: "SEO Best Practices",
      description: "Complete SEO optimization checklist and guide",
      pages: "18 pages",
    },
    {
      title: "Social Media Toolkit",
      description: "Tools and templates for social media success",
      pages: "32 pages",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#070d0e] to-[#45818e] mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#45818e] to-[#69a3ae] mx-auto" />
        </motion.div>

        {/* Video Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl text-[#070d0e] mb-8"
          >
            Featured Videos
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4">
                  <iframe
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#070d0e]/80 to-transparent flex items-center justify-center pointer-events-none"
                  >
                    <Play className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                  </motion.div>
                </div>
                <h4 className="text-lg sm:text-xl text-[#070d0e] mb-2">{video.title}</h4>
                <p className="text-sm sm:text-base text-gray-600">{video.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl text-[#070d0e] mb-8"
          >
            Image Gallery
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={image}
                    alt={`Portfolio image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#45818e] to-transparent rounded-2xl flex items-end p-4"
                >
                  <p className="text-white">Campaign {index + 1}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PDF Downloads */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl text-[#070d0e] mb-8"
          >
            Downloadable Resources
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pdfs.map((pdf, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-[#e7f2f4] to-white p-6 rounded-2xl shadow-lg border border-[#45818e]/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#45818e] to-[#69a3ae] rounded-xl flex items-center justify-center mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl text-[#070d0e] mb-2">{pdf.title}</h4>
                <p className="text-gray-600 mb-4">{pdf.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#45818e]">{pdf.pages}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-[#45818e] to-[#69a3ae] text-white rounded-lg flex items-center gap-2"
                  >
                    <Download size={16} />
                    Download
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}