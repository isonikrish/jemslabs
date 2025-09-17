"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

function BookASlot({ isDefault, size, isFull }: { isDefault: boolean, size: "default" | "sm" | "lg" | "icon", isFull: boolean }) {

    const handleButtonClick = () => {

        const utmSource = sessionStorage.getItem("utm_source") || "direct";
        sendGAEvent("book_slot", {
            event_category: "Leads",
            event_label: "Book a Slot",
            utm_source: utmSource,
        });
        const tallyUrl = `https://tally.so/r/npEdyb?utm_source=${encodeURIComponent(utmSource)}`;
        setTimeout(() => {
            window.open(tallyUrl, "_blank", "noopener,noreferrer");
        }, 200);
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
