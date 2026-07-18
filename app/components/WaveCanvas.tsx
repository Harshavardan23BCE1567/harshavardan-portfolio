"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const waves = [
      { amplitude: 30, frequency: 0.01, speed: 0.02, color: "rgba(59, 130, 246, 0.15)", yOffset: 0.3 },
      { amplitude: 20, frequency: 0.015, speed: 0.015, color: "rgba(6, 182, 212, 0.1)", yOffset: 0.5 },
      { amplitude: 40, frequency: 0.008, speed: 0.025, color: "rgba(99, 102, 241, 0.08)", yOffset: 0.7 },
      { amplitude: 15, frequency: 0.02, speed: 0.018, color: "rgba(59, 130, 246, 0.05)", yOffset: 0.4 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;

        const mouseInfluence = (mouseRef.current.x / canvas.width - 0.5) * 20;

        for (let x = 0; x < canvas.width; x += 2) {
          const y =
            canvas.height * wave.yOffset +
            Math.sin(x * wave.frequency + time * wave.speed + mouseInfluence * 0.01) *
              wave.amplitude +
            Math.sin(x * wave.frequency * 2 + time * wave.speed * 1.5) *
              (wave.amplitude * 0.3);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      });

      // Subtle radial gradient overlay
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.8
      );
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.03)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
        }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
