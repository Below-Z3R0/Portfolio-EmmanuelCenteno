import { AlertCircle, RefreshCcw, Home } from "lucide-react";
import type { ErrorStateProps } from '../types';

export function ErrorPage ({
  message = "Hubo un error al cargar los datos del portafolio.",
  onRetry
}: ErrorStateProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-card border border-border-subtle rounded-2xl p-8 shadow-xl flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in duration-300">
        
        {/* Icono con resplandor de advertencia */}
        <div className="relative">
          <div className="absolute inset-0 bg-warning-soft blur-2xl rounded-full" />
          <div className="relative bg-warning-soft p-4 rounded-full border border-warning/20">
            <AlertCircle className="w-12 h-12 text-warning" />
          </div>
        </div>

        {/* Texto informativo */}
        <div className="space-y-2">
          <h2 className="text-2xl font-display font-bold text-main">
            ¡Ups! Algo salió mal
          </h2>
          <p className="text-dim text-sm leading-relaxed">
            {message}
          </p>
        </div>

        {/* Acciones */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          {onRetry && (
            <button
              onClick={onRetry}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-accent/20"
            >
              <RefreshCcw className="w-4 h-4" />
              Reintentar
            </button>
          )}
          
          <button
            onClick={() => window.location.href = '/'}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-surface border border-border-subtle text-main rounded-lg font-medium hover:bg-card transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            Inicio
          </button>
        </div>

        {/* Detalle sutil de decoración */}
        <div className="pt-4">
          <div className="h-1 w-12 bg-border-glow-warning/30 rounded-full mx-auto" />
        </div>
      </div>
    </div>
  );
};