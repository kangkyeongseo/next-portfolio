'use client';
import { useEffect, useRef, useState } from 'react';
import Loading from '../Loading';

export default function Wave() {
  const totalPoints = 6;
  const totalWaves = 3;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [stageWidth, setStageWidth] = useState(0);
  const [stageHeight, setStageHeight] = useState(0);
  const [waves, setWaves] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const draw = (context: CanvasRenderingContext2D) => {
    waves.forEach(points => {
      let prevX = points[0].x;
      let prevY = points[0].y;
      context.fillStyle = 'rgba(0,199,235,0.4)';
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
    const newWaves = waves.map(points =>
      points.map((point: any) => {
        point.cur += point.speed;
        point.y = point.fixedY + Math.sin(point.cur) * point.maxY;
        return point;
      }),
    );

    setWaves(newWaves);
  };

  const animate = () => {
    if (isLoading) {
      setIsLoading(false);
    }
    if (context) {
      context.clearRect(0, 0, stageWidth, stageHeight);
      draw(context);
    }
  };

  const resize = () => {
    setStageWidth(document.body.clientWidth);
    setStageHeight(window.innerHeight);
  };

  // 캔버스 사이즈 조정
  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // 캔버스 컨텍스트 상태 설정
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      setContext(canvas.getContext('2d'));
    }
  }, [canvasRef]);

  // 사이즈가 변하거나 컨텍스트 상태가 변할 때 마다 캔버스 사이즈 설정
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && context) {
      canvas.width = stageWidth;
      canvas.height = stageHeight;
      context.scale(1, 1);
    }
    // const pointGap = stageWidth / (totalPoints - 1);
    // const newWaves = waves.map(wave => {
    //   wave.map((point: any) => {
    //     point.x = pointGap * point.order;
    //   });
    // });
    // setWaves(newWaves);
  }, [stageWidth, stageHeight, context]);

  // 파도의 상태가 변하면 실행
  useEffect(() => {
    if (waves.length > 0) {
      requestAnimationFrame(animate);
    }
  }, [waves]);

  // 사이즈가 변하거나 컨텍스트 상태가 변할 때 마다 파도 상태 설정
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
    }
  }, [stageWidth, stageHeight, context]);

  return (
    <div className='absolute top-0 h-full w-full'>
      {isLoading && <Loading />}
      <canvas ref={canvasRef} />
    </div>
  );
}
