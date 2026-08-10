import { Fragment } from 'react';
import { motion } from 'motion/react';
import { Clock, Database, Cpu, Send, Brain, MessageSquare, Zap, ArrowRight } from 'lucide-react';

const agents = [
  {
    index: '01',
    name: 'Boho Tales Reporting Agent',
    client: 'Boho Tales',
    summary: 'Runs every day, pulls product-level performance, and flags the winners by ROAS.',
    outcome: 'Feeds the same product-level view behind the 2.5× ROAS on Shopify, without a manual pull across three tools.',
    steps: [
      { label: 'Trigger', detail: 'Daily schedule', icon: Clock },
      { label: 'Data', detail: 'Meta Ads, Shopify, GA4', icon: Database },
      { label: 'Processing', detail: 'Ranks products by ROAS', icon: Cpu },
      { label: 'Output', detail: 'Slack message', icon: Send },
    ],
    tools: ['Google Apps Script', 'Meta Ads', 'Shopify', 'GA4', 'Slack'],
    accent: '#FF8C42',
  },
  {
    index: '02',
    name: 'Mopid Funnel Agent',
    client: 'Mopid',
    summary: 'Reads the full hiring funnel every day and writes a diagnosis, not just numbers.',
    outcome: 'Replaced a manual daily pull across two systems with one Slack report every morning.',
    steps: [
      { label: 'Trigger', detail: 'Daily schedule', icon: Clock },
      { label: 'Data', detail: 'Meta Ads API, Mopid API', icon: Database },
      { label: 'Processing', detail: 'Claude runs funnel diagnosis and SWOT', icon: Brain },
      { label: 'Output', detail: 'Slack report', icon: Send },
    ],
    tools: ['Claude API', 'Meta Ads API', 'Mopid API', 'Slack'],
    accent: '#FFD60A',
  },
  {
    index: '03',
    name: 'Simira Ads Optimizer',
    client: 'Simira Diagnostics',
    summary: 'Takes a prompt and executes the optimization directly in the ad account.',
    outcome: 'Turns a written instruction into a live campaign change without a manual trip through the Google Ads UI.',
    steps: [
      { label: 'Trigger', detail: 'Prompt instruction', icon: MessageSquare },
      { label: 'Account', detail: 'Simira Google Ads account', icon: Database },
      { label: 'Processing', detail: 'Builds and adjusts campaigns via the Google Ads API', icon: Cpu },
      { label: 'Output', detail: 'Live campaign changes', icon: Zap },
    ],
    tools: ['Google Ads API', 'Prompt-Driven'],
    accent: '#3B82F6',
  },
];

function StepFlow({ steps, accent }: { steps: typeof agents[0]['steps']; accent: string }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', gap: 8 }}>
      {steps.map((step, i) => (
        <Fragment key={step.label}>
          <div
            key={step.label}
            style={{
              flex: '1 1 140px',
              minWidth: 140,
              padding: '16px 16px',
              borderRadius: 14,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <step.icon style={{ width: 16, height: 16, color: accent }} />
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>
                {step.label}
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.4 }}>{step.detail}</p>
            </div>
          </div>
          {i < steps.length - 1 && (
            <div
              key={`${step.label}-arrow`}
              className="rotate-90 sm:rotate-0"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 20px' }}
            >
              <ArrowRight style={{ width: 16, height: 16, color: 'rgba(255,255,255,0.2)' }} />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export function AgentSystems() {
  return (
    <section id="agents" style={{ background: '#0A0A0A', padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(255,214,10,0.3), transparent)',
        }}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64 }}
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
            Agent Systems
          </p>
          <h2
            style={{
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              marginBottom: 20,
            }}
          >
            Agents that
            <br />
            <span style={{ color: '#FFD60A' }}>read and report.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 17, maxWidth: 520, lineHeight: 1.6 }}>
            Three systems running right now, pulling data, doing the analysis, and reporting on it, so it does not need to happen manually every day.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${agent.accent}, transparent)`,
                  borderRadius: '20px 20px 0 0',
                }}
              />

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>{agent.index}</span>
                  <div>
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>{agent.name}</h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{agent.client}</p>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, maxWidth: 560 }}>{agent.summary}</p>

              <StepFlow steps={agent.steps} accent={agent.accent} />

              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: 560 }}>
                <span style={{ color: agent.accent, fontWeight: 700 }}>Result: </span>
                {agent.outcome}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {agent.tools.map(tool => (
                  <span
                    key={tool}
                    style={{
                      fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 8,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      color: 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
