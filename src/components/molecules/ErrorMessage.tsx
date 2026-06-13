import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components';
import type { ErrorMessageProps } from '../types';

/**
 * ErrorMessage — Modal de error con X animado
 * Complemento de SuccessMessage
 */
export function ErrorMessage({
  show,
  onClose,
  onRetry,
  title = 'Algo salió mal',
  message = 'No pude enviar tu mensaje. Por favor intenta de nuevo.',
}: ErrorMessageProps) {
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
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="error-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl bg-card border border-warning/40 shadow-2xl overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-30 blur-2xl"
              style={{
                background:
                  'radial-gradient(circle at top, var(--glow-warning) 0%, transparent 70%)',
              }}
            />

            <div className="relative p-8 flex flex-col items-center text-center gap-5">
              {/* X animado */}
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="size-20 rounded-full bg-warning-soft border-2 border-warning flex items-center justify-center"
              >
                <svg
                  className="size-10 text-warning"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  viewBox="0 0 24 24"
                >
                  <motion.path
                    d="M6 6l12 12M18 6L6 18"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
                  />
                </svg>
              </motion.div>

              <div className="space-y-2">
                <motion.h3
                  id="error-title"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-2xl font-bold text-main tracking-tight"
                >
                  {title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-dim text-sm leading-relaxed"
                >
                  {message}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex gap-3"
              >
                {onRetry && (
                  <Button
                    txt="Reintentar"
                    onClick={onRetry}
                    className="h-11 px-6 rounded-xl bg-accent text-page font-semibold hover:opacity-90 transition-opacity"
                  />
                )}
                <Button
                  txt="Cerrar"
                  onClick={onClose}
                  className="h-11 px-6 rounded-xl bg-surface border border-border-subtle text-main hover:border-accent transition-colors"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
