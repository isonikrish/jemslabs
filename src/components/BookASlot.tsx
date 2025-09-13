"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";
import { useSearchParams } from "next/navigation";

function BookASlot({ isDefault, size, isFull }: { isDefault: boolean, size: "default" | "sm" | "lg" | "icon", isFull: boolean }) {
    const searchParams = useSearchParams();
    const utmSource = searchParams.get("utm_source") || "";
    const handleButtonClick = () => {
        sendGAEvent("click", {
            event_category: "Engagement",
            event_label: "Book a Slot",
            value: 1,
        });
        const tallyUrl = utmSource
            ? `https://tally.so/r/npEdyb?utm_source=${encodeURIComponent(utmSource)}`
            : "https://tally.so/r/npEdyb";
        setTimeout(() => {
            window.open(tallyUrl, "_blank");
        }, 500);
    };


    return (
        <Button
            onClick={handleButtonClick}
            variant={isDefault ? "default" : "outline"}
            size={size}
            className={`
            group font-semibold flex items-center gap-2
            duration-200 transition-transform hover:scale-105 active:scale-95
            ${isFull ? "w-full" : ""}
            ${isDefault ? "" : "text-white border border-white hover:bg-white/10"}
        `}>
            Book a Slot
            <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>

    );
}

export default BookASlot;
