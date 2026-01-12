import image_430c5960ce08d40419be78ebd48afa5d8b803bd8 from '../assets/430c5960ce08d40419be78ebd48afa5d8b803bd8.png';
import { motion } from 'motion/react';
import { ExternalLink, FileText } from 'lucide-react';

const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Brand Campaign 2024' },
  { id: 'jNQXAC9IVRw', title: 'Social Media Strategy' },
  { id: '9bZkp7q19f0', title: 'Product Launch' },
];

const photos = [
  { 
    type: 'instagram', 
    username: 'letsupgrade.in',
    url: 'https://www.instagram.com/letsupgrade.in/'
  },
  { 
    type: 'instagram', 
    username: 'hookhunters_',
    url: 'https://www.instagram.com/hookhunters_/'
  },
  { 
    type: 'image', 
    src: image_430c5960ce08d40419be78ebd48afa5d8b803bd8,
    link: 'https://drive.google.com/drive/folders/1f_GTMskf_hsuLIUnB52_e71Oj1Guq8F9?usp=sharing',
    alt: 'Hackathon Event'
  },
];

const brochures = [
  { 
    title: 'Applied AI Engineering Brochure', 
    pages: 16,
    link: 'https://drive.google.com/file/d/1X2QyxiEdcpIU-VODod4-j0y_DeA4mHWv/view?usp=sharing'
  },
  { 
    title: "BBA iConnect Bachelor's Program", 
    pages: 20,
    link: 'https://drive.google.com/file/d/1j1ucb9rjjwQRK9kAF1hbnNjocP1S6VwL/view?usp=sharing'
  },
  { 
    title: 'School of FutureTech (B.Tech CSE) Brochure', 
    pages: 20,
    link: 'https://drive.google.com/file/d/1IX6ex8j7WIURvM0nkEt5lHVQ8bwA-06U/view?usp=sharing'
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
        >
          Portfolio
        </motion.h2>
        
        {/* YouTube Channel Section */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            YouTube Channel
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Channel Embed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-2 border-gray-900 rounded-2xl overflow-hidden hover:border-yellow-400 transition-all"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/videoseries?list=PL2xv2fRx_g7PVeqUBkpraPvu22k7W_7DI"
                  title="YouTube Channel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h4 className="text-2xl font-bold text-gray-900">
                YouTube Growth & Production Manager
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Managed the School of FutureTech YouTube account, overseeing the production and publishing of diverse content formats including podcasts, interviews, reels, advertisements, and more. I handled end-to-end channel operations while leading and coordinating a team of video editors to ensure consistent quality, branding, and timely delivery across all content.
              </p>
              <motion.a
                href="https://www.youtube.com/@schooloffuturetech"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl border-2 border-gray-900 hover:bg-yellow-500 transition-colors"
              >
                Visit Channel
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
        
        {/* Photo Gallery */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Photo Gallery
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="border-2 border-gray-900 rounded-2xl overflow-hidden aspect-square cursor-pointer transition-all hover:border-yellow-400"
              >
                {photo.type === 'instagram' ? (
                  <iframe
                    src={`https://www.instagram.com/${photo.username}/embed`}
                    title={photo.username}
                    className="w-full h-full"
                    style={{ border: 'none' }}
                    allowFullScreen
                  />
                ) : (
                  <a href={photo.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Brochures */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Design Brochures
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brochures.map((brochure, index) => (
              <motion.a
                key={index}
                href={brochure.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, borderColor: '#facc15' }}
                className="border-2 border-gray-900 rounded-2xl p-6 transition-all cursor-pointer bg-white group"
              >
                <motion.div
                  whileHover={{ rotate: 12 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-4"
                >
                  <FileText className="w-8 h-8 text-gray-900" />
                </motion.div>
                <h4 className="font-bold text-gray-900 mb-2">{brochure.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{brochure.pages} pages</p>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center text-yellow-600 group-hover:text-yellow-500"
                >
                  <span className="text-sm font-semibold mr-1">View</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}