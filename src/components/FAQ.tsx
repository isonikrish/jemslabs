"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who do you typically work with?",
    answer: "We primarily work with early-stage startup founders, indie hackers, and small teams looking to launch fast, validated MVPs.",
  },
  {
    question: "How long does it take to build and launch a startup MVP?",
    answer: "Most MVPs are shipped within 1–3 weeks depending on scope and features. We prioritize speed without compromising user experience.",
  },
  {
    question: "When can we start working together?",
    answer: "You can start right after the discovery call. We onboard you quickly and move into validation and design the same week.",
  },
  {
    question: "How do we communicate during the project?",
    answer: "We share progress through weekly check-ins, milestone updates, async Slack/Notion access, and real-time feedback loops.",
  },
  {
    question: "Can I change the scope or add features during development?",
    answer: "Yes. We follow short, iterative sprints so you can adjust or evolve features based on feedback without slowing down.",
  },
  {
    question: "Is my idea safe with you?",
    answer: "Yes — we respect your IP. NDAs are welcome, and your startup idea is handled with full confidentiality and professionalism.",
  },
]

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative border-t min-h-screen w-full py-24 px-6 md:px-12 bg-background text-white text-center overflow-hidden"
    >
      {/* Only keep dots background */}
      <div className="absolute inset-0 bg-dots-small opacity-10 pointer-events-none z-0" />

      <div className="max-w-3xl mx-auto text-center mb-12 relative">
        <h2 className="text-3xl md:text-4xl font-bold">FAQs</h2>
        <p className="text-base md:text-lg text-gray-400 mt-4">
          Everything you need to know before getting started.
        </p>
      </div>

      <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-md transition-all"
          >
            <AccordionTrigger className="px-4 py-3 text-left text-white text-base md:text-lg font-medium hover:underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-1 text-gray-400 text-sm md:text-base text-left">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
