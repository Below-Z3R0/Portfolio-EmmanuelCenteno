/**
 * BackgroundFX — Fondo decorativo no interactivo
 *
 * Se monta UNA vez en App.tsx con `position: fixed; inset: 0; z-index: -1`.
 * Genera profundidad visual sutil: glows radiales + grid adaptativo al tema.
 * NO bloquea clicks (pointer-events-none).
 *
 * Light mode usa mix-blend-mode: multiply para que los glows se integren
 * naturalmente al fondo claro. Dark mode usa blend normal.
 */
export function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
    >
      {/* Grid de patrón — adaptativo por tema */}
      <div
        className="absolute inset-0 bg-grid-light dark:bg-grid-dark"
        aria-hidden="true"
      />

      {/* Glow 1: Púrpura — esquina superior izquierda */}
      <div
        className="absolute -top-40 -left-40 size-[40rem] rounded-full blur-3xl opacity-70 dark:opacity-50 mix-blend-multiply dark:mix-blend-normal"
        style={{
          background:
            'radial-gradient(circle, var(--glow-accent) 0%, transparent 70%)',
        }}
      />

      {/* Glow 2: Azul — esquina inferior derecha (variedad cromática) */}
      <div
        className="absolute -bottom-40 -right-40 size-[36rem] rounded-full blur-3xl opacity-70 dark:opacity-50 mix-blend-multiply dark:mix-blend-normal"
        style={{
          background:
            'radial-gradient(circle, var(--glow-blue) 0%, transparent 70%)',
        }}
      />

      {/* Glow 3: Púrpura/Warning — centro derecha */}
      <div
        className="absolute top-1/3 -right-60 size-[30rem] rounded-full blur-3xl opacity-60 dark:opacity-40 mix-blend-multiply dark:mix-blend-normal"
        style={{
          background:
            'radial-gradient(circle, var(--glow-accent) 0%, transparent 70%)',
        }}
      />

      {/* Glow 4: Warning sutil — centro izquierda */}
      <div
        className="absolute top-2/3 -left-60 size-[28rem] rounded-full blur-3xl opacity-60 dark:opacity-30 mix-blend-multiply dark:mix-blend-normal"
        style={{
          background:
            'radial-gradient(circle, var(--glow-warning) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
