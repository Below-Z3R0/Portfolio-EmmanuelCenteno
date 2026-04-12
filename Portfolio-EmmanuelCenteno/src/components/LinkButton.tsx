import type { ButtonProps } from "..";

export function LinkButton({ link, img, alt, txt,className }: ButtonProps) {
  return (
    <a href={link} className={className}>
      {txt && <h1>{txt}</h1>}
      {img && <img src={img} alt={alt || "icon"} className="size-full" />}
    </a>
  );
}