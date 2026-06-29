"use client";

import { useEffect, useRef } from "react";

const chars = "@#$%&*+=-:. ";

export default function AsciiPortrait() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let mouse = {
      x: -1000,
      y: -1000,
    };

    const particles: {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      char: string;
    }[] = [];

    const img = new Image();
    img.src = "/roshanProfile.png";

    img.onload = () => {
      const w = 100;
      const h = 120;

      const off = document.createElement("canvas");
      off.width = w;
      off.height = h;

      const offCtx = off.getContext("2d")!;
      offCtx.drawImage(img, 0, 0, w, h);

      const data = offCtx.getImageData(0, 0, w, h).data;

      canvas.width = 1400;
      canvas.height = 1400;

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const idx = (y * w + x) * 4;

          const brightness =
            (data[idx] + data[idx + 1] + data[idx + 2]) / 3;

          if (brightness < 240) {
            const char =
              chars[
                Math.floor(
                  (brightness / 255) * (chars.length - 1)
                )
              ];

            particles.push({
              x: x * 7,
              y: y * 7,
              baseX: x * 7,
              baseY: y * 7,
              char,
            });
          }
        }
      }

      animate();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 80) {
          const force = (80 - dist) / 80;

          p.x -= dx * force * 0.08;
          p.y -= dy * force * 0.08;
        }

        p.x += (p.baseX - p.x) * 0.08;
        p.y += (p.baseY - p.y) * 0.08;

        const glow = dist < 100;

        ctx.fillStyle = glow
          ? "#22c55e"
          : "#94a3b8";

        ctx.font = glow
          ? "bold 10px monospace"
          : "10px monospace";

        ctx.fillText(p.char, p.x, p.y);
      });

      requestAnimationFrame(animate);
    };

    const move = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const leave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", move);
    canvas.addEventListener("mouseleave", leave);

    return () => {
      canvas.removeEventListener("mousemove", move);
      canvas.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="rounded-xl border border-zinc-800"
    />
  );
}