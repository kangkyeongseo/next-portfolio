"use client";

import { useEffect, useRef, useState } from "react";

export default function Wave() {
  const totalPoints = 6;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [stageWidth, setStageWidth] = useState(0);
  const [stageHeight, setStageHeight] = useState(0);
  const [points, setPoints] = useState<any[]>([]);

  const draw = (context: CanvasRenderingContext2D) => {
    let prevX = points[0].x;
    let prevY = points[0].y;
    context.fillStyle = "rgba(0,199,235,0.4)";
    context.beginPath();
    context.moveTo(prevX, prevY);
    points.forEach((point) => {
      const cx = (prevX + point.x) / 2;
      const cy = (prevY + point.y) / 2;
      context.quadraticCurveTo(prevX, prevY, cx, cy);
      prevX = point.x;
      prevY = point.y;
    });
    context.lineTo(prevX, prevY);
    context.lineTo(stageWidth, stageHeight);
    context.lineTo(points[0].x, stageHeight);
    context.fill();
    const newPoints = points.map((point) => {
      point.cur += point.speed;
      point.y = point.fixedY + Math.sin(point.cur) * point.maxY;
      return point;
    });
    setPoints(newPoints);
  };

  const animate = () => {
    if (context) {
      context.clearRect(0, 0, stageWidth, stageHeight);
      draw(context);
    }
  };

  const resize = () => {
    setStageWidth(document.body.clientWidth);
    setStageHeight(document.body.clientHeight);
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      setContext(canvas.getContext("2d"));
    }
  }, [canvasRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && context) {
      canvas.width = stageWidth;
      canvas.height = stageHeight;
      context.scale(1, 1);
    }
    const pointGap = stageWidth / (totalPoints - 1);
    const newPoints = points.map((point) => {
      point.x = pointGap * point.order;
    });
    setPoints(newPoints);
  }, [stageWidth, stageHeight, context]);

  useEffect(() => {
    if (points.length > 0) {
      requestAnimationFrame(animate);
    }
  }, [points]);

  useEffect(() => {
    if (context) {
      const newPoints = [];
      const pointGap = stageWidth / (totalPoints - 1);

      for (let i = 0; i < totalPoints; i++) {
        const point = {
          order: i,
          x: pointGap * i,
          y: stageHeight / 2,
          fixedY: stageHeight / 2,
          speed: 0.05,
          cur: i,
          maxY: Math.random() * 100 + 150,
        };
        newPoints[i] = point;
      }

      setPoints(newPoints);
    }
  }, [context]);

  return <canvas ref={canvasRef} />;
}
