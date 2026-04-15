import type { TecnologiesConfig } from '../../index'

export function TecnologiesCard({ name, icon: Icon,  color = "#3b82f6", cardSize, imgSize, bar }: TecnologiesConfig) {
  return (
    <div className={`${cardSize} w-32 group relative flex flex-col items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl transition-all duration-300 hover:bg-slate-800/80 hover:-translate-y-2 shadow-xl`}
      style={{ '--hover-color': color } as React.CSSProperties}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity rounded-3xl blur-2xl"
        style={{ backgroundColor: color }}
      />

      <div className={` ${imgSize !== null ? '' : 'relative mb-3 rounded-2xl group-hover:scale-110 transition-transform duration-300'} `}>
        <Icon
          className={`size-full`}
          style={{ color: color,filter: `drop-shadow(0 0 12px ${color}66)` }}
        />
      </div>

      {name && <h3 className="text-sm font-semibold text-slate-200 tracking-tight group-hover:text-white transition-colors">
        {name}
      </h3>}

      {bar && <div
        className="absolute bottom-0 h-1 w-0 group-hover:w-1/2 transition-all duration-500 rounded-full"
        style={{ backgroundColor: color }}
      />}
    </div>
  );
}
