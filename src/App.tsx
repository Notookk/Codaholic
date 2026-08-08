import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Camera, CircleDot, GitBranch, Send } from 'lucide-react';

const oceanImage = '/newback.jpg';

const highlights = [
  { number: '01', title: 'New Tech', text: 'Exploring cutting-edge solutions.' },
  { number: '02', title: 'Coding', text: 'Clean, scalable architectures.' },
  { number: '03', title: 'Building', text: 'From concept to deployment.' },
];

const services = [
  { number: '01', title: 'Websites', text: 'Dynamic and responsive web applications.', tint: 'from-cyan-300/20' },
  { number: '02', title: 'Apps', text: 'High-performance mobile and desktop apps.', tint: 'from-blue-300/20' },
  { number: '03', title: 'Telegram Bots', text: 'Advanced automation and moderation bots.', tint: 'from-sky-200/20' },
];

function GlassCard({ children, className = '', backClassName = '' }: { children: ReactNode; className?: string; backClassName?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className={`absolute inset-0 translate-x-3 translate-y-3 rounded-[inherit] border border-cyan-100/20 bg-cyan-950/45 ${backClassName}`} aria-hidden="true" />
      <div className="relative h-full overflow-hidden rounded-[inherit] border border-white/25 bg-white/[0.09] shadow-[0_24px_80px_rgba(0,10,28,0.35)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyan-400/[0.04] mix-blend-overlay" />
        {children}
      </div>
    </div>
  );
}

