import { useEffect, useRef, useState } from 'react';

/**
 * useInView — detecta cuándo un elemento entra al viewport.
 *
 * @param threshold — 0 a 1, porcentaje del elemento visible para disparar (default 0.1)
 * @param once — si es true, solo dispara la primera vez (default true)
 * @returns [ref, inView] — ref para asignar al elemento, inView boolean
 */
export function useInView<T extends Element = HTMLDivElement>(
  threshold = 0.1,
  once = true
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  return [ref, inView];
}
