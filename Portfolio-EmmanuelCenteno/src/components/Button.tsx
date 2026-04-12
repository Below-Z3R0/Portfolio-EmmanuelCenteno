import type { ButtonProps } from "..";
export function Button({img, txt, className, alt, type}: ButtonProps) {
  return (
    <button className={className} type={type}>
        {img && <img src = {img} alt={alt || "icon"} className="size-full"/>}
        {txt && <h1>{txt}</h1>}
    </button>
  );
}