function App() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
  };

  const smokyTitle = {
    hidden: { opacity: 0, filter: 'blur(28px)', scale: 1.06, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
      y: 0,
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const viewportOnce = { once: true, amount: 0.3 } as const;

  return (
    <main className="relative min-h-screen overflow-hidden text-white selection:bg-cyan-300 selection:text-[#02111d]">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#020a14]" />
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${oceanImage}")` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(23,147,219,.28),transparent_34%),linear-gradient(180deg,rgba(1,9,18,.35)_0%,rgba(2,10,20,.52)_42%,rgba(1,6,13,.78)_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(156,226,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(156,226,255,.25)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex items-center justify-between border-b border-white/10 py-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55"
        >
          <span>First edition</span>
          <span>2026</span>
        </motion.header>

        <section className="flex min-h-[82vh] flex-col items-center justify-center py-24 text-center sm:min-h-[720px]">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-center">
            <motion.p variants={itemVariant} className="mb-5 text-xs font-semibold uppercase tracking-[0.65em] text-cyan-200/80 sm:text-sm">
              Team
            </motion.p>
            <motion.h1
              variants={smokyTitle}
              className="max-w-5xl text-[clamp(4rem,14vw,10.8rem)] font-semibold leading-[0.82] tracking-[-0.08em] text-white [text-shadow:0_0_55px_rgba(109,213,255,.35)]"
            >
              <span className="bg-gradient-to-b from-white via-white to-cyan-200 bg-clip-text text-transparent">𝖢 ᥆ ᴅ ⋏ ʜ ᧐ ʟ ɪ c </span>
            </motion.h1>
            <motion.p variants={itemVariant} className="mt-9 text-sm tracking-[0.12em] text-cyan-100/60 sm:text-base">
              Innovating the future of tech.
            </motion.p>
          </motion.div>
          <motion.a
            href="#highlights"
            aria-label="Scroll to highlights"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
            className="group mt-16 flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 text-cyan-100 shadow-[0_0_32px_rgba(68,201,255,.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/70 hover:bg-cyan-300/15"
          >
            <motion.span
              animate={reduceMotion ? {} : { y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="block"
            >
              <ArrowDown size={18} className="transition-transform duration-300 group-hover:translate-y-1" />
            </motion.span>
          </motion.a>
        </section>

        <motion.section
          id="highlights"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="pb-32"
        >
          <motion.div variants={itemVariant} className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">
            <CircleDot size={12} className="text-cyan-300" /> First rules
          </motion.div>
          <motion.div variants={fadeUp}>
            <GlassCard className="rounded-[2rem] sm:rounded-[2.5rem]" backClassName="border-cyan-300/20 bg-cyan-600/10">
              <div className="grid divide-y divide-white/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {highlights.map((item) => (
                  <motion.div
                    key={item.number}
                    variants={itemVariant}
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="group p-7 sm:p-9 lg:p-12"
                  >
                    <span className="text-5xl font-light tracking-[-0.07em] text-white/90 transition-colors group-hover:text-cyan-200 sm:text-6xl">{item.number}</span>
                    <h2 className="mt-8 text-xl font-medium tracking-[-0.03em] text-white">{item.title}</h2>
                    <p className="mt-2 max-w-[17ch] text-sm leading-6 text-white/50">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mx-auto max-w-3xl pb-32 text-center sm:pb-40"
        >
          <motion.p variants={itemVariant} className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-200/60">Our philosophy</motion.p>
          <motion.h2 variants={fadeUp} className="text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">
            A TECH <span className="text-cyan-200">SPACE.</span>
          </motion.h2>
          <motion.p variants={itemVariant} className="mt-5 text-lg text-white/75">Unique and original</motion.p>
          <motion.p variants={itemVariant} className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/45">
            A team dedicated to pushing boundaries in the digital depths.
          </motion.p>
          <motion.a
            variants={itemVariant}
            href="https://github.com/Notookk"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mx-auto mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold text-white backdrop-blur-lg transition hover:border-cyan-200/60 hover:bg-cyan-200/10"
          >
            Explore Projects <ArrowUpRight size={15} />
          </motion.a>
        </motion.section>

        <motion.section
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="pb-36"
        >
          <motion.div variants={itemVariant} className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-200/60">What we do</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Built for the deep end.</h2>
            </div>
            <span className="hidden text-xs text-white/35 sm:block">03 services</span>
          </motion.div>
          <div className="grid gap-7 md:grid-cols-3">
            {services.map((service) => (
              <motion.div key={service.number} variants={itemVariant} whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
                <GlassCard className="aspect-square rounded-[1.75rem]" backClassName="rotate-2 border-white/15">
                  <div className={`flex h-full flex-col justify-between bg-gradient-to-br ${service.tint} via-transparent to-transparent p-7 sm:p-8`}>
                    <div className="flex items-start justify-between">
                      <span className="text-5xl font-light tracking-[-0.08em] text-white/85">{service.number}</span>
                      <ArrowUpRight size={20} className="text-cyan-200/70 transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium tracking-[-0.04em]">{service.title}</h3>
                      <p className="mt-3 max-w-[22ch] text-sm leading-6 text-white/50">{service.text}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="border-t border-white/10 py-14 sm:py-20"
        >
          <motion.div variants={itemVariant} className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
            <span>Administration</span>
            <span>2026</span>
          </motion.div>
          <div className="flex flex-col items-center py-16 text-center">
            <motion.div
              variants={itemVariant}
              whileHover={{ scale: 1.06, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 200, damping: 14 }}
              className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-200/60 bg-white/10 shadow-[0_0_50px_rgba(89,211,255,.3)] backdrop-blur-xl"
            >
              <img
                src="/morningpfp.jpg"
                alt="Morningstar profile picture"
                className="h-25 w-25 rounded-full object-cover"
              />
            </motion.div>
            <motion.h2 variants={itemVariant} className="mt-8 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              𝖬 ᥆ ɤ ᥒ 𝛊 ᥒ G `᥉ t ᥲ ɾ 
            </motion.h2>
            <motion.p variants={itemVariant} className="mt-2 text-sm text-cyan-200/60">Developer</motion.p>
            <motion.div variants={itemVariant} className="mt-7 flex flex-wrap justify-center gap-3">
              <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }} className="social-pill" href="https://t.me/Xazoc"><Send size={14} /> Telegram</motion.a>
              <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }} className="social-pill" href="https://github.com/Notookk"><GitBranch size={14} /> GitHub</motion.a>
              <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }} className="social-pill" href="https://www.instagram.com/xotik.ari"><Camera size={14} /> Instagram</motion.a>
            </motion.div>
          </div>
        </motion.section>

        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="border-t border-white/10 py-24 text-center sm:py-32"
        >
          <motion.p variants={itemVariant} className="text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-200/60">Stay connected</motion.p>
          <motion.h2
            variants={{
              hidden: { opacity: 0, filter: 'blur(18px)', y: reduceMotion ? 0 : 20 },
              visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const } },
            }}
            className="mt-5 text-5xl font-semibold tracking-[-0.07em] text-white [text-shadow:0_0_40px_rgba(93,211,255,.35)] sm:text-7xl"
          >
            DON&apos;T MISS IT
          </motion.h2>
          <motion.p variants={itemVariant} className="mt-3 text-2xl text-cyan-100">Join us</motion.p>
          <motion.p variants={itemVariant} className="mx-auto mt-5 max-w-sm text-sm leading-6 text-white/45">
            Don&apos;t miss our latest releases, what are you waiting for, join us
          </motion.p>
          <motion.div variants={itemVariant} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <motion.a whileHover={{ y: -4, scale: 1.03 }} whileTap={{ scale: 0.97 }} className="glass-button" href="https://t.me/Your_support_channel">Codaholic Channel <ArrowUpRight size={15} /></motion.a>
            <motion.a whileHover={{ y: -4, scale: 1.03 }} whileTap={{ scale: 0.97 }} className="glass-button" href="https://t.me/x_support_chat">Support Channel <ArrowUpRight size={15} /></motion.a>
          </motion.div>
          <p className="mt-20 text-[10px] uppercase tracking-[0.3em] text-white/25">Codaholic — digital depths, 2026</p>
        </motion.footer>
      </div>
    </main>
  );
}

export default App;
