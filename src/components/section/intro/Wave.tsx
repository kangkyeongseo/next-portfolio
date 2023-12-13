"use client";

import { useEffect, useRef, useState } from "react";

export default function Wave() {
  const totalPoints = 6;
  const totalWaves = 3;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [stageWidth, setStageWidth] = useState(0);
  const [stageHeight, setStageHeight] = useState(0);
  const [points, setPoints] = useState<any[]>([]);
  const [waves, setWaves] = useState<any[]>([]);

  const draw = (context: CanvasRenderingContext2D) => {
    waves.forEach((points) => {
      let prevX = points[0].x;
      let prevY = points[0].y;
      context.fillStyle = "rgba(0,199,235,0.4)";
      context.beginPath();
      context.moveTo(prevX, prevY);
      points.forEach((point: any) => {
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
    });
    const newWaves = waves.map((points) =>
      points.map((point: any) => {
        point.cur += point.speed;
        point.y = point.fixedY + Math.sin(point.cur) * point.maxY;
        return point;
      })
    );

    setWaves(newWaves);
  };

  const animate = () => {
    if (context) {
      context.clearRect(0, 0, stageWidth, stageHeight);
      draw(context);
    }
  };

  const resize = () => {
    setStageWidth(document.body.clientWidth);
    setStageHeight(window.innerHeight);
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
    const newWaves = waves.map((wave) => {
      wave.map((point: any) => {
        point.x = pointGap * point.order;
      });
    });
    /* const newPoints = points.map((point) => {
      point.x = pointGap * point.order;
    });
    setPoints(newPoints); */
    setWaves(newWaves);
  }, [stageWidth, stageHeight, context]);

  useEffect(() => {
    if (waves.length > 0) {
      requestAnimationFrame(animate);
    }
  }, [waves]);

  useEffect(() => {
    if (context) {
      const newWaves = [];
      for (let k = 0; k < totalWaves; k++) {
        const newPoints = [];
        const pointGap = stageWidth / (totalPoints - 1);

        for (let i = 0; i < totalPoints; i++) {
          const point = {
            order: i,
            x: pointGap * i,
            y: stageHeight / 2,
            fixedY: stageHeight / 2,
            speed: 0.03,
            cur: i,
            maxY: Math.random() * 300,
          };
          newPoints[i] = point;
        }

        newWaves[k] = newPoints;
      }
      setWaves(newWaves);
      //setPoints(newPoints);
    }
  }, [context]);

  return (
    <div className="w-full h-full absolute top-0">
      <canvas ref={canvasRef} />
    </div>
  );
}
