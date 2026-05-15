import { motion } from 'motion/react';
import {
  Megaphone, BarChart3, Zap, MessageSquare, Palette, Sparkles,
  Target, LineChart, Workflow, Mail, Wand2,
} from 'lucide-react';

const getToolIcon = (name: string) => {
  if (name.includes('Ads')) return <Megaphone className="w-4 h-4" />;
  if (name.includes('Analytics') || name.includes('Tag Manager') || name.includes('Looker') || name.includes('Charts'))
    return <BarChart3 className="w-4 h-4" />;
  if (name.includes('Excel') || name.includes('Sheets')) return <LineChart className="w-4 h-4" />;
  if (name.includes('Zapier') || name.includes('n8n') || name.includes('Make.com')) return <Zap className="w-4 h-4" />;
  if (name.includes('Customer') || name.includes('Meritto') || name.includes('LeadSquared')) return <Workflow className="w-4 h-4" />;
  if (name.includes('Tick') || name.includes('Wati') || name.includes('Sensy') || name.includes('Engati'))
    return <MessageSquare className="w-4 h-4" />;
  if (name.includes('Sendy') || name.includes('Mailchimp')) return <Mail className="w-4 h-4" />;
  if (name.includes('Adobe') || name.includes('Canva') || name.includes('Figma')) return <Palette className="w-4 h-4" />;
  if (name.includes('ChatGPT') || name.includes('Midjourney') || name.includes('Runway') || name.includes('HeyGen') || name.includes('ElevenLabs') || name.includes('Descript'))
    return <Sparkles className="w-4 h-4" />;
  return <Target className="w-4 h-4" />;
};

const tools = [
  { name: 'Google Ads', category: 'Ads' },
  { name: 'Meta Ads', category: 'Ads' },
  { name: 'LinkedIn Ads', category: 'Ads' },
  { name: 'Reddit Ads', category: 'Ads' },
  { name: 'Google Analytics 4', category: 'Analytics' },
  { name: 'Google Tag Manager', category: 'Analytics' },
  { name: 'Looker Studio', category: 'Analytics' },
  { name: 'MongoDB Charts', category: 'Analytics' },
  { name: 'Microsoft Excel', category: 'Analytics' },
  { name: 'Google Sheets', category: 'Analytics' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'n8n', category: 'Automation' },
  { name: 'Make.com', category: 'Automation' },
  { name: 'Customer.io', category: 'Automation' },
  { name: 'Meritto', category: 'Automation' },
  { name: 'LeadSquared', category: 'Automation' },
  { name: 'DoubleTick', category: 'Comms' },
  { name: 'Wati.io', category: 'Comms' },
  { name: 'AiSensy', category: 'Comms' },
  { name: 'Engati', category: 'Comms' },
  { name: 'Sendy', category: 'Comms' },
  { name: 'Mailchimp', category: 'Comms' },
  { name: 'Adobe Photoshop', category: 'Creative' },
  { name: 'Adobe Premiere Pro', category: 'Creative' },
  { name: 'Adobe After Effects', category: 'Creative' },
  { name: 'Canva', category: 'Creative' },
  { name: 'Figma', category: 'Creative' },
  { name: 'ChatGPT', category: 'AI' },
  { name: 'Midjourney', category: 'AI' },
  { name: 'Runway ML', category: 'AI' },
  { name: 'HeyGen', category: 'AI' },
  { name: 'ElevenLabs', category: 'AI' },
  { name: 'Descript', category: 'AI' },
];

const row1 = tools.slice(0, Math.ceil(tools.length / 2));
const row2 = tools.slice(Math.ceil(tools.length / 2));

function ToolPill({ tool }: { tool: { name: string; category: string } }) {
  return (
    <div
      style={{
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 20px',
        borderRadius: 999,
        border: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(255,255,255,0.04)',
        minWidth: 180,
        transition: 'all 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(255,214,10,0.4)';
        el.style.background = 'rgba(255,214,10,0.06)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(255,255,255,0.1)';
        el.style.background = 'rgba(255,255,255,0.04)';
      }}
    >
      <span style={{ color: '#FFD60A', flexShrink: 0 }}>{getToolIcon(tool.name)}</span>
      <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 600, whiteSpace: 'nowrap' }}>
        {tool.name}
      </span>
    </div>
  );
}

export function ToolsCarousel() {
  return (
    <section style={{ background: '#0A0A0A', padding: '80px 0', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', marginBottom: 56 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            style={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: 12,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: 16,
            }}
          >
            Tools & Stack
          </p>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            The tech behind
            <br />
            <span style={{ color: '#FFD60A' }}>every campaign.</span>
          </h2>
        </motion.div>
      </div>

      {/* Row 1 – scrolls right */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', gap: 12 }} className="animate-scroll-right">
          {[...row1, ...row1, ...row1].map((tool, i) => (
            <ToolPill key={`r1-${i}`} tool={tool} />
          ))}
        </div>
      </div>

      {/* Row 2 – scrolls left */}
      <div>
        <div style={{ display: 'flex', gap: 12 }} className="animate-scroll-left">
          {[...row2, ...row2, ...row2].map((tool, i) => (
            <ToolPill key={`r2-${i}`} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
