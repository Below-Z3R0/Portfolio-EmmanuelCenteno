import type { ButtonProps } from "../../types/types";
export function Button({ img, txt, svg: Svg, fillcolor, className, alt, type = 'button', onClick }: ButtonProps) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {img && <img src={img} alt={alt || "icon"} className="size-full" />}
      {txt && <span>{txt}</span>}
      {Svg && <Svg
        className={` size-full ${fillcolor}`} />}
    </button>
  );
}