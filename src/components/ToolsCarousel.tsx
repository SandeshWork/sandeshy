import { motion } from 'motion/react';
import { 
  Megaphone, 
  BarChart3, 
  Zap, 
  MessageSquare, 
  Palette, 
  Sparkles,
  Target,
  LineChart,
  Workflow,
  Mail,
  Wand2,
  TrendingUp
} from 'lucide-react';

const getToolIcon = (name: string) => {
  // Ads & Paid Media
  if (name.includes('Ads')) return <Megaphone className="w-6 h-6" />;
  
  // Analytics & Tracking
  if (name.includes('Analytics') || name.includes('Tag Manager') || name.includes('Looker') || name.includes('Charts')) {
    return <BarChart3 className="w-6 h-6" />;
  }
  if (name.includes('Excel') || name.includes('Sheets')) {
    return <LineChart className="w-6 h-6" />;
  }
  
  // Automation & CRM
  if (name.includes('Zapier') || name.includes('n8n') || name.includes('Make.com')) {
    return <Zap className="w-6 h-6" />;
  }
  if (name.includes('Customer.io') || name.includes('Meritto')) {
    return <Workflow className="w-6 h-6" />;
  }
  
  // Communication & Engagement
  if (name.includes('Tick') || name.includes('Wati') || name.includes('Sensy') || name.includes('Engati')) {
    return <MessageSquare className="w-6 h-6" />;
  }
  if (name.includes('Sendy') || name.includes('Mailchimp')) {
    return <Mail className="w-6 h-6" />;
  }
  
  // Creative & Design
  if (name.includes('Adobe') || name.includes('Canva') || name.includes('Figma')) {
    return <Palette className="w-6 h-6" />;
  }
  
  // AI Tools
  if (name.includes('ChatGPT') || name.includes('Midjourney') || name.includes('Runway') || 
      name.includes('HeyGen') || name.includes('ElevenLabs') || name.includes('Descript')) {
    return <Sparkles className="w-6 h-6" />;
  }
  
  return <Target className="w-6 h-6" />;
};

const tools = [
  // Ads & Paid Media
  { name: 'Google Ads', category: 'Ads & Paid Media' },
  { name: 'Meta Ads', category: 'Ads & Paid Media' },
  { name: 'LinkedIn Ads', category: 'Ads & Paid Media' },
  { name: 'Reddit Ads', category: 'Ads & Paid Media' },
  
  // Analytics & Tracking
  { name: 'Google Analytics 4', category: 'Analytics & Tracking' },
  { name: 'Google Tag Manager', category: 'Analytics & Tracking' },
  { name: 'Looker Studio', category: 'Analytics & Tracking' },
  { name: 'MongoDB Charts', category: 'Analytics & Tracking' },
  { name: 'Microsoft Excel', category: 'Analytics & Tracking' },
  { name: 'Google Sheets', category: 'Analytics & Tracking' },
  
  // Automation & CRM
  { name: 'Zapier', category: 'Automation & CRM' },
  { name: 'n8n', category: 'Automation & CRM' },
  { name: 'Make.com', category: 'Automation & CRM' },
  { name: 'Customer.io', category: 'Automation & CRM' },
  { name: 'Meritto', category: 'Automation & CRM' },
  
  // Communication & Engagement
  { name: 'DoubleTick', category: 'Communication & Engagement' },
  { name: 'Wati.io', category: 'Communication & Engagement' },
  { name: 'AiSensy', category: 'Communication & Engagement' },
  { name: 'Engati', category: 'Communication & Engagement' },
  { name: 'Sendy', category: 'Communication & Engagement' },
  { name: 'Mailchimp', category: 'Communication & Engagement' },
  
  // Creative & Design Tools
  { name: 'Adobe Photoshop', category: 'Creative & Design' },
  { name: 'Adobe Premiere Pro', category: 'Creative & Design' },
  { name: 'Adobe After Effects', category: 'Creative & Design' },
  { name: 'Canva', category: 'Creative & Design' },
  { name: 'Figma', category: 'Creative & Design' },
  
  // AI Tools
  { name: 'ChatGPT', category: 'AI Tools' },
  { name: 'Midjourney', category: 'AI Tools' },
  { name: 'Runway ML', category: 'AI Tools' },
  { name: 'HeyGen', category: 'AI Tools' },
  { name: 'ElevenLabs', category: 'AI Tools' },
  { name: 'Descript', category: 'AI Tools' },
];

// Split tools into two rows for alternating scroll directions
const row1Tools = tools.slice(0, Math.ceil(tools.length / 2));
const row2Tools = tools.slice(Math.ceil(tools.length / 2));

