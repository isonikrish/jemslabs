"use client";

import { Check, Flame } from "lucide-react";
import BookACall from "./BookACall";

const plans = [
  {
    title: "MVP + Launch Plan",
    marketPrice: "$4000",
    priceUSD: "$1299",
    discountNote: "67% off",
    description: "Perfect for startups ready to turn ideas into reality - fast and loud.",
    features: [
      "Full-stack MVP (Web or Mobile)",
      "Custom UI/UX Design",
      "Basic AI Integration (e.g. chatbot)",
      "Landing Page + Marketing Content",
      "Launch strategy + Social setup",
      "3-week delivery with weekly updates",
    ],
    highlight: "Most Popular",
  },
  {
    title: "Monthly Retainer",
    marketPrice: "$2000",
    priceUSD: "$999/mo",
    discountNote: "50% off",
    description: "Ideal for startups scaling post-launch with AI, features, and growth.",
    features: [
      "Ongoing development (features, AI, infra)",
      "Continuous marketing (content + ads)",
      "Weekly strategy & review calls",
      "Priority support via Slack/Notion",
      "3-month minimum, pause anytime after",
    ],
    highlight: "Growth Partner",
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="relative border-t w-full py-24 px-6 md:px-12 bg-background text-white text-center overflow-hidden"
    >
      <div className="absolute left-[-100px] top-[25%] w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute right-[-100px] top-[65%] w-72 h-72 bg-green-400 opacity-20 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
        <p className="text-base md:text-lg text-gray-400 mt-4">
          We don&apos;t just build products - we help you launch, grow, and scale like a modern founder.
        </p>
        <div className="mt-2 inline-flex items-center justify-center gap-2 text-sm text-green-400 font-medium bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm mx-auto">
          <Flame className="w-4 h-4" />
          Limited slots available this month
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto relative z-10">
        {plans.map((plan, index) => {
          const isMVP = plan.title === "MVP + Launch Plan";
          return (
            <div
              key={index}
              className={`flex flex-col justify-between rounded-2xl border p-8 transition shadow-sm hover:shadow-2xl backdrop-blur-md
                ${isMVP
                  ? "bg-gradient-to-br from-blue-500/30 to-green-500/30 md:scale-[1.06] lg:scale-[1.1] border-white/30 shadow-lg"
                  : "bg-white/5 border-white/10 hover:border-white/20"}`}
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-semibold text-white">{plan.title}</h3>
                  {plan.highlight && (
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium border ${
                        isMVP
                          ? "bg-white/10 text-white border-white/20"
                          : "bg-green-500/10 text-green-300 border-green-400/20"
                      }`}
                    >
                      {plan.highlight}
                    </span>
                  )}
                </div>

                <p className="text-gray-300 text-left">{plan.description}</p>

                <div className="text-left mt-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-gray-400">starts at</p>
                    <div className="flex gap-2">
                      <p className="text-4xl font-bold text-white">{plan.priceUSD}</p>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="mt-6 mb-4 space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-200">
                    <Check className="text-green-400 mr-2 w-5 h-5" /> {feature}
                  </li>
                ))}
              </ul>

              <BookACall isDefault={isMVP} size="default" isFull={true} />
            </div>
          );
        })}
      </div>

      <div className="mt-14 text-sm text-gray-400 max-w-xl mx-auto px-4 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-5 backdrop-blur-sm">
          <p>
            <span className="text-white font-medium">Early-stage founder?</span> We&apos;re open to select{" "}
            <span className="text-green-400 font-medium">equity-based collaborations</span> with ambitious teams.
          </p>
          <div className="mt-4">
            <BookACall isDefault={false} size="default" isFull={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
