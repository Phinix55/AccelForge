import React, { useRef, useEffect, useState } from 'react';

const InteractiveGrid = () => {
    const canvasRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        
        // Set canvas size
        canvas.width = rect.width;
        canvas.height = rect.height;
        
        const gridSize = 60;
        const glowRadius = 200; // Distance from mouse for glow effect
        
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw vertical lines
            for (let x = 0; x <= canvas.width; x += gridSize) {
                for (let y = 0; y < canvas.height; y += 5) {
                    const dx = mousePos.x - x;
                    const dy = mousePos.y - y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    // Calculate opacity and glow based on distance from mouse
                    let opacity = 0.05;
                    let lineWidth = 1;
                    
                    if (distance < glowRadius) {
                        const intensity = 1 - (distance / glowRadius);
                        opacity = 0.05 + intensity * 0.09;
                        lineWidth = 1 + intensity * 1.5;
                    } else {
                        ctx.shadowBlur = 0;
                    }
                    
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.lineWidth = lineWidth;
                    
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x, Math.min(y + 5, canvas.height));
                    ctx.stroke();
                }
            }
            
            // Draw horizontal lines
            for (let y = 0; y <= canvas.height; y += gridSize) {
                for (let x = 0; x < canvas.width; x += 5) {
                    const dx = mousePos.x - x;
                    const dy = mousePos.y - y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    // Calculate opacity and glow based on distance from mouse
                    let opacity = 0.05;
                    let lineWidth = 1;
                    
                    if (distance < glowRadius) {
                        const intensity = 1 - (distance / glowRadius);
                        opacity = 0.05 + intensity * 0.09;
                        lineWidth = 1 + intensity * 1.5;
                    } else {
                        ctx.shadowBlur = 0;
                    }
                    
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.lineWidth = lineWidth;
                    
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(Math.min(x + 5, canvas.width), y);
                    ctx.stroke();
                }
            }
        };
        
        draw();
    }, [mousePos]);
    
    const handleMouseMove = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };
    
    const handleMouseLeave = () => {
        setMousePos({ x: -1000, y: -1000 });
    };
    
    return (
        <canvas
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="absolute inset-0 w-full h-full pointer-events-auto"
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default InteractiveGrid;
