"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Lightbulb,
    ShieldCheck,
    LayoutDashboard,
    Code,
    Rocket,
    TrendingUp,
} from "lucide-react";

const steps = [
    {
        title: "Discovery Call",
        desc: "We understand your idea, goals, and vision in a quick call.",
        icon: <Lightbulb className="w-6 h-6 text-white" />,
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Validation Call",
        desc: "We validate your idea, align on the MVP scope, and outline the tech plan.",
        icon: <ShieldCheck className="w-6 h-6 text-white" />,
        color: "from-green-500 to-emerald-500",
    },
    {
        title: "Design",
        desc: "We create clean wireframes and visuals so you see how it feels early.",
        icon: <LayoutDashboard className="w-6 h-6 text-white" />,
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "Development",
        desc: "We build fast using modern tech, updating you every step of the way.",
        icon: <Code className="w-6 h-6 text-white" />,
        color: "from-yellow-500 to-orange-500",
    },
    {
        title: "Launch & Deploy",
        desc: "Your MVP goes live with proper deployment, monitoring, and basic analytics.",
        icon: <Rocket className="w-6 h-6 text-white" />,
        color: "from-red-500 to-pink-500",
    },
    {
        title: "Growth Execution",
        desc: "Our team starts working on content, ads & growth strategies immediately.",
        icon: <TrendingUp className="w-6 h-6 text-white" />,
        color: "from-teal-500 to-cyan-600",
    },
];

function OurProcess() {
    return (
        <section
            id="process"
            className="relative w-full py-24 px-6 md:px-12 bg-background text-white text-center overflow-hidden border-t"
        >
            <div className="absolute left-[-100px] top-[25%] w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl z-0" />
            <div className="absolute right-[-100px] top-[60%] w-72 h-72 bg-green-400 opacity-10 rounded-full blur-3xl z-0" />

            <div className="relative z-10 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Our Process</h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
                    From discovery to launch and growth - we guide founders through every step with clarity, speed, and modern execution.
                </p>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                {steps.map((step, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            className={`relative flex flex-col md:flex-row items-center justify-between mb-10 md:mb-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                        >
                            <div className="w-full md:w-[48%]">
                                <div className="relative p-6 pt-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-md transition-transform hover:scale-[1.01]">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs px-3 py-1 font-medium text-white bg-zinc-800 rounded-full border border-zinc-400">

                                        Step {index + 1}
                                    </div>

                                    <div
                                        className={`mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${step.color}`}>
                                        {step.icon}
                                    </div>

                                    <h3 className="text-lg font-semibold text-center">{step.title}</h3>
                                    <p className="text-sm text-gray-400 text-center mt-2">{step.desc}</p>
                                </div>
                            </div>
                            {index !== steps.length - 1 && (
                                <div className="hidden md:flex flex-col items-center w-[4%] relative z-10">
                                    <div className="w-3 h-3 bg-white rounded-full mb-1" />
                                    <div className="h-16 w-[2px] bg-gradient-to-b from-white/30 to-white/10" />
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default OurProcess;
