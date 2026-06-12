import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '../componentsindex';

interface SuccessMessageProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  autoCloseMs?: number;
}

/**
 * SuccessMessage — Modal/toast con checkmark animado
 * Reemplaza alert() nativo con UI profesional
 */
export function SuccessMessage({
  show,
  onClose,
  title = '¡Mensaje enviado!',
  message = 'Gracias por contactarme. Te responderé lo antes posible.',
  autoCloseMs = 5000,
}: SuccessMessageProps) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!show || autoCloseMs === 0) return;

    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 100 - (elapsed / autoCloseMs) * 100);
      setProgress(remaining);
      if (remaining <= 0) {
        clearInterval(interval);
        onClose();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [show, autoCloseMs, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-page/80 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl bg-card border border-accent/40 shadow-2xl overflow-hidden"
          >
            {/* Glow decorativo de fondo */}
            <div
              className="absolute inset-0 opacity-30 blur-2xl"
              style={{
                background:
                  'radial-gradient(circle at top, var(--glow-accent) 0%, transparent 70%)',
              }}
            />

            <div className="relative p-8 flex flex-col items-center text-center gap-5">
              {/* Checkmark animado */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                  delay: 0.1,
                }}
                className="size-20 rounded-full bg-accent-soft border-2 border-accent flex items-center justify-center"
              >
                <svg
                  className="size-10 text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <motion.path
                    d="M5 13l4 4L19 7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                  />
                </svg>
              </motion.div>

              {/* Textos */}
              <div className="space-y-2">
                <motion.h3
                  id="success-title"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-2xl font-bold text-main tracking-tight"
                >
                  {title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="text-dim text-sm leading-relaxed"
                >
                  {message}
                </motion.p>
              </div>

              {/* Botón de cierre */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <Button
                  txt="Cerrar"
                  onClick={onClose}
                  className="h-11 px-6 rounded-xl bg-accent text-page font-semibold hover:opacity-90 transition-opacity"
                />
              </motion.div>

              {/* Progress bar de auto-dismiss */}
              {autoCloseMs > 0 && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-surface">
                  <motion.div
                    initial={{ width: '100%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.05, ease: 'linear' }}
                    className="h-full bg-accent"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
