// StarryCanvas.tsx
import React, { useRef, useEffect } from 'react';

const StarryCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const numStars = 200;
    const mouse = { x: width / 2, y: height / 2 };

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      // Draw stars
      ctx.fillStyle = 'white';
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Connect stars with each other
      window.innerWidth > 768 && (ctx.globalAlpha = 0.5); // Reduce opacity on smaller screens
      if( window.innerWidth > 768){
        for (let i = 0; i < numStars; i++) {
          for (let j = i + 1; j < numStars; j++) {
            const dx = stars[i].x - stars[j].x;
            const dy = stars[i].y - stars[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
  
            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
              ctx.moveTo(stars[i].x, stars[i].y);
              ctx.lineTo(stars[j].x, stars[j].y);
              ctx.stroke();
            }
          }
        }
      }

      // Connect stars to mouse
      stars.forEach((star) => {
        const dx = star.x - mouse.x;
        const dy = star.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 150})`;
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      // Move stars
      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > width) star.vx *= -1;
        if (star.y < 0 || star.y > height) star.vy *= -1;
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        background: 'black',
      }}
    />
  );
};

export default StarryCanvas;



// import React, { useRef, useEffect } from 'react';

// const StarryCanvas: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     canvas.width = width;
//     canvas.height = height;

//     const stars: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
//     const numStars = 400; // more stars!
//     const mouse = { x: -9999, y: -9999 }; // start mouse far away (inactive)

//     for (let i = 0; i < numStars; i++) {
//       stars.push({
//         x: Math.random() * width,
//         y: Math.random() * height,
//         vx: (Math.random() - 0.5) * 0.5,
//         vy: (Math.random() - 0.5) * 0.5,
//         radius: Math.random() * 1.5 + 0.5,
//       });
//     }

//     const draw = () => {
//       if (!ctx) return;

//       ctx.clearRect(0, 0, width, height);

//       ctx.fillStyle = 'white';
//       stars.forEach((star) => {
//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//         ctx.fill();
//       });

//       // ✅ Connect only when mouse is active (near)
//       if (mouse.x !== -9999 && mouse.y !== -9999) {
//         for (let i = 0; i < numStars; i++) {
//           for (let j = i + 1; j < numStars; j++) {
//             const dx = stars[i].x - stars[j].x;
//             const dy = stars[i].y - stars[j].y;
//             const distance = Math.sqrt(dx * dx + dy * dy);

//             const distanceToMouseI = Math.sqrt((stars[i].x - mouse.x) ** 2 + (stars[i].y - mouse.y) ** 2);
//             const distanceToMouseJ = Math.sqrt((stars[j].x - mouse.x) ** 2 + (stars[j].y - mouse.y) ** 2);

//             // connect if near mouse AND near each other
//             if (distance < 120 && (distanceToMouseI < 200 || distanceToMouseJ < 200)) {
//               ctx.beginPath();
//               ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 120})`;
//               ctx.moveTo(stars[i].x, stars[i].y);
//               ctx.lineTo(stars[j].x, stars[j].y);
//               ctx.stroke();
//             }
//           }
//         }
//       }

//       stars.forEach((star) => {
//         star.x += star.vx;
//         star.y += star.vy;

//         if (star.x < 0 || star.x > width) star.vx *= -1;
//         if (star.y < 0 || star.y > height) star.vy *= -1;
//       });

//       requestAnimationFrame(draw);
//     };

//     draw();

//     const handleMouseMove = (e: MouseEvent) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };

//     const handleMouseLeave = () => {
//       mouse.x = -9999;
//       mouse.y = -9999;
//     };

//     const handleResize = () => {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       canvas.width = width;
//       canvas.height = height;
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseleave', handleMouseLeave);
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseleave', handleMouseLeave);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         zIndex: -1,
//         background: 'black',
//       }}
//     />
//   );
// };

// export default StarryCanvas;

