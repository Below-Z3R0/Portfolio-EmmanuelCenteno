/**
 * BackgroundFX — Fondo decorativo no interactivo
 *
 * Se monta UNA vez en App.tsx con `position: fixed; inset: 0; z-index: -1`.
 * Genera profundidad visual sutil: glows radiales + grid de puntos.
 * NO bloquea clicks (pointer-events-none).
 */
export function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
    >
      {/* Glow 1: Púrpura — esquina superior izquierda */}
      <div
        className="absolute -top-40 -left-40 size-160 rounded-full blur-3xl opacity-50"
        style={{
          background:
            'radial-gradient(circle, var(--glow-accent) 0%, transparent 70%)',
        }}
      />

      {/* Glow 2: Púrpura/Warning — esquina inferior derecha */}
      <div
        className="absolute -bottom-40 -right-40 size-144 rounded-full blur-3xl opacity-40"
        style={{
          background:
            'radial-gradient(circle, var(--glow-accent) 0%, transparent 70%)',
        }}
      />

      {/* Glow 3: Warning sutil — centro derecha */}
      <div
        className="absolute top-1/2 -right-60 size-120 rounded-full blur-3xl opacity-30"
        style={{
          background:
            'radial-gradient(circle, var(--glow-warning) 0%, transparent 70%)',
        }}
      />

      {/* Grid de puntos sutil */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          color: 'var(--text-main)',
        }}
      />
    </div>
  );
}
