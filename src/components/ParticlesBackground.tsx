import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { TrendingUp, Target, BarChart3, Megaphone, Users, Zap, PieChart, LineChart } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'icon' | 'circle';
  icon?: any;
}

const marketingIcons = [TrendingUp, Target, BarChart3, Megaphone, Users, Zap, PieChart, LineChart];

export function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    
    // Add marketing icon particles
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 95,
        y: Math.random() * 95,
        size: Math.random() * 40 + 30,
        duration: Math.random() * 30 + 20,
        delay: Math.random() * 3,
        type: 'icon',
        icon: marketingIcons[Math.floor(Math.random() * marketingIcons.length)],
      });
    }
    
    // Add circular particles
    for (let i = 15; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 95,
        y: Math.random() * 95,
        size: Math.random() * 8 + 4,
        duration: Math.random() * 25 + 15,
        delay: Math.random() * 3,
        type: 'circle',
      });
    }
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {particles.map((particle) => {
        if (particle.type === 'icon' && particle.icon) {
          const Icon = particle.icon;
          return (
            <motion.div
              key={particle.id}
              className="absolute"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                rotate: [0, 360],
                opacity: [0.08, 0.15, 0.08],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Icon 
                size={particle.size}
                className="text-yellow-400"
                strokeWidth={1.5}
              />
            </motion.div>
          );
        }
        
        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              backgroundColor: '#facc15',
            }}
            initial={{ opacity: 0 }}
            animate={{
              x: [0, Math.random() * 80 - 40, 0],
              y: [0, Math.random() * 80 - 40, 0],
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
