"use client";

import React, { useLayoutEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import {
    Lightbulb,
    ShieldCheck,
    LayoutDashboard,
    Code,
    Rocket,
    TrendingUp,
} from "lucide-react";
import gsap from "gsap";

const steps = [
    { title: "Discovery Call", desc: "We understand your idea, goals, and vision in a quick call.", icon: <Lightbulb className="w-8 h-8 text-white" />, color: "from-blue-500 to-cyan-500" },
    { title: "Validation Call", desc: "We validate your idea, align on the MVP scope, and outline the tech plan.", icon: <ShieldCheck className="w-8 h-8 text-white" />, color: "from-green-500 to-emerald-500" },
    { title: "Design", desc: "We create clean wireframes and visuals so you see how it feels early.", icon: <LayoutDashboard className="w-8 h-8 text-white" />, color: "from-purple-500 to-pink-500" },
    { title: "Development", desc: "We build fast using modern tech, updating you every step of the way.", icon: <Code className="w-8 h-8 text-white" />, color: "from-yellow-500 to-orange-500" },
    { title: "Launch & Deploy", desc: "Your MVP goes live with proper deployment, monitoring, and basic analytics.", icon: <Rocket className="w-8 h-8 text-white" />, color: "from-red-500 to-pink-500" },
    { title: "Growth Execution", desc: "Our team starts working on content, ads & growth strategies immediately.", icon: <TrendingUp className="w-8 h-8 text-white" />, color: "from-teal-500 to-cyan-600" },
];

const cardVariants: Variants = {
    offscreen: { opacity: 0, y: 50, scale: 0.95 },
    onscreen: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 } as const,
    },
};

export default function OurProcess() {
    const processRef = useRef<HTMLDivElement | null>(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".process-header > *", {
                y: 56,
                opacity: 0,
                skewY: 4,
                duration: 1.1,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: { trigger: ".process-header", start: "top 80%" },
            });
        })
        return () => ctx.revert();
    }, [])
    return (
        <section className="relative w-full py-16 md:py-24 px-4 md:px-12 bg-background text-white text-center overflow-hidden border-t" id="process"
            ref={processRef}>
            <div className="absolute left-[-80px] top-[15%] w-60 h-60 md:w-80 md:h-80 bg-blue-500 opacity-10 rounded-full blur-3xl z-0" />
            <div className="absolute right-[-80px] top-[55%] w-60 h-60 md:w-80 md:h-80 bg-green-400 opacity-10 rounded-full blur-3xl z-0" />

            {/* Header */}
            <div className="relative z-10 mb-12 md:mb-16 process-header">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Our Process</h2>
                <p className="text-sm md:text-base lg:text-lg text-gray-400 mt-4 md:mt-6 max-w-2xl mx-auto leading-relaxed">
                    From discovery to launch and growth – we guide founders through every step with clarity, speed, and modern execution.
                </p>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-16 md:gap-24 max-w-4xl mx-auto">
                {steps.map((step, i) => {
                    const isLast = i === steps.length - 1;

                    return (
                        <motion.div
                            key={i}
                            className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-6"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div
                                className="relative flex-1 p-8 md:p-16 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
                                variants={cardVariants}
                            >
                                <div className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 text-xs md:text-sm px-3 md:px-5 py-1 font-medium text-white bg-zinc-900 rounded-full border border-white/20 shadow-md">
                                    Step {i + 1}
                                </div>

                                <div
                                    className={`mx-auto mb-6 md:mb-8 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-gradient-to-br ${step.color} shadow-lg`}
                                >
                                    {step.icon}
                                </div>

                                <h3 className="text-xl md:text-3xl font-semibold text-center tracking-wide">{step.title}</h3>
                                <p className="text-sm md:text-lg text-gray-300 text-center mt-2 md:mt-4 leading-relaxed">{step.desc}</p>
                            </motion.div>

                            {!isLast && (
                                <div className="hidden md:flex flex-col items-center w-[4%] relative z-10">
                                    <div className="w-2 md:w-3 h-2 md:h-3 bg-white rounded-full mb-1" />
                                    <div className="h-12 md:h-16 w-[2px] bg-gradient-to-b from-white/30 to-white/10" />
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
