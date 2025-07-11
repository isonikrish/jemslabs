"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";
import { useRouter } from "next/navigation";

function BookACall({ isDefault, size, isFull }: { isDefault: boolean, size: "default" | "sm" | "lg" | "icon" , isFull:boolean}) {
    const router = useRouter();

    const handleButtonClick = () => {
        sendGAEvent("click", {
            event_category: "Engagement",
            event_label: "Book a Free Call",
            value: 1,
        });

        setTimeout(() => {
            window.open("https://cal.com/isonikrish/book", "_blank");
        }, 500);
    };


    return (
        <Button onClick={handleButtonClick} variant={isDefault ? "default" : "outline"} size={size} className={`group ${isFull ? "w-full": ""} ${isDefault ? "" : "text-white"}`}>Book a Free Call <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" /></Button>
    );
}

export default BookACall;
