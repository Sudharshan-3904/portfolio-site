import React from "react";

const BackgroundElements = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
            {/* Static blue radial gradient */}
            <div className="absolute inset-0 bg-radial-gradient-dark" />

            {/* Static dot-matrix grid with radial falloff */}
            <div className="absolute inset-0 bg-dot-matrix opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_90%)]" />

            {/* Faint technical tokens along margins */}
            <div className="hidden xl:block">
                {/* Left margin code tokens */}
                <div className="absolute top-[18%] left-6 font-mono text-[10px] text-sky-400/18 tracking-wider">
                    <span>// agent_loop: active</span>
                </div>
                <div className="absolute top-[34%] left-8 font-mono text-[10px] text-sky-400/15 tracking-widest">
                    <span>λ(prompt) → response</span>
                </div>
                <div className="absolute top-[52%] left-6 font-mono text-[10px] text-primary/22 tracking-widest">
                    <span>&lt;MultiAgentNetwork /&gt;</span>
                </div>
                <div className="absolute top-[72%] left-10 font-mono text-[10px] text-sky-400/16 tracking-wider">
                    <span>sys.path.append(&quot;./core&quot;)</span>
                </div>
                <div className="absolute top-[90%] left-8 font-mono text-[10px] text-sky-400/18 tracking-widest">
                    <span>[ 0x7F · 0x0A · 0x2E ]</span>
                </div>

                {/* Right margin code tokens */}
                <div className="absolute top-[22%] right-6 font-mono text-[10px] text-sky-400/18 tracking-wider text-right">
                    <span>&lt;neural_mesh status=&quot;synced&quot; /&gt;</span>
                </div>
                <div className="absolute top-[42%] right-8 font-mono text-[10px] text-sky-400/15 tracking-widest text-right">
                    <span>∇L_θ(x, y) ⟶ 0.001</span>
                </div>
                <div className="absolute top-[60%] right-6 font-mono text-[10px] text-primary/22 tracking-widest text-right">
                    <span>async def dispatch_task():</span>
                </div>
                <div className="absolute top-[80%] right-10 font-mono text-[10px] text-sky-400/16 tracking-wider text-right">
                    <span>&#123; context_window: 128k &#125;</span>
                </div>
            </div>
        </div>
    );
};

export default BackgroundElements;
