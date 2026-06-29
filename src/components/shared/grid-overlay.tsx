"use client";

import { useEffect, useRef } from "react";

export function GridOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const CELL = 64;

    let lastCell = { c: -1, r: -1 };

    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      // Clear
      ctx.clearRect(0, 0, width, height);

      // Draw grid
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 1;

      for (let x = 0; x <= width; x += CELL) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }

      for (let y = 0; y <= height; y += CELL) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }

      ctx.stroke();

      // Draw hovered cell
      if (lastCell.c >= 0 && lastCell.r >= 0) {
        ctx.fillStyle = "rgba(255,255,255,0.05)";
        ctx.fillRect(
          lastCell.c * CELL,
          lastCell.r * CELL,
          CELL,
          CELL
        );
      }
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;

      // Prevent transform accumulation
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      draw();
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      const c = Math.floor((e.clientX - rect.left) / CELL);
      const r = Math.floor((e.clientY - rect.top) / CELL);

      if (c === lastCell.c && r === lastCell.r) return;

      lastCell = { c, r };
      draw();
    };

    const onMouseLeave = () => {
      if (lastCell.c === -1 && lastCell.r === -1) return;

      lastCell = { c: -1, r: -1 };
      draw();
    };

    resize();

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto -z-10"
    />
  );
}