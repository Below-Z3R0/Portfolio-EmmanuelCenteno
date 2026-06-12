import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

// ===========================================
// Easing curves & motion presets
// ===========================================
export const ease = [0.25, 0.1, 0.25, 1] as const;
export const easeOut = [0.16, 1, 0.3, 1] as const;
export const spring = { type: 'spring' as const, stiffness: 80, damping: 20 };

// ===========================================
// Animation props
// ===========================================
interface AnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

interface SlideProps extends AnimationProps {
  x?: number;
}

interface PopProps extends AnimationProps {
  scale?: number;
}

// ===========================================
// 1. FadeUp — entrada estándar de secciones y cards
// ===========================================
export function FadeUp({ children, delay = 0, className = '' }: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.7, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===========================================
// 2. FadeIn — solo opacidad, sin traslación (texto/párrafos)
// ===========================================
export function FadeIn({ children, delay = 0, className = '' }: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.9, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===========================================
// 3. SlideInLeft / SlideInRight — para layouts bipartitos
// ===========================================
export function SlideInLeft({ children, delay = 0, x = -40, className = '' }: SlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideInRight({ children, delay = 0, x = 40, className = '' }: SlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===========================================
// 4. StaggerContainer + StaggerItem — para grids
// ===========================================
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export function StaggerContainer({ children, className = '' }: AnimationProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: AnimationProps) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

// ===========================================
// 5. MiniTitleAnimation — eyebrow con línea expansiva
// ===========================================
export function MiniTitleAnimation({ children, className = '' }: AnimationProps) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ===========================================
// 6. PopIn — para badges y status
// ===========================================
export function PopIn({ children, delay = 0, scale = 0.8, className = '' }: PopProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ ...spring, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===========================================
// 7. Pulse — loop infinito (para dot "disponible")
// ===========================================
export function Pulse({ children, className = '' }: AnimationProps) {
  return (
    <motion.div
      animate={{ scale: [1, 1.15, 1], opacity: [1, 0.7, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===========================================
// 8. LoadingDots — 3 dots animados
// ===========================================
const loadingDot: Variants = {
  initial: { y: 0, opacity: 0.4 },
  animate: { y: -4, opacity: 1 },
};

export function LoadingDots({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`} aria-label="Cargando">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          variants={loadingDot}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
          className="inline-block size-1.5 rounded-full bg-current"
        />
      ))}
    </span>
  );
}

// ===========================================
// 9. ExpandLine — línea que se expande al entrar
// ===========================================
export function ExpandLine({ className = '' }: { className?: string }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`h-px bg-border-subtle ${className}`}
      style={{
        width: visible ? '100%' : '0%',
        transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    />
  );
}

// ===========================================
// 10. scrollToSection — scroll suave
// ===========================================
export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// ===========================================
// 11. useReveal — hook con IntersectionObserver
// ===========================================
function useReveal(threshold = 0.1): [React.MutableRefObject<null>, boolean] {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

// ===========================================
// Re-export AnimatePresence for convenience
// ===========================================
export { AnimatePresence, motion };
