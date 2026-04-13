import type { ButtonProps } from "../../types/types";

export function LinkButton({ link, img, svg: Svg, fillcolor, alt, txt,className }: ButtonProps) {
  return (
    <a href={link} className={className}  target={link?.startsWith('#') ? undefined :"_blank"} rel={link?.startsWith('#') ? undefined :"noopener noreferrer"}>
      {txt && <span>{txt}</span>}
      {img && <img src={img} alt={alt || "icon"} className="size-full" />}
      {Svg && <Svg
        className={` size-full ${fillcolor}`} />}
    </a>
  );
}