import React, { useEffect, useRef } from "react";

const BackgroundElements = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Dense firefly counts: 150 on desktop, 100 on tablet, 65 on mobile
        const getParticleCount = () => {
            if (window.innerWidth < 640) return 65;
            if (window.innerWidth < 1024) return 100;
            return 150;
        };

        let fireflies = [];

        const createFirefly = () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.22,
            vy: (Math.random() - 0.5) * 0.22,
            // Firefly curved drifting motion
            wanderAngle: Math.random() * Math.PI * 2,
            wanderSpeed: (Math.random() - 0.5) * 0.03,
            // Small micro-dot core
            radius: Math.random() * 0.6 + 0.6,
            // Natural firefly bio-luminescence cycle
            fireflyPhase: Math.random() * Math.PI * 2,
            // Varied pulse periods (each firefly flashes asynchronously)
            cycleSpeed: Math.random() * 0.018 + 0.009,
            // Threshold: stays dark ~60% of the time, swells in glow for ~40%
            glowThreshold: Math.random() * 0.25 + 0.45,
            peakAlpha: Math.random() * 0.45 + 0.4,
            restingAlpha: Math.random() * 0.025 + 0.02,
            currentIntensity: 0,
        });

        const initFireflies = () => {
            const count = getParticleCount();
            fireflies = [];
            for (let i = 0; i < count; i++) {
                fireflies.push(createFirefly());
            }
        };

        initFireflies();

        let mouse = { x: -1000, y: -1000, active: false };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
        };

        const handleMouseLeave = () => {
            mouse.active = false;
            mouse.x = -1000;
            mouse.y = -1000;
        };

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initFireflies();
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("mouseleave", handleMouseLeave);

        let isVisible = true;
        const handleVisibilityChange = () => {
            isVisible = document.visibilityState === "visible";
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);

        const render = () => {
            if (!isVisible) {
                animationFrameId = requestAnimationFrame(render);
                return;
            }

            ctx.clearRect(0, 0, width, height);

            const count = fireflies.length;
            const maxConnectDist = width < 768 ? 75 : 95;

            // 1. Update and draw each firefly
            for (let i = 0; i < count; i++) {
                const f = fireflies[i];

                // Meandering organic flight curve
                f.wanderAngle += f.wanderSpeed;
                f.x += Math.cos(f.wanderAngle) * 0.28 + f.vx;
                f.y += Math.sin(f.wanderAngle) * 0.28 + f.vy;

                // Wrap-around edges softly
                if (f.x < -12) f.x = width + 12;
                else if (f.x > width + 12) f.x = -12;
                if (f.y < -12) f.y = height + 12;
                else if (f.y > height + 12) f.y = -12;

                // Firefly bio-luminescent pulse (smooth sine bell curve)
                f.fireflyPhase += f.cycleSpeed;
                const rawSine = Math.sin(f.fireflyPhase);

                let intensity = 0;
                if (rawSine > f.glowThreshold) {
                    const normalized = (rawSine - f.glowThreshold) / (1 - f.glowThreshold);
                    // Smooth sinusoidal flash curve
                    intensity = Math.sin(normalized * Math.PI);
                }
                f.currentIntensity = intensity;

                // Mouse disturbance: fireflies gently illuminate and steer away softly
                if (mouse.active) {
                    const mdx = f.x - mouse.x;
                    const mdy = f.y - mouse.y;
                    const mdist = Math.hypot(mdx, mdy);
                    if (mdist < 110) {
                        const push = (1 - mdist / 110) * 0.35;
                        f.x += (mdx / (mdist || 1)) * push;
                        f.y += (mdy / (mdist || 1)) * push;
                        f.currentIntensity = Math.max(f.currentIntensity, (1 - mdist / 110) * 0.7);
                    }
                }

                const currentAlpha = f.restingAlpha + f.currentIntensity * f.peakAlpha;

                // When glowing, draw soft blue halo
                if (f.currentIntensity > 0.08) {
                    ctx.beginPath();
                    ctx.arc(f.x, f.y, f.radius * (2.8 + f.currentIntensity * 2.2), 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(56, 189, 248, ${f.currentIntensity * 0.22})`;
                    ctx.fill();
                }

                // Core luminous bead (ice-blue / sky-blue during peak glow)
                ctx.beginPath();
                ctx.arc(f.x, f.y, f.radius * (1 + f.currentIntensity * 0.4), 0, Math.PI * 2);
                ctx.fillStyle = f.currentIntensity > 0.35
                    ? `rgba(186, 230, 253, ${Math.min(0.85, currentAlpha * 1.3)})`
                    : `rgba(56, 189, 248, ${currentAlpha})`;
                ctx.fill();

                // 2. Connect nearby fireflies with bio-luminescent blue threads when both are lit
                for (let j = i + 1; j < count; j++) {
                    const f2 = fireflies[j];
                    const dx = f.x - f2.x;
                    const dy = f.y - f2.y;
                    const dist = Math.hypot(dx, dy);

                    if (dist < maxConnectDist) {
                        const jointGlow = (f.currentIntensity + f2.currentIntensity) * 0.5;
                        // Thread illuminates organically when both fireflies are glowing
                        if (jointGlow > 0.06) {
                            const lineAlpha = (1 - dist / maxConnectDist) * 0.08 * jointGlow;
                            if (lineAlpha > 0.003) {
                                ctx.beginPath();
                                ctx.moveTo(f.x, f.y);
                                ctx.lineTo(f2.x, f2.y);
                                ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
                                ctx.lineWidth = 0.4;
                                ctx.stroke();
                            }
                        }
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
            {/* Base dark radial blue vignette (muted & subtle) */}
            <div className="absolute inset-0 bg-radial-gradient-dark" />

            {/* Deep, muted blue ambient glow orbs */}
            <div className="absolute top-[8%] -right-24 w-[520px] h-[520px] rounded-full bg-primary/9 blur-[150px] animate-ambient-drift-1" />
            <div className="absolute top-[38%] -left-32 w-[600px] h-[600px] rounded-full bg-accent/6 blur-[160px] animate-ambient-drift-2" />
            <div className="absolute top-[68%] right-[5%] w-[480px] h-[480px] rounded-full bg-blue-950/15 blur-[140px] animate-ambient-drift-3" />
            <div className="absolute top-[88%] -left-20 w-[550px] h-[550px] rounded-full bg-primary/8 blur-[150px] animate-ambient-drift-1" />

            {/* Dense 20px dot-matrix grid with subtle electronic glow and radial falloff */}
            <div className="absolute inset-0 bg-dot-matrix opacity-25 animate-grid-flicker [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_90%)]" />

            {/* Extremely faint horizontal blue scanning beam */}
            <div className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-primary/4 to-transparent animate-scanline pointer-events-none" />

            {/* Dense firefly constellation canvas with organic bio-luminescent pulse */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            {/* Faint, firefly-glowing technical tokens along margins */}
            <div className="hidden xl:block">
                {/* Left margin code tokens */}
                <div className="absolute top-[18%] left-6 font-mono text-[10px] text-sky-400/18 tracking-wider animate-float-slow animate-firefly-glow">
                    <span>// agent_loop: active</span>
                </div>
                <div className="absolute top-[34%] left-8 font-mono text-[10px] text-sky-400/15 tracking-widest animate-float-slow-delay1 animate-firefly-glow-delay1">
                    <span>λ(prompt) → response</span>
                </div>
                <div className="absolute top-[52%] left-6 font-mono text-[10px] text-primary/22 tracking-widest animate-float-slow-delay2 animate-firefly-glow-delay2">
                    <span>&lt;MultiAgentNetwork /&gt;</span>
                </div>
                <div className="absolute top-[72%] left-10 font-mono text-[10px] text-sky-400/16 tracking-wider animate-float-slow animate-firefly-glow-delay1">
                    <span>sys.path.append(&quot;./core&quot;)</span>
                </div>
                <div className="absolute top-[90%] left-8 font-mono text-[10px] text-sky-400/18 tracking-widest animate-float-slow-delay1 animate-firefly-glow">
                    <span>[ 0x7F · 0x0A · 0x2E ]</span>
                </div>

                {/* Right margin code tokens */}
                <div className="absolute top-[22%] right-6 font-mono text-[10px] text-sky-400/18 tracking-wider text-right animate-float-slow-delay1 animate-firefly-glow-delay2">
                    <span>&lt;neural_mesh status=&quot;synced&quot; /&gt;</span>
                </div>
                <div className="absolute top-[42%] right-8 font-mono text-[10px] text-sky-400/15 tracking-widest text-right animate-float-slow-delay2 animate-firefly-glow">
                    <span>∇L_θ(x, y) ⟶ 0.001</span>
                </div>
                <div className="absolute top-[60%] right-6 font-mono text-[10px] text-primary/22 tracking-widest text-right animate-float-slow animate-firefly-glow-delay1">
                    <span>async def dispatch_task():</span>
                </div>
                <div className="absolute top-[80%] right-10 font-mono text-[10px] text-sky-400/16 tracking-wider text-right animate-float-slow-delay1 animate-firefly-glow-delay2">
                    <span>&#123; context_window: 128k &#125;</span>
                </div>
            </div>
        </div>
    );
};

export default BackgroundElements;
