import { motion } from "motion/react";
import { Download, Play } from "lucide-react";

export function Portfolio() {
  const videos = [
    {
      title: "Brand Campaign 2024",
      videoId: "Z6WFokjX64U",
      description: "Successful brand awareness campaign reaching 2M+ views",
    },
    {
      title: "Product Launch Strategy",
      videoId: "4xoboqmjlQE",
      description: "Complete product launch digital strategy breakdown",
    },
    {
      title: "Social Media Success",
      videoId: "8CUo54hBRU4",
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
      title: "B.Tech CSE Brochure",
      description: "This is one of the best pieces I've created in terms of ideation and content. It took us a week to finalize it after 10–15 drafts.",
      url: "https://drive.google.com/file/d/1IX6ex8j7WIURvM0nkEt5lHVQ8bwA-06U/view",
    },
    {
      title: "BBA Brochure",
      description: "A cleaner and more settled approach to match the legacy of the institute.",
      url: "https://drive.google.com/file/d/1j1ucb9rjjwQRK9kAF1hbnNjocP1S6VwL/view",
    },
    {
      title: "AI Engineering",
      description: "A new and modern approach with a minimal design style for an AI-based program.",
      url: "https://drive.google.com/file/d/1X2QyxiEdcpIU-VODod4-j0y_DeA4mHWv/view",
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
            className="text-3xl text-[#070d0e] mb-4"
          >
            Video Production and Editing
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 mb-8 max-w-3xl"
          >
            These videos were conceptualized and scripted by me, and they showcase just a few of the ideas my small team of two and I brought to life with minimal equipment.
          </motion.p>
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
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
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
            Brochures Designed
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
                className="bg-gradient-to-br from-[#e7f2f4] to-white rounded-2xl shadow-lg border border-[#45818e]/20 overflow-hidden"
              >
                {/* PDF Preview Image */}
                <div className="relative w-full h-48 bg-gradient-to-br from-[#45818e] to-[#69a3ae] flex items-center justify-center">
                  <div className="absolute inset-0 opacity-30">
                    <img 
                      src="https://images.unsplash.com/photo-1611079830811-865ff4428d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMHJlcG9ydCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NjI0MTM2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Document preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative text-center text-white">
                    <Download className="w-16 h-16 mx-auto mb-2 opacity-80" />
                    <p className="text-sm opacity-90">PDF Document</p>
                  </div>
                </div>
                
                {/* PDF Content */}
                <div className="p-6">
                  <h4 className="text-xl text-[#070d0e] mb-2">{pdf.title}</h4>
                  <p className="text-gray-600 mb-4">{pdf.description}</p>
                  <div className="flex justify-end">
                    <motion.a
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-[#45818e] to-[#69a3ae] text-white rounded-lg flex items-center gap-2"
                    >
                      <Download size={16} />
                      View
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}