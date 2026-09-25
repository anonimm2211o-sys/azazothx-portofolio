import React, { useEffect, useRef } from 'react';

export default function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Cosmic Stars (Foreground, Midground, Background)
    const starCount = Math.min(Math.floor((width * height) / 8000), 140);
    const stars = [];

    const colors = ['#ffffff', '#c084fc', '#818cf8', '#38bdf8', '#e879f9'];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.4,
        alpha: Math.random() * 0.7 + 0.3,
        baseAlpha: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.2 + 0.05,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Shooting Meteors
    const meteors = [];
    const spawnMeteor = () => {
      if (meteors.length < 3) {
        meteors.push({
          x: Math.random() * width * 1.2,
          y: Math.random() * (height * 0.4),
          length: Math.random() * 80 + 50,
          speed: Math.random() * 6 + 4,
          angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
          alpha: 1,
          thickness: Math.random() * 2 + 1,
          color: Math.random() > 0.5 ? '#c084fc' : '#38bdf8'
        });
      }
    };

    let meteorTimer = setInterval(spawnMeteor, 3500);

    // Mouse tracking for constellation lines
    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!prefersReducedMotion) {
          star.y -= star.speed;
          if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
          }

          // Twinkle effect
          star.alpha = star.baseAlpha + Math.sin(Date.now() * star.twinkleSpeed) * 0.25;
          if (star.alpha > 1) star.alpha = 1;
          if (star.alpha < 0.15) star.alpha = 0.15;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.shadowBlur = star.radius * 5;
        ctx.shadowColor = star.color;
        ctx.fill();

        // Connect stars near mouse (Constellation effect)
        const dx = mouse.x - star.x;
        const dy = mouse.y - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120 && !prefersReducedMotion) {
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = '#c084fc';
          ctx.globalAlpha = (1 - dist / 120) * 0.35;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }

      // Draw and update meteors
      if (!prefersReducedMotion) {
        for (let i = meteors.length - 1; i >= 0; i--) {
          const m = meteors[i];
          m.x -= Math.cos(m.angle) * m.speed;
          m.y += Math.sin(m.angle) * m.speed;
          m.alpha -= 0.012;

          if (m.alpha <= 0 || m.x < 0 || m.y > height) {
            meteors.splice(i, 1);
            continue;
          }

          const tailX = m.x + Math.cos(m.angle) * m.length;
          const tailY = m.y - Math.sin(m.angle) * m.length;

          const gradient = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
          gradient.addColorStop(0, m.color);
          gradient.addColorStop(1, 'transparent');

          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(tailX, tailY);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = m.thickness;
          ctx.globalAlpha = m.alpha;
          ctx.shadowBlur = 10;
          ctx.shadowColor = m.color;
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(meteorTimer);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Background Deep Cosmic Gradients */}
      <div className="absolute inset-0 bg-[#05050f]" />
      
      {/* Dynamic Nebula Glow Orbs with fluid blur */}
      <div className="absolute -top-40 -left-40 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full bg-purple-700/20 blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 md:w-[650px] md:h-[650px] rounded-full bg-indigo-600/18 blur-[150px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 md:w-[550px] md:h-[550px] rounded-full bg-fuchsia-600/15 blur-[140px] pointer-events-none animate-float-reverse" />
      
      {/* Subtle Cosmic Grid Lines Overlay */}
      <div className="absolute inset-0 cosmic-grid-bg opacity-35 pointer-events-none" />
      
      {/* Star & Meteor Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
}
