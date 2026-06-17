import { useEffect, useRef, type CSSProperties } from 'react';

type BackdropStyle = CSSProperties & {
  '--mouse-x': string;
  '--mouse-y': string;
  '--reveal-opacity': string;
  '--scroll-shift-x': string;
  '--scroll-shift-y': string;
  '--scroll-shift-soft-x': string;
  '--scroll-shift-soft-y': string;
};

export default function InteractiveBackdrop() {
  const layerRef = useRef<HTMLDivElement | null>(null);
  const mouseFrameRef = useRef(0);
  const scrollFrameRef = useRef(0);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) {
      return;
    }
    const target = layer;

    function writeMouse(event: PointerEvent) {
      target.style.setProperty('--mouse-x', `${event.clientX}px`);
      target.style.setProperty('--mouse-y', `${event.clientY}px`);
      target.style.setProperty('--reveal-opacity', '1');
    }

    function writeScroll() {
      const shiftY = window.scrollY * -0.11;
      const shiftX = Math.sin(window.scrollY * 0.004) * 18;

      target.style.setProperty('--scroll-shift-x', `${shiftX}px`);
      target.style.setProperty('--scroll-shift-y', `${shiftY}px`);
      target.style.setProperty('--scroll-shift-soft-x', `${shiftX * 0.3}px`);
      target.style.setProperty('--scroll-shift-soft-y', `${shiftY * 0.3}px`);
    }

    function reveal(event: PointerEvent) {
      window.cancelAnimationFrame(mouseFrameRef.current);
      mouseFrameRef.current = window.requestAnimationFrame(() => {
        writeMouse(event);
      });
    }

    function scroll() {
      window.cancelAnimationFrame(scrollFrameRef.current);
      scrollFrameRef.current = window.requestAnimationFrame(writeScroll);
    }

    function hide() {
      target.style.setProperty('--reveal-opacity', '0');
    }

    writeScroll();
    window.addEventListener('pointermove', reveal, { passive: true });
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('pointerleave', hide);
    document.addEventListener('visibilitychange', hide);

    return () => {
      window.cancelAnimationFrame(mouseFrameRef.current);
      window.cancelAnimationFrame(scrollFrameRef.current);
      window.removeEventListener('pointermove', reveal);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('pointerleave', hide);
      document.removeEventListener('visibilitychange', hide);
    };
  }, []);

  const style: BackdropStyle = {
    '--mouse-x': '50vw',
    '--mouse-y': '40vh',
    '--reveal-opacity': '0',
    '--scroll-shift-x': '0px',
    '--scroll-shift-y': '0px',
    '--scroll-shift-soft-x': '0px',
    '--scroll-shift-soft-y': '0px',
  };

  return (
    <div ref={layerRef} className="interactive-backdrop" style={style} aria-hidden="true">
      <div className="backdrop-base" />
      <div className="backdrop-color-field" />
      <div className="backdrop-reveal-lines" />
      <div className="backdrop-grid" />
      <div className="backdrop-vignette" />
    </div>
  );
}