// Split tools into 4 rows for mobile view
const toolsPerRow = Math.ceil(tools.length / 4);
const row1ToolsMobile = tools.slice(0, toolsPerRow);
const row2ToolsMobile = tools.slice(toolsPerRow, toolsPerRow * 2);
const row3ToolsMobile = tools.slice(toolsPerRow * 2, toolsPerRow * 3);
const row4ToolsMobile = tools.slice(toolsPerRow * 3);

export function ToolsCarousel() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-8 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4"
        >
          Skills & Expertise
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-4 md:mb-6"
        >
          Data-Driven Performance Marketing
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-gray-600 text-center max-w-6xl mx-auto leading-relaxed"
        >
          I run Google Ads and Meta Ads with a strong command of GA4, GTM, and Meta Pixel to track user actions and optimize performance. I use AI tools, Make.com, and n8n to automate reports, speed up workflows, and get clearer insights. My core strengths are data analysis, event and conversion setup, audience research, and Excel, helping me improve campaigns with real numbers, not guesses. I also use story-led design, basic video editing, and clear content writing to create ads that communicate the right message and drive action.
        </motion.p>
      </div>

      {/* Desktop: 2 Rows */}
      <div className="hidden md:block">
        {/* Row 1 - Scrolls Right */}
        <div className="relative mb-8">
          <div className="flex gap-6 animate-scroll-right">
            {[...row1Tools, ...row1Tools, ...row1Tools].map((tool, index) => (
              <motion.div
                key={`row1-${index}`}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex-shrink-0 bg-white border-2 border-gray-900 rounded-2xl px-8 py-4 min-w-[240px] hover:border-yellow-400 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-yellow-400 flex-shrink-0">
                    {getToolIcon(tool.name)}
                  </div>
                  <p className="font-bold text-gray-900 whitespace-nowrap">
                    {tool.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolls Left */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll-left">
            {[...row2Tools, ...row2Tools, ...row2Tools].map((tool, index) => (
              <motion.div
                key={`row2-${index}`}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex-shrink-0 bg-white border-2 border-gray-900 rounded-2xl px-8 py-4 min-w-[240px] hover:border-yellow-400 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-yellow-400 flex-shrink-0">
                    {getToolIcon(tool.name)}
                  </div>
                  <p className="font-bold text-gray-900 whitespace-nowrap">
                    {tool.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: 4 Rows */}
      <div className="md:hidden">
        {/* Row 1 - Scrolls Right */}
        <div className="relative mb-4">
          <div className="flex gap-4 animate-scroll-right">
            {[...row1ToolsMobile, ...row1ToolsMobile, ...row1ToolsMobile].map((tool, index) => (
              <motion.div
                key={`mobile-row1-${index}`}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex-shrink-0 bg-white border-2 border-gray-900 rounded-2xl px-4 py-3 min-w-[180px] hover:border-yellow-400 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="text-yellow-400 flex-shrink-0">
                    {getToolIcon(tool.name)}
                  </div>
                  <p className="font-bold text-gray-900 whitespace-nowrap text-sm">
                    {tool.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolls Left */}
        <div className="relative mb-4">
          <div className="flex gap-4 animate-scroll-left">
            {[...row2ToolsMobile, ...row2ToolsMobile, ...row2ToolsMobile].map((tool, index) => (
              <motion.div
                key={`mobile-row2-${index}`}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex-shrink-0 bg-white border-2 border-gray-900 rounded-2xl px-4 py-3 min-w-[180px] hover:border-yellow-400 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="text-yellow-400 flex-shrink-0">
                    {getToolIcon(tool.name)}
                  </div>
                  <p className="font-bold text-gray-900 whitespace-nowrap text-sm">
                    {tool.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Row 3 - Scrolls Right */}
        <div className="relative mb-4">
          <div className="flex gap-4 animate-scroll-right">
            {[...row3ToolsMobile, ...row3ToolsMobile, ...row3ToolsMobile].map((tool, index) => (
              <motion.div
                key={`mobile-row3-${index}`}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex-shrink-0 bg-white border-2 border-gray-900 rounded-2xl px-4 py-3 min-w-[180px] hover:border-yellow-400 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="text-yellow-400 flex-shrink-0">
                    {getToolIcon(tool.name)}
                  </div>
                  <p className="font-bold text-gray-900 whitespace-nowrap text-sm">
                    {tool.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Row 4 - Scrolls Left */}
        <div className="relative">
          <div className="flex gap-4 animate-scroll-left">
            {[...row4ToolsMobile, ...row4ToolsMobile, ...row4ToolsMobile].map((tool, index) => (
              <motion.div
                key={`mobile-row4-${index}`}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex-shrink-0 bg-white border-2 border-gray-900 rounded-2xl px-4 py-3 min-w-[180px] hover:border-yellow-400 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="text-yellow-400 flex-shrink-0">
                    {getToolIcon(tool.name)}
                  </div>
                  <p className="font-bold text-gray-900 whitespace-nowrap text-sm">
                    {tool.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}