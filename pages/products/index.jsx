import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Zap, Bot, Cake, BarChart3 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}>{children}</motion.div>
  );
}

const products = [
  {
    slug: 'treva-os',
    image: '/images/1.svg',
    name: 'Treva OS',
    tagline: 'Your Brand\'s Operating System',
    desc: 'An all-in-one intelligent business platform. Manage campaigns, track analytics, schedule content, handle CRM, and view your brand health dashboard  all in one place. Built for modern agencies and growth-stage brands.',
    status: 'Coming Soon',
    color: '#29C8D5',
    features: ['Campaign Manager', 'Analytics Dashboard', 'CRM Integration', 'Content Scheduler', 'Brand Health Score', 'AI Insights Engine'],
  },
  {
    slug: 'treva-agent',
    image: '/images/2.svg',
    name: 'Treva Agent',
    tagline: 'Your 24/7 Autonomous Marketing Agent',
    desc: 'An AI agent that qualifies leads, monitors campaigns, pauses underperforming ads, sends follow-up emails, and books meetings all without human intervention. The closest thing to a tireless marketing team member.',
    status: 'Coming Soon',
    color: '#7C3AED',
    features: ['Lead Qualification', 'Auto Ad Optimization', 'Meeting Booking', 'Email Sequences', 'Campaign Monitoring', '24/7 Operation'],
  },
  {
    slug: 'make-my-cake',
    image: '/images/3.svg',
    name: 'Make My Cake',
    tagline: 'Artisan Cakes, Delivered to Your Door',
    desc: 'A two-sided marketplace connecting cake lovers with local artisan bakers. Smart discovery by location and occasion, seamless ordering, real-time tracking. Turning passion baking into a scalable business.',
    status: 'Coming Soon',
    color: '#F59E0B',
    features: ['Baker Discovery', 'Custom Cake Orders', 'Real-time Tracking', 'Payment Gateway', 'Baker Dashboard', 'Review System'],
  },
  {
    slug: 'treva-eams',
    image: '/images/4.svg',
    name: 'Treva EAMS',
    tagline: 'Enterprise Analytics & Management Suite',
    desc: 'A powerful enterprise-grade analytics and asset management platform. Unified reporting across all marketing channels, asset libraries, team collaboration, and predictive performance modeling for data-driven brands.',
    status: 'Coming Soon',
    color: '#10B981',
    features: ['Unified Analytics', 'Asset Management', 'Team Collaboration', 'Predictive Models', 'Custom Reports', 'Multi-brand Support'],
  },
];

export default function Products() {
  return (
    <>
      <SEOHead
        title="Products Treva OS, Treva Agent, Make My Cake & EAMS"
        description="Explore Treva's upcoming product suite: Treva OS business platform, Treva Agent AI marketing assistant, Make My Cake marketplace, and Treva EAMS analytics suite."
        url="https://treva.in/products"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#000000] relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(41,200,213,0.05), transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white mt-2 mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            Products for the <span className="teal-gradient-text">Future</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-[#8A9AB0] text-xl max-w-2xl mx-auto">
            Beyond services we build products that solve real problems. Each one born from a pain point we experienced while serving our clients.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {products.map(({ slug, image, name, tagline, desc, status, color, features }, i) => (
            <FadeIn key={slug} delay={i * 0.08}>
              <div className="bg-[#080C10] border border-[rgba(41,200,213,0.1)] rounded-2xl overflow-hidden card-glow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                  {/* LEFT  Image */}
                  <div className="relative overflow-hidden bg-[#0D1117]" style={{ minHeight: '320px' }}>
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <span className="absolute top-4 left-4 z-10 text-xs font-700 px-3 py-1 rounded-full bg-white text-black">
                      {status}
                    </span>
                  </div>

                  {/* RIGHT  Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <p className="text-xs font-600 uppercase tracking-widest mb-2" style={{ color }}>
                      {name}
                    </p>
                    <h3 className="font-black text-white text-2xl mb-3">{tagline}</h3>
                    <p className="text-[#8A9AB0] text-sm leading-relaxed mb-8">{desc}</p>

                    <h4 className="text-white font-600 text-sm mb-4 uppercase tracking-wider">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2 mb-8">
                      {features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                          <span className="text-[#8A9AB0] text-sm">{f}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/products/${slug}`}
                      className="btn-primary w-fit"
                      style={{ background: color, color: '#000' }}
                    >
                      Learn More & Join Waitlist
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}